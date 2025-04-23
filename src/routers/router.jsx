import { createBrowserRouter } from 'react-router'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home/Home'
import Register from '../pages/Register/Register'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <div>404</div>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ],
    },
])
export default router
