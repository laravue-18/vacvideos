<template>
  <div>
    <div class="py-4 shadow">
        <div class="container m-auto flex justify-between">
          <router-link to="/">
            <div class="text-2xl font-bold text-gray-800">Travel Videos</div>
          </router-link>
          <!-- <Button @click="logout">Logout</Button> -->
        </div>
    </div>
    <div class="flex container m-auto pt-8">
      <div class="flex-1">
        <div v-if="videos.length">
          <video-player  :src="src"/>
        </div>
        <div v-else class="flex justify-center items-center border bg-black" style="height: 500px;">
          <h5 class="text-gray-100 text-2xl font-bold">There is no video.</h5>
        </div>
      </div>
      <div class="pl-3">
        <div style="width: 400px" class="px-4 ml-4 h-full border rounded overflow-auto">
          <div class="flex py-6">
            <div>
              <Avatar :src="'/media/' + (client.pictures.length ? client.pictures[0]['Picture_Location'].substring(11) : 'a.png')" size='120'/>
            </div>
            <div class="pl-3 py-2">
              <p class="text-lg font-bold">{{client.Client_Name}}</p>
              <p class="">{{client.Script}}</p>
              <p class="">{{client.Timestamp}}</p>
            </div>
          </div>
          <div class="border-t">
            <div v-for="(item, index) in videos" @click="playVideo(item)" class="border-b py-1 flex hover:bg-blue-50" :key="index">
              <div class="w-36">
                <img :src="`/media/${item['Thumbnail']}`"/>
              </div>
              <div class="py-2 pl-4">
                <p>Video {{index + 1}}</p>
                <!-- <p>{{getName(item)}}</p> -->
                <p>{{item['Timestamp']}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '../components/VideoPlayer.vue';

export default {
  name: 'VideoExample',
  components: {
    VideoPlayer
  },
  data() {
    return {
      client: {
        pictures: [],
        videos: []
      },
      videos: [],
      src: '',
      videoOptions: {
        autoplay: true,
        controls: true,
        src: ''
      }
    };
  },
  computed: {
  },

  mounted(){
      axios.get(`/api/clients/${this.$route.params.id}`).then(res => {
        this.client = res.data
        this.videos = res.data.videos
        this.src = '/media/' + videos[0]['Location']
      })
    },
    updated(){
    },
    methods: {
      playVideo(source){
        this.src = source
      },
      getName(item){
        let arr = item['Location'].split('/')
        return arr[arr.length - 1]
      },
    }
};
</script>