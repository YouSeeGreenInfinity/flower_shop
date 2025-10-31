// // 1 var
// import React, { useState } from 'react';
// import {
//   Paper,
//   Typography,
//   Box,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Chip,
//   Divider,
//   Slider,
//   FormControlLabel,
//   Checkbox,
//   Button,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import FilterListIcon from '@mui/icons-material/FilterList';

// // Типы для пропсов
// interface Category {
//   id: number;
//   name: string;
//   count: number;
// }

// interface PriceRange {
//   min: number;
//   max: number;
// }

// interface SidebarProps {
//   categories?: Category[];
//   onCategoryChange?: (categoryId: number | null) => void;
//   onPriceChange?: (priceRange: PriceRange) => void;
//   onAvailabilityChange?: (inStock: boolean) => void;
//   selectedCategory?: number | null;
// }

// const Sidebar: React.FC<SidebarProps> = ({
//   categories = [],
//   onCategoryChange,
//   onPriceChange,
//   onAvailabilityChange,
//   selectedCategory = null
// }) => {
//   // Состояния для фильтров
//   const [priceRange, setPriceRange] = useState<number[]>([0, 10000]);
//   const [inStockOnly, setInStockOnly] = useState(false);

//   // Дефолтные категории если не переданы
//   const defaultCategories: Category[] = [
//     { id: 1, name: 'Все цветы', count: 45 },
//     { id: 2, name: 'Розы', count: 15 },
//     { id: 3, name: 'Тюльпаны', count: 8 },
//     { id: 4, name: 'Хризантемы', count: 7 },
//     { id: 5, name: 'Пионы', count: 5 },
//     { id: 6, name: 'Герберы', count: 6 },
//     { id: 7, name: 'Орхидеи', count: 4 },
//     { id: 8, name: 'Букеты', count: 12 },
//   ];

//   const displayCategories = categories.length > 0 ? categories : defaultCategories;

//   // Обработчики
//   const handleCategoryClick = (categoryId: number) => {
//     onCategoryChange?.(categoryId === selectedCategory ? null : categoryId);
//   };

//   const handlePriceChange = (event: Event, newValue: number | number[]) => {
//     setPriceRange(newValue as number[]);
//   };

//   const handlePriceChangeCommitted = (event: React.SyntheticEvent | Event, newValue: number | number[]) => {
//     onPriceChange?.({
//       min: (newValue as number[])[0],
//       max: (newValue as number[])[1]
//     });
//   };

//   const handleStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInStockOnly(event.target.checked);
//     onAvailabilityChange?.(event.target.checked);
//   };

//   const handleClearFilters = () => {
//     setPriceRange([0, 10000]);
//     setInStockOnly(false);
//     onCategoryChange?.(null);
//     onPriceChange?.({ min: 0, max: 10000 });
//     onAvailabilityChange?.(false);
//   };

//   return (
//     <Paper 
//       elevation={1} 
//       sx={{ 
//         p: 3, 
//         position: 'sticky',
//         top: 100,
//         borderRadius: 2,
//         maxHeight: 'calc(100vh - 120px)',
//         overflowY: 'auto'
//       }}
//     >
//       {/* Заголовок */}
//       <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//         <FilterListIcon sx={{ mr: 1, color: 'primary.main' }} />
//         <Typography variant="h6" component="h2">
//           Фильтры
//         </Typography>
//       </Box>

//       {/* Кнопка сброса */}
//       <Button 
//         variant="outlined" 
//         size="small" 
//         onClick={handleClearFilters}
//         sx={{ mb: 3, width: '100%' }}
//       >
//         Сбросить фильтры
//       </Button>

//       {/* Категории */}
//       <Accordion defaultExpanded sx={{ mb: 2 }}>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography variant="subtitle1" fontWeight="medium">
//             Категории
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails sx={{ p: 0 }}>
//           <List dense sx={{ py: 0 }}>
//             {displayCategories.map((category) => (
//               <ListItem key={category.id} disablePadding>
//                 <ListItemButton 
//                   onClick={() => handleCategoryClick(category.id)}
//                   selected={category.id === selectedCategory}
//                   sx={{ 
//                     borderRadius: 1,
//                     mb: 0.5,
//                     '&.Mui-selected': {
//                       backgroundColor: 'primary.light',
//                       '&:hover': {
//                         backgroundColor: 'primary.light',
//                       }
//                     }
//                   }}
//                 >
//                   <ListItemText 
//                     primary={category.name} 
//                     primaryTypographyProps={{ 
//                       variant: 'body2',
//                       color: category.id === selectedCategory ? 'primary.main' : 'text.primary'
//                     }}
//                   />
//                   <Chip 
//                     label={category.count} 
//                     size="small" 
//                     variant={category.id === selectedCategory ? "filled" : "outlined"}
//                     color={category.id === selectedCategory ? "primary" : "default"}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </AccordionDetails>
//       </Accordion>

//       <Divider sx={{ my: 2 }} />

//       {/* Цена */}
//       <Accordion defaultExpanded sx={{ mb: 2 }}>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography variant="subtitle1" fontWeight="medium">
//             Цена
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Slider
//             value={priceRange}
//             onChange={handlePriceChange}
//             onChangeCommitted={handlePriceChangeCommitted}
//             valueLabelDisplay="auto"
//             valueLabelFormat={(value) => `${value} ₽`}
//             min={0}
//             max={10000}
//             step={100}
//             sx={{ mb: 2 }}
//           />
//           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//             <Typography variant="body2" color="text.secondary">
//               {priceRange[0]} ₽
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {priceRange[1]} ₽
//             </Typography>
//           </Box>
//         </AccordionDetails>
//       </Accordion>

//       <Divider sx={{ my: 2 }} />

//       {/* Наличие */}
//       <Accordion defaultExpanded>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography variant="subtitle1" fontWeight="medium">
//             Наличие
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <FormControlLabel
//             control={
//               <Checkbox 
//                 checked={inStockOnly}
//                 onChange={handleStockChange}
//                 color="primary"
//               />
//             }
//             label="Только в наличии"
//           />
//         </AccordionDetails>
//       </Accordion>

//       {/* Дополнительные фильтры можно добавить здесь */}
//     </Paper>
//   );
// };

// export default Sidebar;

// components/Sidebar.tsx
import React from 'react';
import {
  Drawer,
  Toolbar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SidebarContent from './SidebarContent';


// Добавляем интерфейс для пропсов
interface SidebarProps {
  mobileOpen: boolean;
  onMobileToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, onMobileToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Для мобильных - временный Drawer
  const mobileDrawer = (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={onMobileToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': { 
          boxSizing: 'border-box', 
          width: 280 
        },
      }}
    >
      <Toolbar /> {/* Отступ под AppBar */}
      <SidebarContent />
    </Drawer>
  );

  // Для десктопа - постоянный Drawer
  const desktopDrawer = (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        '& .MuiDrawer-paper': { 
          boxSizing: 'border-box', 
          width: 300,
          position: 'fixed',
          height: 'calc(100vh - 64px)', // Высота минус навбар
          top: 64, // Под навбаром
          left: 0
        },
      }}
      open
    >
      <Toolbar /> {/* Пустой Toolbar для отступа */}
      <SidebarContent />
    </Drawer>
  );

  return (
    <>
      {mobileDrawer}
      {desktopDrawer}
    </>
  );
};

export default Sidebar;