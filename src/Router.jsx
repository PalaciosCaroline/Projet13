import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Transactions from './pages/Transactions'
import Erreur404 from './pages/Erreur404'

export default function Router() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="*" element={<Erreur404 />} />
    </Routes>
  )
}
