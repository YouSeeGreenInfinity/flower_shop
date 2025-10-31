export interface Product {
    id: number;
    name: string;
    description: string | null;
    price: number | string; // Decimal может быть строкой или числом
    images: string[] | null; // JSON массив строк с путями к изображениям
    inStock: boolean;
    isAvailable: boolean;
    categoryId: number;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  // Для ответа API с включенной категорией
  export interface ProductWithCategory extends Product {
    Category?: {
      id: number;
      name: string;
      slug: string;
    };
  }
  
  // Для создания нового продукта (без id и дат)
  export interface CreateProductRequest {
    name: string;
    description?: string;
    price: number | string;
    images?: string[];
    inStock: boolean;
    isAvailable: boolean;
    categoryId: number;
  }
  
  // Для обновления продукта (все поля опциональны)
  export interface UpdateProductRequest {
    name?: string;
    description?: string;
    price?: number | string;
    images?: string[];
    inStock?: boolean;
    isAvailable?: boolean;
    categoryId?: number;
  }
  
  // Ответ от API при получении списка продуктов
  export interface ProductsResponse {
    success: boolean;
    data: ProductWithCategory[];
    count: number;
  }
  
  // Ответ от API при получении одного продукта
  export interface ProductResponse {
    success: boolean;
    data: ProductWithCategory;
  }
  
  // Для фильтрации продуктов
  export interface ProductFilters {
    categoryId?: number;
    inStock?: boolean;
    isAvailable?: boolean;
    minPrice?: number;
    maxPrice?: number;
    search?: string;
  }
  
  // Для пагинации
  export interface ProductQueryParams {
    page?: number;
    limit?: number;
    sortBy?: 'name' | 'price' | 'createdAt';
    sortOrder?: 'ASC' | 'DESC';
    filters?: ProductFilters;
  }

// ниже скорее всего не пригодится
  // Для формы создания/редактирования продукта
export interface ProductFormData {
    name: string;
    description: string;
    price: string; // В форме обычно string
    images: File[] | string[]; // Могут быть File при загрузке или string при редактировании
    inStock: boolean;
    isAvailable: boolean;
    categoryId: number | '';
  }
  
  // Типы для изображений
  export interface ProductImage {
    id?: number;
    url: string;
    alt?: string;
    isMain?: boolean;
  }