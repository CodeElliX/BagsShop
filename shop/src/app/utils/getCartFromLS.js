
import { calcTotalCount } from './calcTotalCount';
import { calcTotalPrice } from './calcTotalPrice';

export const getCartFromLS = () => {
    if (typeof window === 'undefined') {
        return {
            items: [],
            totalPrice: 0,
            totalCount: 0,
        };
    }

    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];

    return {
        items: Array.isArray(items) ? items : [],
        totalPrice: calcTotalPrice(Array.isArray(items) ? items : []),
        totalCount: calcTotalCount(Array.isArray(items) ? items : [])
    };
};


