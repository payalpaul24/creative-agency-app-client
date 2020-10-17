import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AdminServiceList = () => {
    const { user } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [placedOrders, setPlacedOrders] = useState([]);

    useEffect(() => {
        fetch('https://mighty-ravine-85440.herokuapp.com/placeOrders', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => setPlacedOrders(data));
    }, [])

    return (
        <div className="d-flex col-sm-12">
            <AdminSidebar></AdminSidebar>
            <div style={{ marginTop: '120px', height: '700px', width: '100%', background: '#F4F7FC' }} className="service-list-admin admin-content p-3">
                <h5>Service List</h5>
                <table className="bg-white table-hover">
                    <thead className="table-active">
                        <tr>
                            <th className="name">Name</th>
                            <th className="email">Email ID</th>
                            <th className="title">Service</th>
                            <th className="description">Poject Details</th>
                            <th className="status">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {placedOrders.map((placedOrder) => (
                            <tr key={placedOrder._id}>
                                <td className="name">{placedOrder.name}</td>
                                <td className="email">{placedOrder.email}</td>
                                <td className="title">{placedOrder.serviceName}</td>
                                <td className="description">{placedOrder.details}</td>
                                <td className="status">
                                    <select className="border-0 text-danger" name="status">
                                        <option value="pending">Pending</option>
                                        <option value="done">Done</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default AdminServiceList;