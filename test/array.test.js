const shoppingList = require('../src/shoppingList');

test(`the shopping list has milk on it`, () => {
    expect(shoppingList).toContain(`milk`);
    expect(new Set(shoppingList)).toContain(`milk`);
})