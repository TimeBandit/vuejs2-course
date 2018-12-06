<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <hr>
        <!-- can only transition one element with the transition element -->
        <!-- vif and vshow used to condionally attach to the dom -->
        <transition name="fade" type="transition">
          <div class="alert alert-info" v-if="show"></div>
        </transition>
        <!-- the type element is used to tell vue which timeing end to wait for before removing -->
        <!-- the element, transition or animation, when you mix animation & transition -->
        <!-- to specify which dictates the length -->
        <transition name="slide" type="transition">
          <div class="alert alert-info" v-if="show"></div>
        </transition>
        <!-- appear animates the initial attachment to the dom -->
        <transition name="fade" type="transition" appear>
          <div class="alert alert-info" v-if="show"></div>
        </transition>
        <!-- name can also be dynamically set -->
        <select name id v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <transition :name="alertAnimation" type="transition" appear>
          <div class="alert alert-info" v-if="show">Dynamic animation names</div>
        </transition>
        <!-- to use animate css you need to overide the default classes that are added -->
        <transition
          appear
          enter-class
          enter-active-class="animated bounce"
          leave-class
          leave-active-class="animated shake"
        >
          <div class="alert alert-info" v-if="show"></div>
        </transition>
        <!-- animating between multiple elements, this will not work with v-show -->
        <!-- without key it only swaps the contents not the element so animation is not possible -->
        <!-- mode is need to tell vue when to animate on thing in and the other out to avoid -->
        <!-- jankiness -->
        <p>Animating between multiple elements</p>
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">Element 1</div>
          <div class="alert alert-warning" v-else key="warning">Element 2</div>
        </transition>
        <p>Vue animation hooks</p>
        <button class="btn-btn-primary" @click="load = !load">Load / Remove Element</button>
        <br>
        <br>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <div style="width: 100px; height: 100px; background-color: lightgreen" v-if="load"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      alertAnimation: "slide",
      load: true
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
    },
    enter(el, done) {
      console.log("enter");
      // done is used to tell vuejs when the animation has finished
      // it's most useful when you have ansyn code, othewise if you added css animation vue
      // will know when the timing is supposed to end
      done();
    },
    afterEnter(el) {
      console.log("after enter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
    },
    leave(el, done) {
      console.log("leave");
      done();
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    }
  }
};
</script>

<style>
/* if you transforming more than 2 properties then use an animation */
:root {
  --animation-length: 3s;
}

/* this is removed after one frame */
.fade-enter {
  opacity: 0;
  transform: scale(0.5);
  transform: translateX(-150px);
}

/* its important only to setup 3sthe transion here */
.fade-enter-active {
  transition: opacity var(--animation-length), transform var(--animation-length);
}
.fade-leave {
}

.fade-leave-active {
  transition: opacity var(--animation-length), transform var(--animation-length),
    background-color var(--animation-length);
  opacity: 0;
  transform: scale(0.5);
  transform: translateX(150px);
  background-color: brown;
}

/* using css animations */

.slide-enter {
  /* transform: translateY(20px); not needed as its in the keyframe */
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in var(--animation-length) ease-out forwards;
  transition: opacity var(--animation-length);
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out var(--animation-length) ease-in forwards;
  transition: opacity var(--animation-length);
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>