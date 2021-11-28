const Menu = require('./menu');

class Order {
  constructor(menu = new Menu) {
    this.menu = menu;
    this.order_list = [];
    this.order_summary = "";
    this.total = 0;
  }

  add_item(item, amount = 1) {
    this.calculate_total(item, amount);
    this.order_list.push(`${amount}x ${item} ordered (£${this.menu.items[item] * amount})`);
  }

  calculate_total(item, amount) {this.total += this.menu.items[item] * amount;}

  show_order_summary() {return this.order_summary = `${this.order_list.join(", ")}\nTotal: £${this.total}`;}
}

module.exports = Order;