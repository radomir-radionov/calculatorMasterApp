import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

import Loader from '@/components/Loader'

const LoyoutPage = lazy(() => import('@/srceens/Loyout'))
const HomePage = lazy(() => import('@/srceens/Home'))
const SettingsPage = lazy(() =>
  import('@/srceens/Settings'),
)

export default () => (
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
)
