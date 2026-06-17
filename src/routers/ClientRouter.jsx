import React from 'react';
import Main from '../components/Main';
import Product from '../pages/products/Product';
import Catagories from '../pages/categories/Catagories';
import Todolist from '../pages/todolist/Todolist';
import { Route, Routes } from 'react-router-dom';

function ClientRouter(props) {
    const pC = [
        {
            path: "/",
            element: <Main />,
        },
        {
            path: "/product",
            element: <Product />,
        },
        {
            path: "/categories",
            element: <Catagories />,
        },
        {
            path: "/Todolist",
            element: <Todolist />,
        }

    ]
    return (
        <div>
            <Routes >
                {
                    pC.map(item => (
                        <Route path={item.path} element={item.element}  />
                    ))
                }
            </Routes>
        </div>
    );
}

export default ClientRouter;