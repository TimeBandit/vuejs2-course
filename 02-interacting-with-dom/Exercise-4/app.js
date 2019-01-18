console.log("Yellow... 👋");

const vm = new Vue({
 el: "#exercise",
 data: {
  start: false,
  timer: null,
  flip: false,
  greenClass: "green",
  skewClass: "skewLeft",
  t3Input: "",
  t4aInput: "",
  t4bInput: "",
  task5Input: "",
  progress: 0,
  timer: null
 },
 watch: {
  // *1 using a watch
  start: function(val) {
   console.log("start changed to ", val);
   const self = this;
   if (val) {
    this.timer = setInterval(() => {
     console.log("starting interval");
     self.flip = !self.flip;
    }, 1500);
   } else {
    console.log("stoping interval");
    clearInterval(this.timer);
   }
  }
 },
 computed: {
  styleObject: function() {
   return {
    width: this.progress + "%"
   };
  },
  t3Class: function() {
   if (this.t3Input === "red") {
    return "red";
   } else if (this.t3Input === "yellow") {
    return "yellow";
   } else {
    return "";
   }
  },
  t4aClass: function() {
   if (this.t4aInput === "red") {
    return "red";
   } else if (this.t4aInput === "yellow") {
    return "yellow";
   } else {
    return "";
   }
  },
  isOrange: function() {
   if (this.t4bInput === "true") {
    return true;
   } else if (this.t4bInput === "false") {
    return false;
   }
  }
 },
 methods: {
  startProgress(e) {
   console.log("Progress started...");
   this.timer = setInterval(() => {
    this.progress += 1;
   }, 50);
  }
 },
 watch: {
  progress: function(next, old) {
   if (next >= 100) clearInterval(this.timer);
  }
 }
});
