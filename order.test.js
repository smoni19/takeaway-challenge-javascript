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
});
