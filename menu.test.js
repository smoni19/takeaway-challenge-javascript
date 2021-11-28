const Menu = require('./menu');

describe('Menu class', () => {
  describe('show_menu()', () => {
    it('returns a list of dishes with prices', () => {
      const menu = new Menu();
      expect(menu.show_menu()).toEqual(`Egg fried rice : £2\nSpecial fried rice : £2\nPrawn toast : £2\nChicken balls : £2.5\nSpring rolls : £2.5\nChar siu pork : £3\nBeef chow mein : £3.5\nSpare ribs : £3.5\n`);
    });
  });
});