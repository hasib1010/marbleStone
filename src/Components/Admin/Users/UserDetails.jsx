import React, { useEffect, useState } from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import AdminSidebar from '../AdminSidebar';
import { useParams } from 'react-router-dom';

function UserDetails() {
    const [userDetail, setUserDetail] = useState(null); // Start with null to check if data is being fetched
    const [loading, setLoading] = useState(true); // To handle loading state
    const [error, setError] = useState(null); 
    const { id } = useParams();  

    useEffect(() => {
        const fetchUserDetail = async () => {
            try {
                const response = await fetch(`http://localhost:5001/users/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserDetail(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetail();
    }, [id]); // Dependency array includes `id`

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="flex h-screen w-[98%] mx-auto bg-gray-100">
            <AdminSidebar />
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <DashboardNav />
                <main className="flex-1 p-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h1 className="text-3xl font-bold mb-4">Admin</h1>
                        <p className="text-gray-600">Admin Details</p>
                        {/* Render user details here */}
                        {userDetail ? (
                            <div>
                                <h2 className="text-xl font-semibold">{userDetail.name}</h2>
                                <p>Email: {userDetail.email}</p>
                                <img
                                    src={userDetail.profilePictureURL}
                                    alt={`${userDetail.name}'s profile`}
                                    className="w-32 h-32 object-cover rounded-full mt-4"
                                />
                                {/* Add additional content here */}
                            </div>
                        ) : (
                            <p>No user data available</p>
                        )}
                    </div>
                    <div>
                        <div className="overflow-x-auto mt-10">
                            {/* Add additional content here */}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default UserDetails;
