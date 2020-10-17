import React from 'react';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AdminDashboard = () => {
    return (
        <div>
            <AdminSidebar></AdminSidebar>
            <AdminServiceList></AdminServiceList>
        </div>
    );
};

export default AdminDashboard;