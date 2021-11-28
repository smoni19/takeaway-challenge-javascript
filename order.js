const Menu = require('./menu');

class Order {
  constructor(menu = new Menu) {
    this.menu = menu;
    this.order = [];
    this.order_summary = "";
    this.total = 0;
  }

  add_item(item, amount = 1) {
    this.total += this.menu.items[item] * amount;
    this.order.push(`${amount}x ${item} ordered (£${this.menu.items[item] * amount})`);
  }

  show_order_summary()
  {
    return this.order_summary = `${this.order.toString()}\nTotal: £${this.total}`;
  }
}

module.exports = Order;