// // 1вариант

// import React from 'react'
// import ResponsiveAppBar from './ResponsiveAppBar'
// import { Container } from '@mui/material'
// import { Outlet } from 'react-router-dom'

// export default function Root():React.JSX.Element {
//   return (
//     <>
//     <Container>
//     {/* тут нужно будет добавить графическое изображение при долгой загрузке */}
//       <ResponsiveAppBar/>
//       <Outlet/>
//       {/* тут нужно будет добавить панель управления ошибками */}
//     </Container>
//     </>
//   )
// }

import React, { useState } from 'react'
import { Container, Box, useTheme, useMediaQuery } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function Root(): React.JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Container maxWidth={false} sx={{ p: 0 }}>
        {/* Навбар всегда сверху */}
        <ResponsiveAppBar onMenuToggle={handleDrawerToggle} />
        
        {/* Основной контент с сайдбаром */}
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          {/* Сайдбар слева */}
          <Sidebar 
            mobileOpen={mobileOpen}
            onMobileToggle={handleDrawerToggle}
          />
          
          {/* Основной контент - здесь будет Outlet (IndexPage, AdminPage и т.д.) */}
          <Box 
            component="main" 
            sx={{ 
              flexGrow: 1,
              p: 3,
              width: { md: `calc(100% - 300px)` }, // Учитываем ширину сайдбара
              ml: { md: '300px' }, // Отступ для сайдбара
              mt: 8 // Отступ под навбаром (AppBar height)
            }}
          >
            <Outlet/>
          </Box>
        </Box>
        
        {/* тут нужно будет добавить панель управления ошибками */}
      </Container>
    </>
  )
}
