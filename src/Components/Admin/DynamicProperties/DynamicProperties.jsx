import React from 'react';
import AdminSidebar from '../AdminSidebar';
import { Link } from 'react-router-dom';
import DashboardNav from '../DashboardNav/DashboardNav';

function DynamicProperties() {
    return (
        <div className='flex h-screen w-[98%]  mx-auto bg-gray-100'>
            <AdminSidebar></AdminSidebar>

            <div className="flex-1 flex flex-col">
                <DashboardNav></DashboardNav>
                <main className="flex-1 p-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h1 className="text-3xl font-bold mb-4">Properties</h1>
                        <p className="text-gray-600">Welcome to the Properties sections.</p>
                        {/* Add additional content here */}
                    </div>

                    <div className='mt-10 bg-white'>

                        <div className='flex flex-col gap-10 ml-10 '>
                            <Link to={'/admin/properties/edit'} className=' my-2 text-xl btn w-fit btn-info'>Post a Property</Link>
                            <Link to={'/admin/properties/update'} className=' my-2 text-xl btn w-fit btn-accent'>Edit a Property</Link>
                            <Link to={"/admin/properties/delete"} className=' my-2 text-xl btn w-fit btn-error'>Delete a Property</Link>

                        </div>

                    </div>

                </main>
            </div>
        </div>
    )
}

export default DynamicProperties;