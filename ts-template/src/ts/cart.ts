import Buyable  from './buyable_template';
export default class Cart {
    private items: Buyable[] = [];

    add(item: Buyable): void {
        this.items.push(item);
    }

    getAll(): Buyable[] {
        return [...this.items]
    }

    totalPrice(): void {
        const totalPrice = this.items.reduce((currentSum: number, item: Buyable) => {
            return currentSum + item.price
        }, 0)
    }

    discountedPrice(): number {
        const discountedPrice = this.items.reduce((currentSum: number, item: Buyable) => {
            if (item.discount !== undefined) {
                return currentSum + (item.price * (100 - item.discount))
            } else {
                return currentSum + item.price
            }
        }, 0)
        return discountedPrice
    }

    removeItem(targetId: number): void {
        const index = this.items.findIndex(element => element.id === targetId);
        this.items.splice(index, 1);
    }
}
