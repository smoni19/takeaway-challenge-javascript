const Order = require('./order');

describe('Order class', () => {
  describe('#add_item', () => {
    it('should take 2 arguments - item and amount and add to orders array', () => {
      const order = new Order();
      order.add_item('Egg fried rice', 2);
      order.add_item('Beef chow mein');
      expect(order.order).toEqual(["2x Egg fried rice ordered (£4)", "1x Beef chow mein ordered (£3.5)"]);
    });
  });

  describe('show_order_summary()', () => {
    it('should return order summary (amount of item with price) and total price', () => {
      const order = new Order();
      order.add_item('Egg fried rice', 2);
      expect(order.show_order_summary()).toEqual("2x Egg fried rice ordered (£4)\nTotal: £4");
    });
  });
});
