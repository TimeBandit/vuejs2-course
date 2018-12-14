export default {
  computed: {
    reversedWord() {
      return this.text
        .split("")
        .reverse()
        .join("");
    },
    withLength() {
      return this.text + ` (${this.text.length})`;
    }
  }
};
