import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Chip,
  Divider,
} from '@mui/material';
import {
  LocalFlorist,
  Style,
  Whatshot,
  Favorite,
  Cake
} from '@mui/icons-material';
import FlashOnIcon from '@mui/icons-material/FlashOn';

// Типы для категорий
interface Category {
  id: number;
  name: string;
  count: number;
  icon: React.ReactElement;
  color?: string;
}

const SidebarContent: React.FC = () => {
  // Данные категорий
  const categories: Category[] = [
    {
      id: 1,
      name: 'Все товары',
      count: 156,
      icon: <LocalFlorist />,
      color: '#4caf50'
    },
    {
      id: 2,
      name: 'Розы',
      count: 45,
      icon: <Favorite />,
      color: '#e91e63'
    },
    {
      id: 3,
      name: 'Тюльпаны',
      count: 28,
      icon: <Whatshot />,
      color: '#ff9800'
    },
    {
      id: 4,
      name: 'Хризантемы',
      count: 32,
      icon: <Style />,
      color: '#9c27b0'
    },
    {
      id: 5,
      name: 'Пионы',
      count: 18,
      icon: <Cake />,
      color: '#2196f3'
    },
    {
      id: 6,
      name: 'Орхидеи',
      count: 15,
      icon: <LocalFlorist />,
      color: '#00bcd4'
    }
  ];

  const bouquets: Category[] = [
    {
      id: 7,
      name: 'Все букеты',
      count: 67,
      icon: <FlashOnIcon />,
      color: '#ff5722'
    },
    {
      id: 8,
      name: 'Свадебные',
      count: 23,
      icon: <FlashOnIcon />,
      color: '#e91e63'
    },
    {
      id: 9,
      name: 'Романтические',
      count: 19,
      icon: <FlashOnIcon />,
      color: '#f44336'
    },
    {
      id: 10,
      name: 'Праздничные',
      count: 15,
      icon: <FlashOnIcon />,
      color: '#4caf50'
    },
    {
      id: 11,
      name: 'Траурные',
      count: 10,
      icon: <FlashOnIcon />,
      color: '#607d8b'
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState<number>(1);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
    // Здесь можно добавить логику фильтрации товаров
    console.log('Selected category:', categoryId);
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Заголовок */}
      <Typography 
        variant="h6" 
        component="h2" 
        sx={{ 
          mb: 3, 
          fontWeight: 600,
          color: 'primary.main'
        }}
      >
        Категории
      </Typography>

      {/* Список цветов */}
      <Typography 
        variant="subtitle1" 
        sx={{ 
          mb: 1, 
          fontWeight: 500,
          color: 'text.secondary'
        }}
      >
        Цветы
      </Typography>
      
      <List dense sx={{ mb: 2 }}>
        {categories.map((category) => (
          <ListItem key={category.id} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={selectedCategory === category.id}
              onClick={() => handleCategoryClick(category.id)}
              sx={{
                borderRadius: 1,
                '&.Mui-selected': {
                  backgroundColor: 'primary.light',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                  }
                },
                '&:hover': {
                  backgroundColor: 'action.hover',
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Box
                  sx={{
                    color: category.color,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {category.icon}
                </Box>
              </ListItemIcon>
              <ListItemText 
                primary={category.name}
                primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: selectedCategory === category.id ? 600 : 400,
                  color: selectedCategory === category.id ? 'primary.main' : 'text.primary'
                }}
              />
              <Chip 
                label={category.count}
                size="small"
                variant={selectedCategory === category.id ? "filled" : "outlined"}
                color={selectedCategory === category.id ? "primary" : "default"}
                sx={{ 
                  minWidth: 'auto',
                  height: 24,
                  '& .MuiChip-label': { px: 1 }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Список букетов */}
      <Typography 
        variant="subtitle1" 
        sx={{ 
          mb: 1, 
          fontWeight: 500,
          color: 'text.secondary'
        }}
      >
        Букеты
      </Typography>
      
      <List dense>
        {bouquets.map((bouquet) => (
          <ListItem key={bouquet.id} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={selectedCategory === bouquet.id}
              onClick={() => handleCategoryClick(bouquet.id)}
              sx={{
                borderRadius: 1,
                '&.Mui-selected': {
                  backgroundColor: 'primary.light',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                  }
                },
                '&:hover': {
                  backgroundColor: 'action.hover',
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Box
                  sx={{
                    color: bouquet.color,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {bouquet.icon}
                </Box>
              </ListItemIcon>
              <ListItemText 
                primary={bouquet.name}
                primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: selectedCategory === bouquet.id ? 600 : 400,
                  color: selectedCategory === bouquet.id ? 'primary.main' : 'text.primary'
                }}
              />
              <Chip 
                label={bouquet.count}
                size="small"
                variant={selectedCategory === bouquet.id ? "filled" : "outlined"}
                color={selectedCategory === bouquet.id ? "primary" : "default"}
                sx={{ 
                  minWidth: 'auto',
                  height: 24,
                  '& .MuiChip-label': { px: 1 }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Статистика */}
      <Box 
        sx={{ 
          mt: 3, 
          p: 2, 
          backgroundColor: 'grey.50', 
          borderRadius: 1,
          border: 1,
          borderColor: 'grey.200'
        }}
      >
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Всего товаров:
        </Typography>
        <Typography variant="h6" color="primary.main" fontWeight="bold">
          {categories.reduce((sum, cat) => sum + cat.count, 0) + bouquets.reduce((sum, bouq) => sum + bouq.count, 0)}
        </Typography>
      </Box>
    </Box>
  );
};

export default SidebarContent;