console.log("Go...");
new Vue({
 el: "#exercise",
 data: {
  toggle: false,
  myData: [],
  array: ["Max", "Anna", "Chris", "Manu"],
  myObject: {
   title: "Lord of the Rings",
   author: "J.R.R. Tolkiens",
   books: "3"
  },
  testData: {
   name: "TESTOBJECT",
   id: 10,
   data: [1.67, 1.33, 0.98, 2.21]
  }
 },
 mounted: function() {
  const vm = this;
  const chance = new Chance();
  const arr = Array.from(Array(10));
  const name = () => chance.name({ nationality: "en" });
  arr.forEach(() => vm.myData.push(name()));
 }
});
