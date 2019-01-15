import { decorate, observable } from "mobx";

class CartStore {
  constructor() {
    this.items = [];
  }

  addItemToCart(addedItem) {
    let newItem = this.items.find(
      item => item.drink === addedItem.drink && item.option === addedItem.option
    );
    if (newItem) {
      newItem.quantity++;
    } else this.items.push(addedItem);
  }

  removeItemFromCart(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  checkoutCart() {
    this.items = [];
    alert("Thanks!");
  }
}

decorate(CartStore, {
  items: observable
});

export default new CartStore();
