import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
