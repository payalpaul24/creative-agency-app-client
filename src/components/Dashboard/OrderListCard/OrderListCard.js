import React from 'react';
import serviceOne from '../../../images/icons/serviceOne.png';

const OrderListCard = ({placedOrder}) => {

    
    return (
        
        <div className="card col-sm-12 col-md-4 p-3 border-0 text-center">
                <div className="d-flex">
                <img className="img-fluid" style={{ height: '74px',width:'74px'}} src={serviceOne} alt="" />
                <input style={{backgroundColor: '#FFE3E3',marginLeft: 'auto'}} className="btn h-50 text-danger" type="button" value="Pending"/>
                </div>
                <div>
                <h5 className="mt-3 mb-3 text-left card-title">{placedOrder.serviceName}</h5>
                <p className="card-text text-left">{placedOrder.details}</p>
                </div>
                <br/>
            </div>
    );
};

export default OrderListCard;