// // 1 var
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: 'block', md: 'none' } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;

//// 2 вариант
// // components/ui/ResponsiveAppBar.tsx
// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Box
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// // Добавляем интерфейс для пропсов
// interface ResponsiveAppBarProps {
//   onMenuToggle?: () => void; // Делаем опциональным
// }

// const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = ({ onMenuToggle }) => {
//   return (
//     <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//       <Toolbar>
//         {/* Кнопка меню для мобильных */}
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           edge="start"
//           onClick={onMenuToggle}
//           sx={{ mr: 2, display: { md: 'none' } }}
//         >
//           <MenuIcon />
//         </IconButton>
        
//         {/* Логотип/название */}
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Цветочный магазин
//         </Typography>

//         {/* Навигационные ссылки */}
//         <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//           {/* Твои навигационные кнопки/ссылки */}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default ResponsiveAppBar;

// 3 вариант

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  TextField,
  InputAdornment,
  Badge,
  Container,
  Menu,
  MenuItem,
  useScrollTrigger,
  Slide
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  Person,
  ShoppingCart,
  Search,
  LocationOn,
  Phone,
  Menu as MenuIcon
} from '@mui/icons-material';

// Пропсы для скрытия AppBar при скролле вниз
interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const ResponsiveAppBar: React.FC = () => {
  const [favorite, setFavorite] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    // Здесь будет навигация на избранное
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Здесь будет логика поиска
    console.log('Search query:', searchQuery);
  };

  // Данные для навигационного меню
  const navItems = [
    'Цветы',
    'Букеты',
    'Композиции',
    'Растения',
    'Подарки',
    'Акции',
    'Доставка',
    'О нас'
  ];

  return (
    <>
      {/* Первая линия - контактная информация */}
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          color="primary" 
          elevation={1}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 2 }}
        >
          <Container maxWidth="xl">
            <Toolbar variant="dense" sx={{ minHeight: 40, py: 0.5 }}>
              {/* Адрес слева */}
              <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                <LocationOn sx={{ fontSize: 16, mr: 0.5 }} />
                <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                  Москва, ул. Цветочная, 15
                </Typography>
              </Box>

              {/* Приём заказов по центру */}
              <Box sx={{ 
                display: { xs: 'none', sm: 'flex' }, 
                alignItems: 'center',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
                <Phone sx={{ fontSize: 16, mr: 0.5 }} />
                <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                  Приём заказов: 24/7
                </Typography>
              </Box>

              {/* Иконки справа */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {/* Сердечко */}
                <IconButton
                  color="inherit"
                  size="small"
                  onClick={handleFavoriteClick}
                  sx={{ p: 0.5 }}
                >
                  {favorite ? <Favorite /> : <FavoriteBorder />}
                </IconButton>

                {/* Личный кабинет */}
                <Button
                  color="inherit"
                  size="small"
                  startIcon={<Person />}
                  onClick={handleProfileMenuOpen}
                  sx={{ 
                    fontSize: '0.75rem',
                    minWidth: 'auto',
                    px: 1
                  }}
                >
                  Личный кабинет
                </Button>

                {/* Меню личного кабинета */}
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleProfileMenuClose}
                  onClick={handleProfileMenuClose}
                >
                  <MenuItem>Мой профиль</MenuItem>
                  <MenuItem>Мои заказы</MenuItem>
                  <MenuItem>Избранное</MenuItem>
                  <MenuItem>Выйти</MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Вторая линия - логотип, поиск, корзина */}
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          color="secondary"
          elevation={2}
          sx={{ 
            top: 40,
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: 'background.paper',
            color: 'text.primary'
          }}
        >
          <Container maxWidth="xl">
            <Toolbar variant="dense" sx={{ minHeight: 56, py: 1 }}>
              {/* Логотип */}
              <Typography
                variant="h5"
                component="div"
                sx={{ 
                  flexGrow: { xs: 1, md: 0 },
                  mr: { md: 4 },
                  fontWeight: 'bold',
                  color: 'primary.main',
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                💐 FloraShop
              </Typography>

              {/* Поиск по центру */}
              <Box 
                component="form" 
                onSubmit={handleSearchSubmit}
                sx={{ 
                  display: { xs: 'none', md: 'flex' },
                  flexGrow: 1,
                  maxWidth: 500,
                  mx: 2
                }}
              >
                <TextField
                  size="small"
                  placeholder="Поиск цветов, букетов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'background.default'
                    }
                  }}
                />
              </Box>

              {/* Корзина и меню для мобильных */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {/* Кнопка поиска для мобильных */}
                <IconButton
                  color="inherit"
                  sx={{ display: { md: 'none' } }}
                >
                  <Search />
                </IconButton>

                {/* Корзина */}
                <IconButton color="inherit">
                  <Badge badgeContent={3} color="error">
                    <ShoppingCart />
                  </Badge>
                </IconButton>

                {/* Кнопка меню для мобильных */}
                <IconButton
                  color="inherit"
                  sx={{ display: { md: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Третья линия - навигационное меню */}
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          color="default"
          elevation={1}
          sx={{ 
            top: 96,
            zIndex: (theme) => theme.zIndex.drawer,
            backgroundColor: 'background.paper'
          }}
        >
          <Container maxWidth="xl">
            <Toolbar 
              variant="dense" 
              sx={{ 
                minHeight: 48,
                overflowX: 'auto',
                '&::-webkit-scrollbar': { display: 'none' }
              }}
            >
              {/* Навигационные кнопки */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    color="inherit"
                    size="small"
                    sx={{ 
                      whiteSpace: 'nowrap',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'text.primary',
                      '&:hover': {
                        backgroundColor: 'action.hover'
                      }
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Отступ для контента под тремя AppBar */}
      <Box sx={{ height: 144 }} />
    </>
  );
};

export default ResponsiveAppBar;