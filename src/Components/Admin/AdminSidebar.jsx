import React from 'react';
import { Link } from 'react-router-dom';

function AdminSidebar() {
    return (
        <aside className="w-64 bg-gray-800 rounded-xl text-white min-h-screen">
            <div className="p-4">
                <h2 className="text-2xl font-semibold">Admin Panel</h2>
            </div>
            <nav className="mt-6">
                <ul>
                    <li>
                        <Link to="/admin/profile_dashboard" className="block py-2 px-4 hover:bg-gray-700">Profile</Link>
                    </li>
                    <li>
                        <Link to="/admin" className="block py-2 px-4 hover:bg-gray-700">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/users" className="block py-2 px-4 hover:bg-gray-700">Users</Link>
                    </li>
                    <li>
                        <Link to="/admin/dynamic_blogs" className="block py-2 px-4 hover:bg-gray-700">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/admin/properties" className="block py-2 px-4 hover:bg-gray-700">Properties</Link>
                    </li>
                    <li>
                        <Link to="/admin/settings" className="block py-2 px-4 hover:bg-gray-700">Settings</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default AdminSidebar;