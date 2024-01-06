import { RouteObject, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/404'
import { AppLayout } from './pages/_layouts/app'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />
  },
]

export const router = createBrowserRouter(routes)
