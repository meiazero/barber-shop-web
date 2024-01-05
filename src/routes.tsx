import { RouteObject, createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/_layouts/app'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
  },
]

export const router = createBrowserRouter(routes)
