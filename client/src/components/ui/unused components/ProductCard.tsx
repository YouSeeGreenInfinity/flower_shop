// // 1 вариант
// import React from 'react';
// import type { Product } from '../../types/productTypes';


// interface ProductCardProps {
//   product: Product;
//   onAddToCart?: (product: Product) => void;
//   onViewDetails?: (product: Product) => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ 
//   product, 
//   onAddToCart, 
//   onViewDetails 
// }) => {
//   const {
//     id,
//     name,
//     description,
//     price,
//     images,
//     inStock,
//     isAvailable,
//     categoryId
//   } = product;

//   // Форматируем цену
//   const formattedPrice = typeof price === 'string' 
//     ? parseFloat(price).toLocaleString('ru-RU', {
//         style: 'currency',
//         currency: 'RUB',
//         minimumFractionDigits: 0
//       })
//     : price.toLocaleString('ru-RU', {
//         style: 'currency',
//         currency: 'RUB',
//         minimumFractionDigits: 0
//       });

//   // Берем первое изображение или используем заглушку
//   const mainImage = images && images.length > 0 
//     ? images[0] 
//     : '/images/placeholder.jpg';

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
//       {/* Изображение товара */}
//       <div className="relative aspect-square overflow-hidden">
//         <img
//           src={mainImage}
//           alt={name}
//           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//         />
        
//         {/* Бейдж наличия */}
//         <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${
//           inStock && isAvailable 
//             ? 'bg-green-100 text-green-800' 
//             : 'bg-red-100 text-red-800'
//         }`}>
//           {inStock && isAvailable ? 'В наличии' : 'Нет в наличии'}
//         </div>

//         {/* Бейдж скидки (опционально) */}
//         {/* <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
//           -20%
//         </div> */}
//       </div>

//       {/* Контент карточки */}
//       <div className="p-4 flex flex-col flex-grow">
//         {/* Название товара */}
//         <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
//           {name}
//         </h3>

//         {/* Описание (обрезанное) */}
//         <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
//           {description}
//         </p>

//         {/* Цена и кнопки */}
//         <div className="mt-auto">
//           {/* Цена */}
//           <div className="flex items-center justify-between mb-4">
//             <span className="text-2xl font-bold text-gray-900">
//               {formattedPrice}
//             </span>
//             {/* Старая цена (если есть скидка) */}
//             {/* <span className="text-lg text-gray-500 line-through">
//               3 500 ₽
//             </span> */}
//           </div>

//           {/* Кнопки действий */}
//           <div className="flex space-x-2">
//             <button
//               onClick={() => onViewDetails?.(product)}
//               className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
//             >
//               Подробнее
//             </button>
            
//             <button
//               onClick={() => onAddToCart?.(product)}
//               disabled={!inStock || !isAvailable}
//               className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 ${
//                 inStock && isAvailable
//                   ? 'bg-pink-500 text-white hover:bg-pink-600'
//                   : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//               }`}
//             >
//               В корзину
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Скелетон-загрузчик
// export const ProductCardSkeleton: React.FC = () => {
//     return (
//       <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
//         <div className="aspect-square bg-gray-300"></div>
//         <div className="p-4">
//           <div className="h-4 bg-gray-300 rounded mb-2"></div>
//           <div className="h-3 bg-gray-300 rounded mb-4"></div>
//           <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
//           <div className="flex space-x-2">
//             <div className="h-10 bg-gray-300 rounded flex-1"></div>
//             <div className="h-10 bg-gray-300 rounded flex-1"></div>
//           </div>
//         </div>
//       </div>
//     );
//   };


// export default ProductCard;

// 2 вариант 

import React from 'react';
import type { Product } from '../../types/productTypes';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onViewDetails?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  onViewDetails 
}) => {
  const {
    name,
    description,
    price,
    images,
    inStock,
    isAvailable
  } = product;

  const formattedPrice = typeof price === 'string' 
    ? parseFloat(price).toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
      })
    : price.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
      });

  const mainImage = images && images.length > 0 
    ? images[0] 
    : '/images/placeholder.jpg';

  return (
    <div className="bg-gray-100 rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Изображение товара */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={mainImage}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        
        {/* Бейдж наличия */}
        <div className={`absolute top-1 right-1 px-1.5 py-0.5 rounded-full text-xs font-semibold ${
          inStock && isAvailable 
            ? 'bg-green-100 text-green-800 border border-green-300' 
            : 'bg-red-100 text-red-800 border border-red-300'
        }`}>
          {inStock && isAvailable ? 'В наличии' : 'Нет в наличии'}
        </div>
      </div>

      {/* Контент карточки */}
      <div className="p-3 flex flex-col flex-grow">
        {/* Название товара */}
        <h3 className="font-semibold text-base text-gray-900 mb-1 line-clamp-2">
          {name}
        </h3>

        {/* Описание */}
        <p className="text-gray-600 text-xs mb-2 line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Цена и кнопки */}
        <div className="mt-auto">
          {/* Цена */}
          <div className="mb-2">
            <span className="text-lg font-bold text-gray-900">
              {formattedPrice}
            </span>
          </div>

          {/* Кнопки действий */}
          <div className="flex space-x-1.5">
            <button
              onClick={() => onViewDetails?.(product)}
              className="flex-1 bg-white text-gray-700 py-1.5 px-2 rounded text-xs font-medium border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              Подробнее
            </button>
            
            <button
              onClick={() => onAddToCart?.(product)}
              disabled={!inStock || !isAvailable}
              className={`flex-1 py-1.5 px-2 rounded text-xs font-medium transition-colors duration-200 ${
                inStock && isAvailable
                  ? 'bg-green-500 text-white hover:bg-green-600 border border-green-500'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed border border-gray-300'
              }`}
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;