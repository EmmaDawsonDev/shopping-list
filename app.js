const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      listItems: [],
    };
  },
  methods: {
    addItemToList() {
      if (this.userInput) {
        this.listItems.push(this.userInput);
        console.log(this.listItems);
        this.userInput = "";
      }
    },
    removeItem(index) {
      this.listItems.splice(index, 1);
    },
  },
});

app.mount("#shopping-list");
