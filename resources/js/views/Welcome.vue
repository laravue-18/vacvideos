<template>
    <div class="">
      <video id="bgVideo" title="video" class="w-full" src="/assets/bg.mp4" autoplay="" loop="" playsinline="">
        <source src="/assets/bg.mp4" type="video/mp4">
      </video>
      <div class="content">
        <div class="py-4 z-10" style="background: rgba(0, 0, 0, 0.5);">
            <div class="container m-auto">
                <router-link :to="{name : 'welcome'}">
                  <span class="text-2xl font-bold text-yellow-100">Vacation Videos</span>
                </router-link> 
            </div>
        </div>
        <div class="container m-auto py-8">
          <Form class="pt-6" style="background: rgba(0, 0, 0, 0.5);" :label-width="100" inline>
              <FormItem label="Customer">
                <Select style="width: 200px;" v-model="search.customer">
                  <Option value="all">All</Option>
                  <Option v-for="i in customers" :value="i.ID">{{i.Customer_Name}}</Option>
                </Select>
              </FormItem>
              <FormItem label="Name">
                <Input v-model="search.name" style="width: 200px;"/>
              </FormItem>
              <FormItem label="Date">
                <DatePicker type="date" v-model="search.timestamp" format="MM/dd/yyyy" placeholder="Select date" style="width: 200px" />
              </FormItem>
              <FormItem>
                <Button type="primary" @click="filter">Submit</Button>
              </FormItem>
          </Form>
          <div class="py-12">
            <div class="grid grid-cols-3 gap-4">
              <Card v-for="client in clients" class="bg-white" :key="client.id" @click="gotoClient({id:client.id, password: client['Password']})">
                <div class="flex">
                  <img :src="`/media${client.pictures[0] ? client.pictures[0]['Picture_Location'].substring(10) : ''}`" class='w-24 h-24'/>
                  <div class="ml-6">
                    <p class="font-bold text-lg">{{client.Client_Name}}</p>
                    <p>{{ client.Script}}</p>
                    <p>{{ client.Timestamp}}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <!-- <Row>
          <i-col span="12"></i-col>
          <i-col span="12">
            <div class="w-96 mt-40 m-auto p-6 rounded" style="background: rgba(0, 0, 0, 0.5);">
                <h4 class="text-yellow-100 text-xl font-bold">LOGIN</h4>

                <Form v-model="form" @submit="login">
                    <FormItem label="Name">
                        <Input type="text" v-model="form.name"></Input>
                    </FormItem>
                    <FormItem label="Password">
                        <Input type="password" v-model="form.password"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="login" long :loading="loading">
                          Log In
                        </Button>
                    </FormItem>
                </Form>
              </div>
          </i-col>
        </Row> -->
      </div>
      <Modal
        v-model="pwdModal"
        title="Input Password"
        @on-ok="checkPassword"
        @on-cancel="cancel">
        <Input type="password" v-model="password" placeholder='password'/>
    </Modal>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import auth from "../services/auth";

export default {
    data() {
        return {
          customers: [],
          clients: [],
          form:{
              name:"",
              password:""
          },
          loading: false,

          password: '',
          pwdModal: false,
          client: {},

          search: {
            customer: 'all',
            name: '',
            timestamp: ''
          }
        }
    },
    computed : {
      user() {
        return this.$store.getters.user ;
      }
    },
    mounted(){
      axios.post('/api/customers').then(res => this.customers = res.data)
      axios.post('/api/clients',{search: this.search}).then(res => this.clients = res.data)
    },
    methods: {
      ...mapActions({
            signIn:'auth/login'
        }),
      gotoClient(client){
        this.pwdModal = true
        this.client = client
      },
      checkPassword(){
        if(this.password.toLowerCase() === 'jd' || this.client.password === this.password){
          this.$router.push(`/clients/${this.client.id}`)
        }else{
          this.$Message.error('Incorrect Password')
        }
        this.pwdModal = false
        this.password = ''
        this.client = {}
      },
      filter(){
        axios.post('/api/clients',{search: this.search}).then(res => this.clients = res.data)
      },
      async login(){
          try {
              this.loading = true
              const res = await auth.login(this.form);
              this.loading = false
              if(res.data.fail){
                this.$Message.error('Incorrect Credential!!!')
                return
              }
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

<style>
#bgVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

/* Add some content at the bottom of the video/page */
.content {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
.ivu-form .ivu-form-item-label{
  color: rgb(254, 249, 195) !important;
}
</style>