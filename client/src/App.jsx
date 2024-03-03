import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';


import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Cart from './pages/Cart'

import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'

import Dashboard from './pages/User/Dashboard';

import { PrivateRoute } from './route/PrivateRoute';
import { AdminRoute } from './route/AdminRoute';

import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Order from './pages/User/Order';
import Profile from './pages/User/Profile';



function App() {


  return (
    <>
      <div className=' bg-background font-Urbanist text-nav min-h-[100vh]'>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 2000,
            style: {
              background: "#09090B",
              color: "#FAFAFA",
              border: "1px solid #27272A",
            },
          }}
        />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          <Route path='/dashboard' element={<PrivateRoute />}>
            <Route path='user' element={<Dashboard />} />
            <Route path='user/orders' element={<Order />} />
            <Route path='user/profile' element={<Profile />} />

          </Route>

          <Route path='/dashboard' element={<AdminRoute />} >
            <Route path='admin' element={<AdminDashboard />} />
            <Route path='admin/create-category' element={<CreateCategory />} />
            <Route path='admin/create-product' element={<CreateProduct />} />
            <Route path='admin/Users' element={<Users />} />

          </Route>


          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </div>
    </>
  )
}

export default App
