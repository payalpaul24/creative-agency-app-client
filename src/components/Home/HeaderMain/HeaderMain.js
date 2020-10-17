import React from 'react';
import frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '111430' }}>Let’s Grow Your <br/> Brand To The <br/>Next Level</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Repudiandae quam a soluta suscipit dicta ducimus nemo culpa ex alias beatae.</p>
                <button style={{height:'45px',width:'170px'}} className="btn btn-dark">Hire Us</button>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={frame} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;