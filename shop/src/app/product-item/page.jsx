import { Suspense } from 'react';
import ProductItem from '../../../components/ProductItem/ProductItem';

export default function Page() {
    return (
        <Suspense>
            <ProductItem />
        </Suspense>
    );
}
