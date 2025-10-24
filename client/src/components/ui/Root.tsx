import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function Root():React.JSX.Element {
  return (
    <>
    <Container>
    {/* тут нужно будет добавить графическое изображение при долгой загрузке */}
      <ResponsiveAppBar/>
      <Outlet/>
      {/* тут нужно будет добавить панель управления ошибками */}
    </Container>
    </>
  )
}
