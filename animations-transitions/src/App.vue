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
        <transition name="fade">
          <div class="alert alert-info" v-if="show"></div>
        </transition>
        <transition name="slide">
          <div class="alert alert-info" v-if="show"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
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

/* its important only to setup the transion here */
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
  /* transform: translateY(20px); not needed as its in the keyfram */
}
.slide-enter-active {
  animation: slide-in 2s ease-out forwards;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
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