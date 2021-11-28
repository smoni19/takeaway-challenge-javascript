const Order = require('./order');
const order = new Order();

describe('Order class', () => {
  describe('add_item()', () => {
    it('should take 2 arguments - item and amount and add to orders array', () => {
      order.add_item('Egg fried rice', 2);
      order.add_item('Beef chow mein');
      expect(order.order_list).toEqual(["2x Egg fried rice ordered (£4)", "1x Beef chow mein ordered (£3.5)"]);
    });
  });

  describe('show_order_summary()', () => {
    it('should return order summary (amount of item with price) and total price', () => {
      expect(order.show_order_summary()).toEqual("2x Egg fried rice ordered (£4), 1x Beef chow mein ordered (£3.5)\nTotal: £7.5");
    });
  });
  
  describe('calculate_total()', () => {
    it('should add prices to total', () => {
      expect(order.total).toBe(7.5)
    });
  });
});
