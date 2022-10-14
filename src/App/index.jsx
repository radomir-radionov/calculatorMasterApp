import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'
import GlobalStyles from '@/globalStyles'
import Loader from '@/components/Loader'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const LoyoutPage = lazy(() => import('@/srceens/Loyout'))
const HomePage = lazy(() => import('@/srceens/Home'))
const SettingsPage = lazy(() =>
  import('@/srceens/Settings'),
)

export default () => {
  const { config: themeConfig } = useSelector(
    state => state.theme,
  )

  return (
    <ThemeProvider theme={themeConfig}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path={HOME_PAGE_ROUTE}
            element={<LoyoutPage />}>
            <Route index element={<HomePage />} />
            <Route
              path={SETTINGS_PAGE_ROUTE}
              element={<SettingsPage />}
            />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyles />
    </ThemeProvider>
  )
}
