// 1 вариант
// import React from 'react';
// import ProductCard from './ProductCard';
// import type { Product } from '../../types/productTypes';


// interface ProductListProps {
//   products: Product[];
//   onAddToCart: (product: Product) => void;
//   onViewDetails: (product: Product) => void;
// }

// const ProductList: React.FC<ProductListProps> = ({ 
//   products, 
//   onAddToCart, 
//   onViewDetails 
// }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
//       {products.map((product) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//           onAddToCart={onAddToCart}
//           onViewDetails={onViewDetails}
//         />
//       ))}
//     </div>
//   );
// };

// export default ProductList;

//2 вариант
// components/ProductList.tsx
import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../../types/productTypes';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ 
  products, 
  onAddToCart, 
  onViewDetails 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default ProductList;