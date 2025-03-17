import { CartItem } from "../redux/cartSlice"

export const calcTotalCount = (items: CartItem[]) => {
    return items.reduce((sum, item) => sum + item.count, 0)
}