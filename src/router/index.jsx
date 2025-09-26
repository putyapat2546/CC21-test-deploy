import { createBrowserRouter } from 'react-router'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage';
import ProductsPage from '../pages/ProductsPage';
import Layout from '../components/Layout';
import { fetchProducts } from '../assets/api/products';

const router = createBrowserRouter([
  {path: '/', element: <Layout />, 
  children:[
  {index: true, element: <HomePage />},
  {path: 'about', element: <AboutPage/>},
  {path: 'products', element: <ProductsPage/>, loader: fetchProducts},
  ]},
  {path: '*', element:<h1>kkfkfkkff</h1>},
  {
  basename: '/CC21-test-deploy'
  }
])

export default router;