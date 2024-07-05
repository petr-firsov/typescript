import Cart from './cart';

test('total price test', () => {
    const testCart = new Cart;
    testCart.add({
        id: 1,
        name: 'Диван',
        price: 20000,
    });
    testCart.add({
        id: 2,
        name: 'Кровать',
        price: 40000,
        discount: 20
    });
    const testValue = testCart.totalPrice();
    expect(testValue).toBe(60000);
});

test('discounted price test', () => {
    const testCart = new Cart;
    testCart.add({
        id: 1,
        name: 'Диван',
        price: 20000,
    });
    testCart.add({
        id: 2,
        name: 'Кровать',
        price: 40000,
        discount: 20
    });
    const testValue = testCart.discountedPrice();
    expect(testValue).toBe(52000);
});

test('item removal', () => {
    const testCart = new Cart;
    testCart.add({
        id: 1,
        name: 'Диван',
        price: 20000,
    });
    testCart.add({
        id: 2,
        name: 'Кровать',
        price: 40000,
        discount: 20
    });
    testCart.removeItem(2);
    expect(testCart.items.length).toBe(1);
});