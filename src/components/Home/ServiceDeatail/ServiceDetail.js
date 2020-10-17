import React from 'react';
import './ServiceDetail.css';
import serviceThree from '../../../images/icons/serviceThree.png';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ addService }) => {
    console.log(addService);
    return (
            <div className="card col-md-4 p-2 border-0 text-center service">
                <Link style={{textDecoration:'none'}} className="" to={`/order/${addService._id}`}>
                <div className="">
                <img className="img-fluid m-auto" style={{ height: '74px',width:'74px'}} src={serviceThree} alt="" />
                </div>
                <div>
                <h5 className="mt-3 mb-3 card-title">{addService.title}</h5>
                <p className="card-text">{addService.description}</p>
                </div>
                <br/>
                <button className="btn btn-dark w-50 m-auto order">Order Now</button>
                </Link>
            </div>
    );
};

export default ServiceDetail;