import RootLayout from '@/layouts/root-layout';
import FoodDetail from '@/pages/food-detail';
import Home from '@/pages/home';
import NotFound from '@/pages/not-found';

export const routes = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            {
                path: 'feedback/:id',
                element: <FoodDetail />,
            },
            { path: '*', element: <NotFound /> },
        ],
    },
];
