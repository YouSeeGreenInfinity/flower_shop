import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

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
        color: '#fff', // общий белый цвет текста
        py: 4,
        fontFamily: 'Roboto, Arial, sans-serif',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {/* Левая часть — ссылки */}
          <Box sx={{ flex: '1 1 66%', minWidth: 300 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {columns.map((column, index) => (
                <Box key={index} sx={{ flex: '1 1 200px' }}>
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
                          color: '#fff',        // белый цвет
                          fontSize: '1rem',     // как h6
                          fontWeight: 700,      // жирный
                          textDecoration: 'none',
                          letterSpacing: '0.05em',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            color: '#90caf9', // светло-синий при наведении
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
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    mb: 0.5,
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: 700,
                  }}
                >
                  {phone}
                </Typography>
              ))}
            </Box>

            {/* Email */}
            <Link
              href={`mailto:${contacts.email}`}
              sx={{
                display: 'block',
                mb: 2,
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

            {/* Адрес */}
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
      </Container>
    </Box>
  );
};

export default Footer;

