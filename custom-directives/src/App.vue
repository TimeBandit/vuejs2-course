<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Build-in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Some strong text</strong>'"></p>
      </div>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <!-- <p v-highlight="'tomato'">Color this</p> -->
        <!-- passing a value -->
        <!-- <p v-highlight:background="'tomato'">Color this</p> -->
        <p v-highlight:background.delayed="'red'">Color this</p>
        <p v-local-highlight:background.delayed.blink="'red'">Color this</p>
        <!-- the value passed can also be an object -->
        <p
          v-local-highlight-2:background.delayed.blink="{mainColor: 'red', secondColor:'green', delay: 500}"
        >Color this</p>
        <button v-myon:click="clicked" class="btn btn-primary">custom directive button</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // a local directive is declared under the directives property
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        // arguments modifiers and values are three things
        // you can work with when creating custom directives
        // el.style.backgroundColor = "green";
        // el.style.backgroundColor = binding.value;
        // when using args
        // when using a modifier
        let delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value;
          let secondColor = "blue";
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor === secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg === "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      }
    },
    "local-highlight-2": {
      bind(el, binding, vnode) {
        // arguments modifiers and values are three things
        // you can work with when creating custom directives
        // el.style.backgroundColor = "green";
        // el.style.backgroundColor = binding.value;
        // when using args
        // when using a modifier
        let delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor === secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg === "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    },
    myon: {
      bind(el, binding, vnode) {
        // el.onclick = function() {
        //   binding.value();
        // };

        // alternative way
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert("i was clicked");
    }
  }
};
</script>

<style>
</style>
