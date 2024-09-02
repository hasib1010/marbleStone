import React from 'react';
import Navbar2 from '../Navbar/Navbar2';
import { Link } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import DashboardNav from './DashboardNav/DashboardNav';

function AdminPanel() {
    return (
        <div className="flex h-screen w-[98%]  mx-auto bg-gray-100">
            {/* Sidebar */}
            <AdminSidebar></AdminSidebar>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              <DashboardNav></DashboardNav>
                <main className="flex-1 p-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                        <p className="text-gray-600">Welcome to the admin dashboard. Use the sidebar to navigate through the different sections.</p>
                        {/* Add additional content here */}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AdminPanel;
