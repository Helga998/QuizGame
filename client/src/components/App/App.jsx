import React from 'react'
import { Link, Route, Routes, Outlet } from "react-router-dom";
import MainPage from '../MainPage/MainPage';
import QuestionsList from '../QuestionsList/QuestionsList';

export default function App() {
  return (
    <div>

      <Routes>
        <Route>
          <Route path="questions/:id" element={<QuestionsList />} />
          <Route path="/" element={<MainPage />} /> 
        </Route>
      </Routes>

      <div className='container'><Outlet /></div>
    </div>
  )
}
