import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';
import users from '../../../images/icons/users.png';
import plus from '../../../images/icons/plus.png';
import cloud from '../../../images/icons/cloud.png';

const Sidebar = () => {

    return (
        <div className="sidebar w-25 h-100 p-4">
	
			<Link to="/">
				<img src={logo} alt="" style={{ width: '150px', height: '47px' }} />
			</Link>
			<div className="sidebar-buttons pt-5">
				<Link to="/order" className="btn">
					<img style={{ width: '20px', height: '20px' }} src={cloud} alt=""/>
					<span>Orders</span>
				</Link>
				<Link to="/orderList" className="btn">
					<img style={{ width: '20px', height: '20px' }} src={plus} alt=""/>
					<span>Service list</span>
				</Link>
				<Link to="review" className="btn">
                <img style={{ width: '20px', height: '20px' }} src={users} alt=""/>
					<span>Review</span>
				</Link>
				
				<Link to="/adminServiceList" className="btn">
					<span>Admin</span>
				</Link>
			</div>
		</div>
    );
};

export default Sidebar;