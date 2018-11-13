console.log('running...');

const vm = new Vue({
  el: '#app',
  data:{
    gameStarted: false,
  },
  methods:{
    resetGame: function(){
      this.gameStarted = false;
    }
  },
  computed:{},
})
