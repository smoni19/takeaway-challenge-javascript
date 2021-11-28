class Menu {
  constructor() {
    this.items = {'Egg fried rice': 2,
      'Special fried rice': 2,
      'Prawn toast': 2,
      'Chicken balls': 2.5,
      'Spring rolls': 2.5,
      'Char siu pork': 3,
      'Beef chow mein': 3.5,
      'Spare ribs': 3.5};
    this.list = [];
  }

  show_menu() {
    Object.entries(this.items).forEach(([item, price]) => {
    this.list += (`${item} : £${price}\n`);
  });

    return this.list;
  }
}

module.exports = Menu;