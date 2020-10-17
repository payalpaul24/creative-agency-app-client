import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import slacker from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';

const OurPartnerLogo = () => {
    return (
        <section style={{marginTop:'120px'}} className="container-fluid mb-5">
            <div className="row d-flex text-center justify-content-center m-sm-auto">
                <div className="col-md-2 mb-sm-2">
                    <img style={{width:'140px',height:'36px'}} src={slacker} alt=""/>
                </div>
                <div className="col-md-2 mb-sm-2">
                    <img style={{width:'140px',height:'36px'}} src={google} alt=""/>
                </div>
                <div className="col-md-2 mb-sm-2">
                    <img style={{width:'140px',height:'36px'}} src={uber} alt=""/>
                </div>
                <div className="col-md-2 mb-sm-2">
                    <img style={{width:'140px',height:'36px'}} src={netflix} alt=""/>
                </div>
                <div className="col-md-2 mb-sm-2">
                    <img style={{width:'140px',height:'36px'}} src={airbnb} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default OurPartnerLogo;