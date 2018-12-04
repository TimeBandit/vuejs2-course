export const fruitMixin = {
  // the data is not shared with each component which uses this component
  // each component get a fresh copy. for sharing use something like an event bus
  // or a normal js object, not added as a mixin
  data() {
    return {
      fruits: ["apple", "banana", "mango", "melon"],
      filterText: ""
    };
  },
  computed: {
    // computed properties are only recalculated when it's dependencies change
    // in most cases computed properties are better than normal filters
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  }
};
