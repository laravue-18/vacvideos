<template>
  <div>
    <div class="py-4 shadow">
        <div class="container m-auto flex justify-between">
          <router-link to="/">
            <div class="text-2xl font-bold text-gray-800">Travel Videos</div>
          </router-link>
        </div>
    </div>
    <div class='flex container m-auto pt-3'>
      <div class='flex-1'>
        <video ref="videoPlayer" class="video-js"/>
        <p class="text-lg font-bold mt-4">{{player && playlist && player.playlist.currentItem ? playlist[player.playlist.currentItem()]['name'] : ''}}</p>
        <div class="flex py-6">
          <div>
            <Avatar :src="'/media/' + (client.pictures.length ? client.pictures[0]['Picture_Location'].substring(11) : 'a.png')" size='80'/>
          </div>
          <div class="pl-3 py-2 flex flex-col justify-between">
            <p class="text-lg font-bold">{{client.Client_Name}}</p>
            <!-- <p class="">{{client.Script}}</p> -->
            <p class="">{{client.Timestamp}}</p>
          </div>
        </div>
      </div>
      <div class="w-1/4 px-2">
        <div class="vjs-playlist"/>
      </div>
    </div>
  </div>
</template>

<script>
import videojs from 'video.js';
import 'videojs-playlist'
import 'videojs-playlist-ui'
import 'videojs-seek-buttons'
import "videojs-hotkeys"

import 'video.js/dist/video-js.css'
import 'videojs-playlist-ui/dist/videojs-playlist-ui.css'
import 'videojs-seek-buttons/dist/videojs-seek-buttons.css'

export default {
  name: 'ClientVideoList',
  
  data() {
    return {
      player: null,
      playlist: [],
      client: {
        pictures: [],
        videos: []
      },
    };
  },
  computed: {
  },

  mounted(){
    this.player = videojs(this.$refs.videoPlayer, {
      autoplay: true, 
      controls: true, 
      fluid: true,
      plugins: {
        hotkeys: {
          volumeStep: 0.1,
          seekStep: 5,
          enableModifiersForNumber: false
        }
      }
    });

    let button = this.player.getChild('ControlBar').addChild('button', {
      controlText: 'Previous',
      className: 'vjs-icon-previous-item',
      clickHandler: (e) => {
        this.player.playlist.previous()
      }
    }, 1);
    button.el()
    this.player.getChild('ControlBar').addChild('button', {
      controlText: 'Next',
      className: 'vjs-icon-next-item',
      clickHandler: (e) => {
        this.player.playlist.next()
      }
    }, 2);

    this.player.seekButtons({
      forward: 10,
      back: 10
    })

    axios.get(`/api/clients/${this.$route.params.id}`).then(res => {
      this.client = res.data
      this.playlist = res.data.videos.map((i, index) => {
        return {
          name: `Video ${index + 1 }`,
          description: 'desctription',
          duration: 0,
          sources: [
            {src: `/media/${i['Location']}`, type: 'video/mp4'}
          ],
          poster: `/media/${i['Thumbnail']}`,
          thumbnail: [
            {
              srcset: i['Thumbnail'] ? `/media/${i['Thumbnail']}` : '/assets/img/thumb_video.jpg',
              type: 'image/jpeg',
            },
            {
              src: i['Thumbnail'] ? `/media/${i['Thumbnail']}` : '/assets/img/thumb_video.jpg'
            }
          ]
        }
      });

      this.player.playlist(this.playlist)
      this.player.playlist.autoadvance(2)

      this.player.playlistUi();
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

<style>
.vjs-playlist{
  background: transparent;
}
button.vjs-control::before{
  font-size: 1.8em;
}
</style>