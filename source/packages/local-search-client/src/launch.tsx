import React from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { SearchPage } from './pages'

export const Launch: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Navigate replace={true} to="/search" />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  )
}
