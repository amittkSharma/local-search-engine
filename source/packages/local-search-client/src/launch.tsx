import React from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { DetailPage, SearchPage } from './pages'

export const Launch: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Navigate replace={true} to="/search" />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/detail/:searchId" element={<DetailPage />} />
      </Routes>
    </Router>
  )
}
