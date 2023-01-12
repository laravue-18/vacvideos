<template>
  <div>
    <div class="py-4 shadow">
        <div class="container m-auto flex justify-between">
          <div class="text-2xl font-bold text-gray-800">Travel Videos</div>
          <Button @click="logout">Logout</Button>
        </div>
    </div>
    <div class="flex container m-auto pt-8">
      <div class="flex-1">
        <div v-if="videos.length">
          <video-player  :options="videoOptions"/>
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
            <div class="flex flex-col justify-between pl-3 py-2">
              <div>
                <p class="text-lg font-bold">{{client.Client_Name}}</p>
                <p class="">{{client.Script}}</p>
                <p class="">{{client.Timestamp}}</p>
              </div>
              <!-- <div>
                <p>{{client.videos.length}} videos</p>
              </div> -->
            </div>
          </div>
          <div class="border-t">
            <div v-for="(item, index) in videos" @click="playVideo(item)" class="border-b py-1 flex hover:bg-blue-50" :key="index">
              <div class="w-36">
                <img :src="`/media/${item['Thumbnail']}`"/>
              </div>
              <div class="py-2 pl-4">
                <p>Video {{index}}</p>
                <p>{{getName(item)}}</p>
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
      videoOptions: {
        autoplay: true,
        controls: true,
        src: ''
      }
    };
  },
  computed: {
    user(){
      return this.$store.state.auth.user
    }
  },

  mounted(){
      axios.get(`/api/user`).then(res => {
        this.client = res.data
        let sources = res.data.videos.map(i => {
          i.src = '/media/' + i['Location']
          i.type = 'video/mp4'
          return i
        })
        this.videos = sources
        this.videoOptions = {
          ...(this.videoOptions),
          sources: sources[0]
        }
      })
    },
    updated(){
      // this.$refs['player-container'].click()
    },
    methods: {
      playVideo(source){
        this.videoOptions = {
          ...this.videoOptions,
          sources: [source],
        }
      },
      getName(item){
        let arr = item['Location'].split('/')
        return arr[arr.length - 1]
      },
      logout() {
        this.$store.dispatch("auth/logout");
      },
    }
};
</script>