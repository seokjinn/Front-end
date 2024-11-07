import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 라우팅 관련 컴포넌트
import StartPage from './pages/StartPage'
import _ from './pages/_'
import LoginPage from './pages/LoginPage'
import NoticeBoard from './pages/NoticeBoard';
import WritePage from './pages/WritePage';
import Classroom from './pages/Classroom';



function App() {
  return (
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<StartPage/>} />
            <Route path="/_" element={<_ />} />  {/* 두 번째 페이지 라우팅 */}
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/Notice" element={<NoticeBoard />} />
            <Route path="/Write" element={<WritePage />} />
            <Route path="/Classroom" element={<Classroom />} />
            

    </Routes>
    </BrowserRouter>
  );
}

export default App;