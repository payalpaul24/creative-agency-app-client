import React from 'react';
import customerOne from '../../../images/customerOne.png';

const ClientFeedBackDetail = ({reviews}) => {
    console.log(reviews);
    return (
        <div style={{border: '1px solid #BFBFBF',boxShadow: '3px 3px 5px lightgray'}} className="card text-center mb-4 p-4">
            <div className="d-flex align-items-left">
                <img style={{width:'64px',height:'62px'}} src={customerOne} alt=""/>
                <div className="ml-2 card-title">
                    <h5>{reviews.name}</h5>
                    <h6>{reviews.companyName}</h6>
                </div>
            </div>
            <div className="card-text">
                <p> {reviews.details} </p>
            </div>
        </div>
    );
};

export default ClientFeedBackDetail;