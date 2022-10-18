import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Orders/order';
import Register from './components/Register/Register';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import Main from './layout/Main';
import { productsAndCartLoader } from './loader/ProductsAndCart';
import ProductContext from './ProductContext/ProductContext';
import UserContext from './UserContext/UserContext';

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      loader : () => fetch('products.json'),
      element : <Main></Main>,
      children : [
        {
          path : '/', 
          element  : <Home></Home>
        },{
          path : '/productContext',
          loader : () => fetch('products.json'),
          element : <ProductContext></ProductContext>
        },
        {
          path : '/shop',
          loader : () => fetch('products.json'),
          element : <Shop></Shop>
        },
        {
          path : '/order',
          loader : productsAndCartLoader,
          element : <Order></Order>
        },
        {
          path : '/review',
          element : <Review></Review>
        },{
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/register',
          element : <Register></Register>
        },{
          path :'/*',
          element : <NotFound></NotFound>
        }
      ]
        
    }
  ])

  return (
    <div className="App">
        <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
