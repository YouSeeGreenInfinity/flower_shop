import React from "react";
import { Grid, Container } from "@mui/material";
import ProductCard from "./ProductCard";
import type { Product } from "../../types/productTypes";

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onAddToCart,
  onViewDetails,
}) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid
            key={product.id}
            size={{
              xs: 12, // 1 колонка на мобильных
              sm: 6, // 2 колонки на планшетах
              md: 4, // 3 колонки на десктопе
            }}
          >
            <ProductCard
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
