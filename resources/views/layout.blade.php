<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>1880 Town Videos</title>

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="https://unpkg.com/view-ui-plus/dist/styles/viewuiplus.css">
    <script type="text/javascript" src="https://unpkg.com/vue@next"></script>
    <script type="text/javascript" src="https://unpkg.com/view-ui-plus"></script>
</head>
<body>
    <div id="app">
        <div class="shadow-md bg-white ">
            <div class="container mx-auto flex justify-between items-center">
                <a href="/">
                    <img src="/assets/img/logo.png" style="width:200px"/>
                </a> 

                @auth
                    <Button type="primary">
                        Logout
                    </Button>
                @endauth

                @guest
                    <a href='/login'>
                            <Button type='primary'>Login</Button>
                    </a>
                @endguest
            </div>
        </div>

        <div class="container mx-auto py-8">
            @yield('content')
        </div>
    </div>

    <script>
        const app = Vue.createApp({
            data () {
                return {
                    visible: false
                }
            },
            methods: {
                show () {
                    this.visible = true;
                }
            }    
        });
        app.use(ViewUIPlus);
        app.mount("#app");
    </script>
</body>
</html>
