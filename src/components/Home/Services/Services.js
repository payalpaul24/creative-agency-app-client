import React, { useState } from 'react';
import serviceOne from '../../../images/icons/serviceOne.png';
import serviceTwo from '../../../images/icons/serviceTwo.png';
import serviceThree from '../../../images/icons/serviceThree.png';
import ServiceDetail from '../ServiceDeatail/ServiceDetail';

const Services = () => {

    const serviceData = [
        {
            name: 'Web & Mobile design',
            details: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            img: serviceOne
        },
        {
            name: 'Graphic design',
            details: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
            img: serviceTwo
        },
        {
            name: 'Web development',
            details: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            img: serviceThree
        }
    ]

    const [addService, setAddService] = useState([]);

    fetch('https://mighty-ravine-85440.herokuapp.com/addServiceView')
    .then(res => res.json())
    .then(data => setAddService(data))

    return (
        <section  style={{ marginTop: '260px' }} className="container">
            <div className="text-center">
                <h2>Provide awesome <span style={{ color: '#7AB259' }}>services</span></h2>
            </div>
            <div style={{ marginTop: '60px'}} className="">
                <div className="card-deck">
                    {
                        addService.map(addService => <ServiceDetail addService={addService}></ServiceDetail>)
                    }
                </div>
            </div>
            <br />
            <br />
        </section>
    );
};

export default Services;