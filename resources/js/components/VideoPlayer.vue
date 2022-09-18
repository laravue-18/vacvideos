<template>
    <div class="player">
      <video ref='player' class="w-full" tabindex="-1">
        <source :src="src" type="video/mp4" />
        <!-- fallback content here -->
      </video>
      <div class="controls p-2 pt-0">
        <Slider v-model="percent" :step="0.1" @on-change="changeTime"></Slider>
        <div class="flex justify-between items-center">
          <div class='flex items-center'>
            <Button type='text' @click="togglePlayStop" class='mr-2' size="small" :icon=" isPlaying ? 'md-pause' : 'md-play'" ghost></Button>
            <Button type='text' @click="skip(false)" class='mr-2' size="small" icon="md-skip-backward"  ghost></Button>
            <Button type='text' @mousedown='mediaWind' @mouseup='cancelWind' @click="skip(true)" class='mr-2' size="small" icon="md-skip-forward" ghost></Button>
            <Dropdown placement='top' :events-enabled="true" @on-click="setStep" class="mr-2">
                <Button type='text' size="small" icon="md-menu" ghost></Button>
                <template #list>
                    <DropdownMenu>
                        <DropdownItem :name="15">15</DropdownItem>
                        <DropdownItem :name="10">10</DropdownItem>
                        <DropdownItem :name="5">5</DropdownItem>
                        <DropdownItem :name="3">3</DropdownItem>
                        <DropdownItem :name="1">1</DropdownItem>
                    </DropdownMenu>
                </template>
            </Dropdown>
            <Button type='text' @click="skip(true)" class='mr-2' size="small" icon="md-volume-up" ghost></Button>
            <div style='width: 100px;'>
              <Slider v-model="volume" @on-change="changeVol"></Slider>
            </div>
          </div>
          <div class='text-white'>
            <span>{{current}}</span>
            <span> / </span>
            <span>{{duration}}</span>
          </div>
          <div>
            <Button type='text' @click="toggleFullscreen" size="small" :icon=" isFullscreen ? 'md-contract' : 'md-expand'" ghost></Button>
          </div>
        </div>
      </div>
    </div>

</template>
  
<script>
  const media = null
  
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
        duration: '00:00',
        volume: 100,
        wind: null
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
      skip(flag){
        const media = this.$refs.player;
        const step = flag ? this.step : -this.step
        const destination = media.currentTime + step
        if( 0 < destination && destination < media.duration){
          media.currentTime = destination;
        }
      },
      changeTime(percent){
        const media = this.$refs.player
        media.currentTime = Math.floor(media.duration * percent / 100)
      },
      setStep(val){
        this.step = val
      },
      changeVol(){
        const media = this.$refs.player
        media.volume = this.volume / 100;
      },
      mediaWind(flag) {
        this.wind = setInterval(() => {
          const media = this.$refs.player;
          media.pause()
          const step = flag ? this.step : -this.step
          const destination = media.currentTime + step
          if( 0 < destination && destination < media.duration){
            media.currentTime = destination;
          }
        }, 300)
      },
      cancelWind(){
        clearInterval(this.wind)
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
  /* height: 3em; */
  background-color: rgba(43,51,63,.4);
}

.player:hover .controls,
.player:focus-within .controls {
  opacity: 1;
}

.ivu-dropdown-menu {
    min-width: 40px;
}
.ivu-dropdown-item{
   text-align: center;
   padding: 5px;
}
</style>