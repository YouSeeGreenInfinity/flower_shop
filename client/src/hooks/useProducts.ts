import { useState, useEffect } from 'react';
import type { Product, ProductsResponse } from '../types/productTypes';


export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3001/api/catalog/cveti/');
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data: ProductsResponse = await response.json();
        
        if (data.success) {
          setProducts(data.data);
        } else {
          throw new Error('Failed to fetch products');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};