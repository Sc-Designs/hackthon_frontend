import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DoctorNav from '../Components/DoctorNav';
import Sidebar from '../Components/Sidebar';
import ChatsPage from './ChatsPage';
import ReportsPage from './ReportsPage';
import SettingsPage from './SettingsPage';

const DoctorPortal = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      <DoctorNav 
        isOpen={mobileSidebarOpen} 
        toggle={() => setMobileSidebarOpen(!mobileSidebarOpen)} 
      />
      <Sidebar 
        isOpen={mobileSidebarOpen} 
        onClose={() => setMobileSidebarOpen(false)} 
      />
      
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="chats" element={<ChatsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route index element={<ChatsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default DoctorPortal;