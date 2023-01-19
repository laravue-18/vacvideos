"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var media = null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'VideoPlayer',
  props: ['src'],
  data: function data() {
    return {
      player: {},
      isPlaying: false,
      isFullscreen: false,
      step: 3,
      percent: 0,
      current: '00:00',
      duration: '00:00',
      volume: 100,
      wind: null,
      showingControl: false
    };
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this = this;

      var media = this.$refs.player;

      media.onloadeddata = function () {
        console.log('hi');
        var min = Math.floor(media.duration / 60);
        var sec = Math.floor(media.duration - min * 60);
        var minVal = min.toString().padStart(2, '0');
        var secVal = sec.toString().padStart(2, '0');
        var duration = "".concat(minVal, ":").concat(secVal);
        _this.duration = duration;
      };

      media.addEventListener('timeupdate', function () {
        var minutes = Math.floor(media.currentTime / 60);
        var seconds = Math.floor(media.currentTime - minutes * 60);
        var minuteValue = minutes.toString().padStart(2, '0');
        var secondValue = seconds.toString().padStart(2, '0');
        var mediaTime = "".concat(minuteValue, ":").concat(secondValue);
        _this.current = mediaTime;
        _this.percent = 100 * (media.currentTime / media.duration);
      });

      media.onended = function () {
        _this.isPlaying = false;
        _this.percent = 0;
        _this.current = '00:00';
      };
    },
    togglePlayStop: function togglePlayStop() {
      var media = this.$refs.player;
      this.isPlaying = !this.isPlaying;
      media.paused ? media.play() : media.pause();
    },
    toggleFullscreen: function toggleFullscreen() {
      var mediaContainer = document.querySelector('.player');

      if (!document.fullscreenElement) {
        mediaContainer.requestFullscreen();
        this.isFullscreen = true;
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
        this.isFullscreen = false;
      }
    },
    skip: function skip(flag) {
      var media = this.$refs.player;
      var step = flag ? this.step : -this.step;
      var destination = media.currentTime + step;

      if (0 < destination && destination < media.duration) {
        media.currentTime = destination;
      }
    },
    changeTime: function changeTime(percent) {
      var media = this.$refs.player;
      media.currentTime = Math.floor(media.duration * percent / 100);
    },
    setStep: function setStep(val) {
      this.step = val;
    },
    changeVol: function changeVol() {
      var media = this.$refs.player;
      media.volume = this.volume / 100;
    },
    mediaWind: function mediaWind(flag) {
      var _this2 = this;

      this.wind = setInterval(function () {
        var media = _this2.$refs.player;
        var step = flag ? _this2.step : -_this2.step;
        var destination = media.currentTime + step;

        if (0 < destination && destination < media.duration) {
          media.currentTime = destination;
        }
      }, 300);
    },
    cancelWind: function cancelWind() {
      clearInterval(this.wind);
    },
    showControl: function showControl() {
      var _this3 = this;

      this.showingControl = true;
      setTimeout(function () {
        _this3.showingControl = false;
      }, 3000);
    }
  },
  watch: {
    src: function src() {
      var media = this.$refs.player;
      media.src = this.src;
      this.init();
      this.isPlaying = false;
      this.percent = 0;
      this.current = '00:00';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_VideoPlayer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/VideoPlayer.vue */ "./resources/js/components/VideoPlayer.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'VideoExample',
  components: {
    VideoPlayer: _components_VideoPlayer_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
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
    user: function user() {
      return this.$store.state.auth.user;
    }
  },
  mounted: function mounted() {
    var _this = this;

    axios.get("/api/user").then(function (res) {
      _this.client = res.data;
      var sources = res.data.videos.map(function (i) {
        i.src = '/media/' + i['Location'];
        i.type = 'video/mp4';
        return i;
      });
      _this.videos = sources;
      _this.videoOptions = _objectSpread(_objectSpread({}, _this.videoOptions), {}, {
        sources: sources[0]
      });
    });
  },
  updated: function updated() {// this.$refs['player-container'].click()
  },
  methods: {
    playVideo: function playVideo(source) {
      this.videoOptions = _objectSpread(_objectSpread({}, this.videoOptions), {}, {
        sources: [source]
      });
    },
    getName: function getName(item) {
      var arr = item['Location'].split('/');
      return arr[arr.length - 1];
    },
    logout: function logout() {
      this.$store.dispatch("auth/logout");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "player"
};
var _hoisted_2 = ["src"];
var _hoisted_3 = {
  "class": "flex justify-between items-center"
};
var _hoisted_4 = {
  "class": "flex items-center"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("15 sec");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("10 sec");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("5 sec");

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("3 sec");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("1 sec");

var _hoisted_10 = {
  style: {
    "width": "100px"
  }
};
var _hoisted_11 = {
  "class": "text-white"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " / ", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Slider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Slider");

  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  var _component_DropdownItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DropdownItem");

  var _component_DropdownMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DropdownMenu");

  var _component_Dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dropdown");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("video", {
    ref: "player",
    "class": "w-full",
    tabindex: "-1",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.togglePlayStop && $options.togglePlayStop.apply($options, arguments);
    }),
    onMousemove: _cache[1] || (_cache[1] = function () {
      return $options.showControl && $options.showControl.apply($options, arguments);
    }),
    onMousedown: _cache[2] || (_cache[2] = function () {
      return $options.showControl && $options.showControl.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("source", {
    src: $props.src,
    type: "video/mp4"
  }, null, 8
  /* PROPS */
  , _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" fallback content here ")], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["controls p-2 pt-0", {
      'hidden': !$data.showingControl
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Slider, {
    modelValue: $data.percent,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.percent = $event;
    }),
    step: 0.1,
    onOnChange: $options.changeTime
  }, null, 8
  /* PROPS */
  , ["modelValue", "step", "onOnChange"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    type: "text",
    onClick: $options.togglePlayStop,
    "class": "mr-2",
    size: "small",
    icon: $data.isPlaying ? 'md-pause' : 'md-play',
    ghost: ""
  }, null, 8
  /* PROPS */
  , ["onClick", "icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    type: "text",
    onMousedown: _cache[4] || (_cache[4] = function ($event) {
      return $options.mediaWind(false);
    }),
    onMouseout: $options.cancelWind,
    onMouseup: $options.cancelWind,
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.skip(false);
    }),
    "class": "mr-2",
    size: "small",
    icon: "md-skip-backward",
    ghost: ""
  }, null, 8
  /* PROPS */
  , ["onMouseout", "onMouseup"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    type: "text",
    onMousedown: _cache[6] || (_cache[6] = function ($event) {
      return $options.mediaWind(true);
    }),
    onMouseout: $options.cancelWind,
    onMouseup: $options.cancelWind,
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.skip(true);
    }),
    "class": "mr-2",
    size: "small",
    icon: "md-skip-forward",
    ghost: ""
  }, null, 8
  /* PROPS */
  , ["onMouseout", "onMouseup"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
    placement: "top",
    "events-enabled": true,
    onOnClick: $options.setStep,
    "class": "mr-2"
  }, {
    list: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DropdownMenu, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DropdownItem, {
            name: 15
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_5];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DropdownItem, {
            name: 10
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_6];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DropdownItem, {
            name: 5
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_7];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DropdownItem, {
            name: 3
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_8];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DropdownItem, {
            name: 1
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_9];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        type: "text",
        size: "small",
        icon: "md-menu",
        ghost: ""
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onOnClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    type: "text",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $options.skip(true);
    }),
    "class": "mr-2",
    size: "small",
    icon: "md-volume-up",
    ghost: ""
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Slider, {
    modelValue: $data.volume,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.volume = $event;
    }),
    onOnChange: $options.changeVol
  }, null, 8
  /* PROPS */
  , ["modelValue", "onOnChange"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.current), 1
  /* TEXT */
  ), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.duration), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    type: "text",
    onClick: $options.toggleFullscreen,
    size: "small",
    icon: $data.isFullscreen ? 'md-contract' : 'md-expand',
    ghost: ""
  }, null, 8
  /* PROPS */
  , ["onClick", "icon"])])])], 2
  /* CLASS */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=template&id=63cd6604":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=template&id=63cd6604 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "py-4 shadow"
};
var _hoisted_2 = {
  "class": "container m-auto flex justify-between"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-2xl font-bold text-gray-800"
}, "Travel Videos", -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Logout");

var _hoisted_5 = {
  "class": "flex container m-auto pt-8"
};
var _hoisted_6 = {
  "class": "flex-1"
};
var _hoisted_7 = {
  key: 0
};
var _hoisted_8 = {
  key: 1,
  "class": "flex justify-center items-center border bg-black",
  style: {
    "height": "500px"
  }
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "text-gray-100 text-2xl font-bold"
}, "There is no video.", -1
/* HOISTED */
);

var _hoisted_10 = [_hoisted_9];
var _hoisted_11 = {
  "class": "pl-3"
};
var _hoisted_12 = {
  style: {
    "width": "400px"
  },
  "class": "px-4 ml-4 h-full border rounded overflow-auto"
};
var _hoisted_13 = {
  "class": "flex py-6"
};
var _hoisted_14 = {
  "class": "flex flex-col justify-between pl-3 py-2"
};
var _hoisted_15 = {
  "class": "text-lg font-bold"
};
var _hoisted_16 = {
  "class": ""
};
var _hoisted_17 = {
  "class": ""
};
var _hoisted_18 = {
  "class": "border-t"
};
var _hoisted_19 = ["onClick"];
var _hoisted_20 = {
  "class": "w-36"
};
var _hoisted_21 = ["src"];
var _hoisted_22 = {
  "class": "py-2 pl-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  var _component_video_player = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("video-player");

  var _component_Avatar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Avatar");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    onClick: $options.logout
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [$data.videos.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_video_player, {
    options: $data.videoOptions
  }, null, 8
  /* PROPS */
  , ["options"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, _hoisted_10))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Avatar, {
    src: '/media/' + ($data.client.pictures.length ? $data.client.pictures[0]['Picture_Location'].substring(11) : 'a.png'),
    size: "120"
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.client.Client_Name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.client.Script), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.client.Timestamp), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div>\r\n                <p>{{client.videos.length}} videos</p>\r\n              </div> ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.videos, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      onClick: function onClick($event) {
        return $options.playVideo(item);
      },
      "class": "border-b py-1 flex hover:bg-blue-50",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: "/media/".concat(item['Thumbnail'])
    }, null, 8
    /* PROPS */
    , _hoisted_21)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Video " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getName(item)), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item['Timestamp']), 1
    /* TEXT */
    )])], 8
    /* PROPS */
    , _hoisted_19);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.player{\r\n  position: relative;\n}\n.controls {\r\n  /* visibility: hidden; */\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  /* height: 3em; */\r\n  background-color: rgba(43,51,63,.4);\n}\n.player:hover .controls,\r\n.player:focus-within .controls {\r\n  opacity: 1;\n}\n.ivu-dropdown-menu {\r\n    min-width: 40px;\n}\n.ivu-dropdown-item{\r\n   text-align: center;\r\n   padding: 5px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/VideoPlayer.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/VideoPlayer.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VideoPlayer_vue_vue_type_template_id_9e3bdfbe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=template&id=9e3bdfbe */ "./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe");
/* harmony import */ var _VideoPlayer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=script&lang=js */ "./resources/js/components/VideoPlayer.vue?vue&type=script&lang=js");
/* harmony import */ var _VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=css */ "./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=css");
/* harmony import */ var F_vacvideos_code_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_vacvideos_code_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_VideoPlayer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VideoPlayer_vue_vue_type_template_id_9e3bdfbe__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/VideoPlayer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604 */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604");
/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ "./resources/js/views/Home.vue?vue&type=script&lang=js");
/* harmony import */ var F_vacvideos_code_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_vacvideos_code_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_63cd6604__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/VideoPlayer.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/VideoPlayer.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VideoPlayer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_template_id_9e3bdfbe__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_template_id_9e3bdfbe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VideoPlayer.vue?vue&type=template&id=9e3bdfbe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe");


/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_63cd6604__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_63cd6604__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=63cd6604 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=template&id=63cd6604");


/***/ }),

/***/ "./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=css":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=css ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=css");


/***/ })

}]);