import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar';
import DashboardNav from '../DashboardNav/DashboardNav';
import { Link } from 'react-router-dom';

function Users() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5001/users/")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUser(data)
            })
    }, [])
    return (
        <div className="flex h-screen w-[98%]  mx-auto bg-gray-100">

            <AdminSidebar></AdminSidebar>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <DashboardNav></DashboardNav>
                <main className="flex-1 p-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h1 className="text-3xl font-bold mb-4">Moderators</h1>
                        <p className="text-gray-600">Manage All Moderators</p>
                        {/* Add additional content here */}
                    </div>
                    <div>
                        <div className="overflow-x-auto mt-10">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th className='border text-xl text-center text-black'>Name</th>
                                        <th className='border text-xl text-center text-black'>Email</th>
                                        <th className='border text-xl text-center text-black'>Role</th>
                                        <th ></th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {/* row 1 */}
                                    {
                                        user.map(admin => <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td className='border'>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={admin.profilePictureURL}
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{admin.name}</div>
                                                        <div className="text-sm opacity-50">United States</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='border link text-blue-400'>
                                                {admin.email}
                                            </td>
                                            <td className='border text-center'>Admin</td>
                                            <th>
                                                <Link to={`${admin._id}`}><button className="btn btn-ghost  ">Details</button></Link>
                                            </th>
                                        </tr>)
                                    }

                                </tbody>
                                {/* foot */}

                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Users;