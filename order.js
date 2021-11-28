const Menu = require('./menu');

class Order {
  constructor(menu = new Menu) {
    this.menu = menu;
    this.order = [];
    this.total = 0;
  }

  add_item(item, amount = 1) {
    this.total += this.menu.items[item] * amount;
    this.order.push(`${amount}x ${item} ordered (£${this.menu.items[item] * amount})`);
  }
}

module.exports = Order;