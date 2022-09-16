<template>
    <div class="player">
      <video ref='player' id='player' class="w-full" tabindex="-1">
        <source :src="src" type="video/mp4" />
        <!-- fallback content here -->
      </video>
      <div class="controls flex justify-between items-center px-2">
        <div>
          <Button type='text' @click="togglePlayStop" class='mr-2' size="small" :icon=" isPlaying ? 'md-pause' : 'md-play'" ghost></Button>
          <Button type='text' @click="skip(-skipStep)" class='mr-2' size="small" icon="md-skip-backward"  ghost></Button>
          <Button type='text' @click="skip(skipStep)" size="small" icon="md-skip-forward" ghost></Button>
        </div>
        <div>
          <Button type='text' @click="toggleFullscreen" class='mr-2' size="small" :icon=" isFullscreen ? 'md-contract' : 'md-expand'" ghost></Button>
        </div>
      </div>
    </div>

</template>
  
<script>
  // import videojs from 'video.js';

  
  
  export default {
    name: 'VideoPlayer',
    props: ['src'],
    data() {
      return {
        player: {},
        isPlaying: false,
        isFullscreen: false,
        skipStep: 5
      }
    },
    mounted() {
      const media = document.querySelector('video')
      const fwd = document.querySelector('.fwd')
      fwd.addEventListener('click', () => {
        media.currentTime += 3
      })
    },
    updated(){
      // this.player.src(this.options.sources[0]);
      // if(this.options.autoplay){
      //   this.$refs.videoPlayer.focus()
      // }
    },
    beforeDestroy() {
      if (this.player) {
        this.player.dispose();
      }
    },
    methods: {
      togglePlayStop(){
        let media = this.$refs.player
        this.isPlaying = !this.isPlaying
        media.paused ? media.play() : media.pause()
      },
      toggleFullscreen(){
        const mediaContainer = document.querySelector('.player')
        if (!document.fullscreenElement) {
          mediaContainer.requestFullscreen();
          this.isFullscreen = true
        } else if (document.exitFullscreen) {
          document.exitFullscreen();
          this.isFullscreen = false
        }
      },
      skip(val){
        const media = document.querySelector('video');

        if (media.currentTime >= media.duration - 3) {
        } else {
          media.currentTime += val;
        }
      }
    }
  }
</script>

<style>
.player{
  position: relative;
}
.controls {
  /* visibility: hidden; */
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 3em;
  background-color: rgba(43,51,63,.7);
  display: flex;
}

.player:hover .controls,
.player:focus-within .controls {
  opacity: 1;
}

</style>