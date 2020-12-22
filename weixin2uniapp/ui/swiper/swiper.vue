/** BUG待处理 2020 11 4*/
<template>
  <div class="onekit-swiper" ref="main" :active-index="currentIndex">
    <div class="onekit-swiper-inner">
      <div class="onekit-swiper-wrapper clearfix"
           @touchstart="main_touchstart"
           @touchmove="main_touchmove"
           @touchend="main_touchend"
           ref="slider-wrapper"
           :style="{width: `${this.wrapperWidth}px`, transform: translateValue, 'transition-duration': (touching || !isTransition) ? '0ms' : '300ms'}">
        <slot></slot>
      </div>
    </div>
    <div v-if="indicatorDots" class="onekit-swiper-pagination clearfix">
      <div class="onekit-swiper-page icon"
           v-for="(item, index) in sliderLength"
           :key="index"
           :class="[((index === currentIndex) || (index === 0 && currentIndex === sliderLength) || (index === sliderLength - 1 && currentIndex === -1)) ? 'onekit-swiper-page-active' : '']"
           :style="{'background':((index === currentIndex) || (index === 0 && currentIndex === sliderLength) || (index === sliderLength - 1 && currentIndex === -1) ? indicatorActiveColor : indicatorColor)}">

      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'onekit-swiper',
    props: {
      'indicator-dots': {
        type: Boolean,
        default: false,
        required: false
      },
      'indicator-color': {
        type: String,
        default: 'rgba(0,0,0,.3)',
        required: false
      },
      'indicator-active-color': {
        type: String,
        default: '#000000',
        required: false,
      },
      'autoplay': {
        type: Boolean,
        default: false
      },
      'duration': {
        type: Number,
        default: 500
      },
      circular: {
        type: Boolean,
        default: false
      }, // 是否循环
      pagination: {
        type: Boolean,
        default: true
      }, // 是否循环
    },
    data() {
      return {
        isTransition: false, // 初始化
        width: 0, // 幻灯片宽度
        wrapperWidth: 0, // 范围宽度
        currentIndex: 0, // 当前页
        translateX: 0, // x轴
        showBtnPrev: true, // 前一页按钮
        showBtnNext: true, // 下一页按钮
        touching: false, // 正在触屏
        startX: 0, // x轴 开始位置
        startY: 0, // y轴 开始位置
        currentX: 0, // x轴 当前位置
        startTranslateX: 0, //
        differenceX: 0,
        canSlide: true, // 手势判断
        isStart: true, // 是否刚开始
        translateValue: '',
        sliderLength: 0,
      };
    },
    watch: {
      translateX(value) {
        this.translateValue = `translate(${value}px, 0) translateZ(0)`;
      },
      touching: 'autoPlay'
    },
    methods: {
      // 设置第几个index
      setIndex(index) {
        let oldIndex = this.currentIndex;
        if (!this.circular) {
          if (index === -1) {
            this.currentIndex = 0;
          } else if (index === this.$children.length) {
            this.currentIndex = this.sliderLength - 1;
          } else {
            this.currentIndex = index;
          }
        } else {
          this.currentIndex = index;
        }
        this.translateX = -((this.currentIndex + 1) * this.width);
        // 触发成功事件
        if (oldIndex !== this.currentIndex) {
          this.$emit('success', this.currentIndex);
        }
      },
      // 监听触摸
      main_touchstart(event) {
        this.onTouchStart(event);
      },
      // 监听鼠标移动
      onMouseStart(event) {
        this.touching = true;
        this.startX = event.clientX;
        this.startTranslateX = this.translateX;
        if (this.currentIndex === -1) {
          this.setIndex(this.sliderLength - 1);
          this.startTranslateX = this.translateX;
        }
        if (this.currentIndex === this.sliderLength) {
          this.setIndex(0);
          this.startTranslateX = this.translateX;
        }
      },
      /// 监听鼠标移动
      onMouseMove(event) {
        if (this.touching) {
          this.differenceX = event.clientX - this.startX;
          this.translateX = this.startTranslateX + this.differenceX;
        }
      },
      /// 监听触屏滑动
      onTouchStart(event) {
        if (this.sliderLength <= 1) {
          return false;
        }
        this.touching = true;
        this.startX = event.touches[0].clientX;
        this.startY = event.touches[0].clientY;
        this.startTranslateX = this.translateX;
        this.isStart = true;
        if (this.currentIndex === -1) {
          this.setIndex(this.sliderLength - 1);
          this.startTranslateX = this.translateX;
        }
        if (this.currentIndex === this.sliderLength) {
          this.setIndex(0);
          this.startTranslateX = this.translateX;
        }
      },
      /// 监听触屏滑动
      main_touchmove(event) {
        if (this.touching) {
          this.differenceX = event.touches[0].clientX - this.startX;
          let differenceY = event.touches[0].clientY - this.startY;
          // 不循环
          if (!this.circular) {
            if ((this.currentIndex === 0 && this.differenceX > 0) || (this.currentIndex === this.sliderLength - 1 && this.differenceX < 0)) {
              return false;
            }
          }
          let abs = Math.abs(differenceY / this.differenceX);
          if (this.isStart && abs > 1) {
            this.canSlide = false;
          }
          if (this.canSlide) {
            event.preventDefault();
            this.translateX = this.startTranslateX + this.differenceX;
          }
          this.isStart = false;
        }
      },
      /// 监听触屏结束
      main_touchend(event) {
        event.preventDefault();
        this.touching = false;
        this.isTransition = true;
        if (this.differenceX > 50 && this.canSlide) {
          this.setIndex(this.currentIndex - 1);
        } else if (this.differenceX < -50 && this.canSlide) {
          this.setIndex(this.currentIndex + 1);
        } else {
          this.setIndex(this.currentIndex);
        }
        this.canSlide = true;
      },
      autoPlay() {
        // 自动轮播
        if (this.touching == false && this.autoplay) {
          var auto = setInterval(() => {
            if (this.currentIndex === this.sliderLength) {
              this.setIndex(0);
              this.startTranslateX = this.translateX;
            }
            this.currentIndex++
            if (this.currentIndex == this.sliderLength) {
              this.currentIndex = 0
            }
            this.setIndex(this.currentIndex)
          }, this.duration * 10);
        } else {
          clearInterval(auto)
        }
      }

    },
    mounted() {
      let width = this.$refs['main'].offsetWidth;
      this.width = width;
      this.sliderLength = this.$children.length;
      this.wrapperWidth = (this.sliderLength + 2) * width;
      let dom = this.$refs['slider-wrapper'];
      dom.insertBefore(this.$children[0].$el.cloneNode(true), dom.children[dom.children.length]);
      dom.insertBefore(this.$children[this.sliderLength - 1].$el.cloneNode(true), dom.children[0]);
      dom.children[0].style.width = `${this.width}px`;
      dom.children[dom.children.length - 1].style.width = `${this.width}px`;
      this.setIndex(0);
      setTimeout(() => {
        this.isTransition = true;
      }, 300);
      this.autoPlay()
      console.log(this.$refs.swipericon)
    },
    created() {},
    beforeDestroy() {},

  };
</script>

<style scoped>
  .onekit-swiper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .onekit-swiper-inner {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .onekit-swiper-wrapper {
    height: 100%;
  }

  .onekit-swiper-pagination {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
  }

  .onekit-swiper-page {
    height: 8px;
    width: 8px;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 8px;
    display: inline-block;
    cursor: pointer;
    margin-right: 10px;
  }

  .onekit-swiper-page:last-child {
    margin-right: 0;
  }
</style>