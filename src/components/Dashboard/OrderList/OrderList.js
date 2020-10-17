import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderListCard from '../OrderListCard/OrderListCard';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {

	const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;
	const [ placedOrders, setPlacedOrders] = useState([]);

	useEffect(() => {
        fetch('https://mighty-ravine-85440.herokuapp.com/placeOrders', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
        }
        })
        .then(res => res.json())
        .then(data => setPlacedOrders(data));
    },[])
    

	console.log(placedOrders);

    return (
        <div className="d-flex col-sm-12">
            <Sidebar></Sidebar>
            <div className="" style={{ height: '700px', width: '100%', marginTop: '100px',background: '#F4F7FC' }}>
            <div className="">
                    <h4 className="">Service List-Order</h4>
                </div>
                <div className="mt-5 p-5 container-fluid" style={{width: '100%', background: '#F4F7FC' }}>
                    <div className="card-deck">
                        <div className="row w-100">
                        {
                           placedOrders.map(placedOrder => <OrderListCard placedOrder={placedOrder} key={placedOrder._id} />)
                        }
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;