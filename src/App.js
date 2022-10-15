import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Main></Main>,
      children : [
        {
          path : '/', 
          element  : <Home></Home>
        },
        {
          path : '/shop',
          element : <Shop></Shop>
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
