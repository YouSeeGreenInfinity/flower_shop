// //ниже версия без хуков
// // pages/ProductCatalogPage.tsx
// import React, { useState, useEffect } from 'react';
// import type { Product, ProductsResponse } from '../../types/productTypes';
// import ProductList from '../ui/ProductList';



// const ProductCatalogPage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   // Получение данных из API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('http://localhost:3001/api/catalog/cveti/');
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data: ProductsResponse = await response.json();
        
//         if (data.success) {
//           setProducts(data.data);
//         } else {
//           throw new Error('Failed to fetch products');
//         }
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'An error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Обработчики действий
//   const handleAddToCart = (product: Product) => {
//     console.log('Add to cart:', product);
//     // Здесь логика добавления в корзину
//     // Например: dispatch(addToCart(product));
//   };

//   const handleViewDetails = (product: Product) => {
//     console.log('View details:', product);
//     // Здесь навигация на страницу товара
//     // Например: navigate(`/product/${product.id}`);
//   };

//   // Состояния загрузки и ошибок
//   if (loading) {
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Загружаем товары...</p>
//         </div>
        
//         {/* Скелетоны для карточек */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
//           {[...Array(8)].map((_, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
//               <div className="aspect-square bg-gray-300"></div>
//               <div className="p-4">
//                 <div className="h-4 bg-gray-300 rounded mb-2"></div>
//                 <div className="h-3 bg-gray-300 rounded mb-4"></div>
//                 <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
//                 <div className="flex space-x-2">
//                   <div className="h-10 bg-gray-300 rounded flex-1"></div>
//                   <div className="h-10 bg-gray-300 rounded flex-1"></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <div className="text-center text-red-600">
//           <h2 className="text-xl font-semibold mb-4">Ошибка при загрузке товаров</h2>
//           <p>{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
//           >
//             Попробовать снова
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (products.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <div className="text-center text-gray-600">
//           <h2 className="text-xl font-semibold mb-4">Товары не найдены</h2>
//           <p>Попробуйте изменить параметры поиска</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Заголовок и фильтры */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">Каталог цветов</h1>
//         <p className="text-gray-600">Найдено {products.length} товаров</p>
        
//         {/* Здесь можно добавить фильтры */}
//         <div className="mt-4 flex flex-wrap gap-4">
//           {/* Пример фильтров */}
//           <select className="border border-gray-300 rounded-lg px-4 py-2">
//             <option>Все категории</option>
//             <option>Розы</option>
//             <option>Тюльпаны</option>
//           </select>
          
//           <select className="border border-gray-300 rounded-lg px-4 py-2">
//             <option>Сначала популярные</option>
//             <option>Сначала дешевые</option>
//             <option>Сначала дорогие</option>
//           </select>
//         </div>
//       </div>

//       {/* Список товаров */}
//       <ProductList
//         products={products}
//         onAddToCart={handleAddToCart}
//         onViewDetails={handleViewDetails}
//       />
//     </div>
//   );
// };

// export default ProductCatalogPage;

// pages/ProductCatalogPage.tsx (упрощенная версия с хуком)
import React from 'react';


import type { Product } from '../../types/productTypes';
import { useProducts } from '../../hooks/useProducts';
import ProductList from '../ui/ProductList';

const ProductCatalogPage: React.FC = () => {
  const { products, loading, error } = useProducts();

  const handleAddToCart = (product: Product) => {
    console.log('Add to cart:', product);
  };

  const handleViewDetails = (product: Product) => {
    console.log('View details:', product);
  };

  // ... остальная логика отображения состояний (как выше)
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Каталог цветов</h1>
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />
    </div>
  );
};

export default ProductCatalogPage;