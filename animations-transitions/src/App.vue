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
        <!-- enter and leave are the place for the animation sode  -->
        <!-- the place to enter the animation is before enter and before leave -->
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <!-- 👇 tell vue that there wont be any css classes attached so skip the step -->
          <div style="width:300px; height: 100px; background-color: lightgreen" v-if="load"></div>
        </transition>
        <hr>
        <!-- Dynamic components -->
        <button class="btn btn-primary" @click="toggle">Switch Dynamic Components</button>
        <br>
        <br>
        <transition name="fade" mode="out-in">
          <component :is="selectedComponents"></component>
        </transition>
        <!-- transition group is like transition but for multiple items -->
        <!-- transition is not rendered to the dom, transition-group does render -->
        <!-- a new html tag, this can be overwritten with tag="TAG" -->
        <ul class="list-group">
          <button class="btn btn-primary" @click="addItem">Add Item</button>
          <br>
          <br>
          <transition-group name="fade">
            <li class="list-group-item" v-for="(item, index) in numbers" :key="item">
              <span class="remove" @click="removeItem(index)">&times;</span>
              {{item}}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from "./DangerAlert.vue";
import SuccessAlert from "./SuccessAlert.vue";
export default {
  data() {
    return {
      show: false,
      alertAnimation: "slide",
      load: true,
      elementWidth: 100,
      selectedComponents: "app-success-alert",
      numbers: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    toggle() {
      if (this.selectedComponents === "app-success-alert") {
        this.selectedComponents = "app-danger-alert";
      } else {
        this.selectedComponents = "app-success-alert";
      }
    },
    removeItem(idx) {
      this.numbers.splice(idx, 1);
      console.log(idx);
    },
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length); // generate an index
      console.log(pos);
      this.numbers.splice(pos, 0, Math.max(...this.numbers) + 1);
    },
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 0;
      el.style.width = this.elementWidth;
    },
    enter(el, done) {
      console.log("enter");
      // done is used to tell vuejs when the animation has finished
      // it's most useful when you have ansyn code, othewise if you added css animation vue
      // will know when the timing is supposed to end
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        console.log(el.style.width);
        if (parseInt(el.style.width) >= 300) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("after enter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        console.log(el.style.width);

        round++;
        if (parseInt(el.style.width) <= 0) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    }
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  }
};
</script>

<style>
/* if you transforming more than 2 properties then use an animation */
:root {
  --animation-length: 3s;
}

.list-group-item {
  position: relative;
}

.remove {
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 0.25rem;
  margin-top: 0.25rem;
  cursor: pointer;
  font-size: 2rem;
}
/* this is removed after one frame */
.fade-enter {
  opacity: 0;
  transform: scale(0.5);
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
  background-color: brown;
  /* 👇 means that the rest of the list can move above  it as it's leaving*/
  position: absolute;
}

.fade-move {
  /* you only get the move class with transition group for elements that change their places */
  transition: transform 1s;
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