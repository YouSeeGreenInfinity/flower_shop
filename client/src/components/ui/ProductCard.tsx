//1  вар

import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { green, red, grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import type { Product } from '../../types/productTypes';
// import type { IconButtonProps } from '@mui/material/IconButton';


// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme }) => ({
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
//   variants: [
//     {
//       props: ({ expand }) => !expand,
//       style: {
//         transform: 'rotate(0deg)',
//       },
//     },
//     {
//       props: ({ expand }) => !!expand,
//       style: {
//         transform: 'rotate(180deg)',
//       },
//     },
//   ],
// }));

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

  const availabilityColor = inStock && isAvailable ? green[500] : red[500];
  const availabilityText = inStock && isAvailable ? 'В наличии' : 'Нет в наличии';

  // Создаем аватар с первой буквой названия товара
  const productInitial = name.charAt(0).toUpperCase();

  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Заголовок карточки с аватаром и статусом */}
      <CardHeader
        avatar={
          <Avatar 
            sx={{ 
              bgcolor: inStock && isAvailable ? green[500] : red[500],
              fontSize: '0.875rem'
            }} 
            aria-label="product"
          >
            {productInitial}
          </Avatar>
        }
        action={
          <Chip 
            label={availabilityText}
            size="small"
            sx={{ 
              backgroundColor: availabilityColor,
              color: 'white',
              fontSize: '0.75rem',
              height: 24
            }}
          />
        }
        title={
          <Typography variant="h6" component="h3" sx={{ fontSize: '1rem', fontWeight: 600 }}>
            {name}
          </Typography>
        }
        subheader={
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            {formattedPrice}
          </Typography>
        }
        sx={{ pb: 1 }}
      />

      {/* Изображение товара */}
      <CardMedia
        component="img"
        height="194"
        image={mainImage}
        alt={name}
        sx={{ 
          objectFit: 'cover',
          '&:hover': {
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease-in-out'
          }
        }}
      />

      {/* Описание товара */}
      <CardContent sx={{ flexGrow: 1, py: 1 }}>
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.secondary',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {description}
        </Typography>
      </CardContent>

      {/* Кнопки действий */}
      <CardActions disableSpacing sx={{ pt: 0, gap: 1 }}>
        <Button
          variant="outlined"
          size="small"
          startIcon={<VisibilityIcon />}
          onClick={() => onViewDetails?.(product)}
          sx={{ flex: 1 }}
        >
          Подробнее
        </Button>
        
        <Button
          variant="contained"
          size="small"
          startIcon={<ShoppingCartIcon />}
          onClick={() => onAddToCart?.(product)}
          disabled={!inStock || !isAvailable}
          sx={{ 
            flex: 1,
            backgroundColor: green[500],
            '&:hover': {
              backgroundColor: green[600],
            },
            '&.Mui-disabled': {
              backgroundColor: grey[300],
              color: grey[500]
            }
          }}
        >
          В корзину
        </Button>
      </CardActions>

      {/* Дополнительные действия (лайк, поделиться) */}
      <CardActions disableSpacing sx={{ pt: 0 }}>
        <IconButton aria-label="add to favorites" size="small">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" size="small">
          <ShareIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        {/* Можно добавить рейтинг или другие элементы */}
      </CardActions>
    </Card>
  );
};

export default ProductCard;