<template>
    <div class="player">
      <video ref='player' class="w-full" tabindex="-1">
        <source :src="src" type="video/mp4" />
        <!-- fallback content here -->
      </video>
      <div class="controls flex justify-between items-center px-2">
        <div>
          <Button type='text' @click="togglePlayStop" class='mr-2' size="small" :icon=" isPlaying ? 'md-pause' : 'md-play'" ghost></Button>
          <Button type='text' @click="skip(-step)" class='mr-2' size="small" icon="md-skip-backward"  ghost></Button>
          <Button type='text' @click="skip(step)" size="small" icon="md-skip-forward" ghost></Button>
        </div>
        <div class="flex-1 text-white px-3 flex justify-between items-center">
          <div>
            <span>{{current}}</span>
            <span> / </span>
            <span>{{duration}}</span>
          </div>
          <div class='flex-1 px-4'>
            <Slider v-model="percent" step="0.1"></Slider>
          </div>
        </div>
        <div>
          <Button type='text' @click="toggleFullscreen" class='mr-2' size="small" :icon=" isFullscreen ? 'md-contract' : 'md-expand'" ghost></Button>
        </div>
      </div>
    </div>

</template>
  
<script>
  export default {
    name: 'VideoPlayer',
    props: ['src'],
    data() {
      return {
        player: {},
        isPlaying: false,
        isFullscreen: false,
        step: 3,
        percent: 0,
        current: '00:00',
        duration: '00:00'
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init(){
        const media = this.$refs.player
        media.onloadeddata = () =>{
          console.log('hi')
          const min = Math.floor(media.duration / 60);
          const sec = Math.floor(media.duration - min * 60);

          const minVal = min.toString().padStart(2, '0');
          const secVal = sec.toString().padStart(2, '0');

          const duration = `${minVal}:${secVal}`;
          this.duration = duration;
        };

        media.addEventListener('timeupdate', () =>{
          const minutes = Math.floor(media.currentTime / 60);
          const seconds = Math.floor(media.currentTime - minutes * 60);

          const minuteValue = minutes.toString().padStart(2, '0');
          const secondValue = seconds.toString().padStart(2, '0');

          const mediaTime = `${minuteValue}:${secondValue}`;
          this.current = mediaTime;

          this.percent = 100 * (media.currentTime/media.duration);
        });
        
        media.onended = () => {
          this.isPlaying = false
          this.percent = 0
          this.current = '00:00'
        }
      },
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
        const media = this.$refs.player;
        const destination = media.currentTime + val
        if( 0 < destination && destination < media.duration){
          media.currentTime += val;
        }
      }
    },
    watch: {
      src(){
        let media = this.$refs.player
        media.src = this.src
        this.init()
        this.isPlaying = false
        this.percent = 0
        this.current = '00:00'
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