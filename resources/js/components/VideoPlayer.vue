<template>
    <div class="w-full">
        <video ref="videoPlayer" class="video-js vjs-default-skin vjs-16-9" 
            @keyup.right="skip(+skipStep)" 
            @keyup.left="skip(-skipStep)"
        ></video>
    </div>
  </template>
  
  <script>
  import videojs from 'video.js';
  
  export default {
    name: 'VideoPlayer',
    props: {
      options: {
        type: Object,
        default() {
          return {};
        }
      },
    },
    data() {
      return {
        player: null,
        skipStep: 10
      }
    },
    mounted() {
      this.player = videojs(this.$refs.videoPlayer, this.options, () => {
        this.player.log('onPlayerReady', this);
      })
      if(this.options.autoplay){
        this.$refs.videoPlayer.focus()
      }
      
    },
    updated(){
      this.player.src(this.options.sources[0]);
      if(this.options.autoplay){
        this.$refs.videoPlayer.focus()
      }
    },
    beforeDestroy() {
      if (this.player) {
        this.player.dispose();
      }
    },
    methods: {
        skip(val){
            this.$refs.videoPlayer.currentTime += val
        }
    }
  }
  </script>