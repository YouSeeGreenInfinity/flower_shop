// src/components/Footer.tsx
import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const footerData = {
    copyright: '© klumba.moscow 2021',
    columns: [
      {
        title: 'ПОКУПАТЕЛЯМ',
        links: [
          { url: '/about', label: 'О нас' },
          { url: '/articles', label: 'Статьи' },
          { url: '/delivery', label: 'Доставка' },
        ],
      },
      {
        title: '',
        links: [
          { url: '/guarantees', label: 'Гарантии качества' },
          { url: '/privacy', label: 'Политика конфиденциальности' },
        ],
      },
      {
        title: '',
        links: [
          { url: '/payment', label: 'Способы оплаты' },
          { url: '/sitemap', label: 'Карта сайта' },
          { url: '/reviews', label: 'Отзывы о нас' },
        ],
      },
    ],
    contacts: {
      phones: ['+7(495)015-07-30', '+7(905)736-07-30'],
      email: 'info@klumba.moscow',
      address: 'Ул. Летниковская, д. 10, с.2',
    },
  };

  const { copyright, columns, contacts } = footerData;

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: '#fff',
        py: 4,
        px: { xs: 2, sm: 4, md: 8 }, // ✅ Добавлены отступы слева и справа
        fontFamily: 'Roboto, Arial, sans-serif',
      }}
    >
      <Container maxWidth="lg" disableGutters> {/* ✅ disableGutters убирает внутренние поля контейнера */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'space-between',
            
          }}
        >
          {/* Левая часть — ссылки */}
          <Box sx={{ flex: '1 1 60%', minWidth: 280 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {columns.map((column, index) => (
                <Box key={index} sx={{ flex: '1 1 180px' }}>
                  {column.title && (
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        color: '#fff',
                        fontSize: '1rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                      }}
                    >
                      {column.title}
                    </Typography>
                  )}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {column.links.map(link => (
                      <Link
                        key={link.url}
                        href={link.url}
                        sx={{
                          color: '#fff',
                          fontSize: '1rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          letterSpacing: '0.05em',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            color: '#90caf9',
                            textDecoration: 'underline',
                            transform: 'translateX(2px)',
                          },
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Копирайт */}
            <Typography
              variant="body2"
              sx={{
                mt: 4,
                color: '#fff',
                fontSize: '0.875rem',
                opacity: 0.8,
              }}
            >
              {copyright}
            </Typography>
          </Box>

          {/* Правая часть — контакты */}
          <Box sx={{ flex: '1 1 30%', minWidth: 250 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              КОНТАКТЫ
            </Typography>

            {/* Телефоны */}
            <Box sx={{ mb: 2 }}>
              {contacts.phones.map((phone, index) => (
                <Box
                  key={index}
                  sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                >
                  <PhoneIcon sx={{ mr: 1, color: '#90caf9' }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#fff',
                      fontSize: '1rem',
                      fontWeight: 700,
                    }}
                  >
                    {phone}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Email */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ mr: 1, color: '#90caf9' }} />
              <Link
                href={`mailto:${contacts.email}`}
                sx={{
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    color: '#90caf9',
                    textDecoration: 'underline',
                    transform: 'translateX(2px)',
                  },
                }}
              >
                {contacts.email}
              </Link>
            </Box>

            {/* Адрес */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ mr: 1, color: '#90caf9' }} />
              <Typography
                variant="body2"
                sx={{
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 700,
                  opacity: 0.9,
                }}
              >
                {contacts.address}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
