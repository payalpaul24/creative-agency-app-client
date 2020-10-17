import React from 'react';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';
import users from '../../../images/icons/users.png';
import plus from '../../../images/icons/plus.png';
import cloud from '../../../images/icons/cloud.png';

const AdminSidebar = () => {
    return (
        <div className="sidebar w-25 h-100 p-4">
			<Link to="/">
				<img src={logo} alt="" style={{ width: '150px', height: '47px' }} />
			</Link>
			<div className="sidebar-buttons pt-5">
				<Link to="/adminServiceList" className="btn">
					<img style={{ width: '20px', height: '20px' }} src={cloud} alt=""/>
					<span>Service List</span>
				</Link>
				<Link to="/addService" className="btn">
					<img style={{ width: '20px', height: '20px' }} src={plus} alt=""/>
					<span>Add Service</span>
				</Link>
				<Link to="/makeAdmin" className="btn">
                <img style={{ width: '20px', height: '20px' }} src={users} alt=""/>
					<span>Make Admin</span>
				</Link>
				
			</div>
		</div>
    );
};

export default AdminSidebar;