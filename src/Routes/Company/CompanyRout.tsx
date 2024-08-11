import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from '../../Pages/Compeny/Commen/Registration'
import Home from '../../Pages/Compeny/Commen/Home'
import Login from '../../Pages/Compeny/Commen/Login'
import AccountingDashboard from '../../Pages/Compeny/Admin/AdminDashboard'
import ProductAddComponent from '../../Pages/Compeny/Admin/ProductAddComponent'

const CompanyRout : React.FC = () => {
  return (
    <Routes>
        <Route path='/companies/register' element={<Registration />} />
        <Route path='/' element={<Home/>} />
        <Route path='/companies/login' element={<Login />} />
        <Route path='/companies/dashboard/:route' element={<AccountingDashboard />} />
        <Route path='/companies/dashboard/items/add' element={<ProductAddComponent />} />
    </Routes>
  )
}

export default CompanyRout