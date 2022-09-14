<template>
    <div class="flex justify-center">
        <Card class="w-96 mt-40">
            <template #title> Login </template>
            <Form v-model="form">
                <FormItem label="Name">
                    <Input type="text" v-model="form.name"></Input>
                </FormItem>
                <FormItem label="Password">
                    <Input type="password" v-model="form.password"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" long @click="login">Log In</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import auth from "../services/auth";

export default {
    name:"login",
    data(){
        return {
            form:{
                name:"",
                password:""
            },
        }
    },
    methods:{
        ...mapActions({
            signIn:'auth/login'
        }),
        async login(){
            try {
                await auth.login(this.form);
                const authUser = await this.$store.dispatch("auth/getAuthUser");
                if (authUser) {
                    this.$store.dispatch("auth/setGuest", { value: "isNotGuest" });
                    this.$router.push("/home");
                } else {
                const error = Error(
                    "Unable to fetch user after login, check your API settings."
                );
                error.name = "Fetch User";
                throw error;
                }
            } catch (error) {
                this.error = getError(error);
            }
        },
    }
}
</script>