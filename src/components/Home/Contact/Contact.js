import React from 'react';

const Contact = () => {
    return (
        <section className="row p-5" style={{ marginTop: '100px', height: '750px', backgroundImage: 'linear-gradient(#FBD062, #FBD062)' }}>
            <div className="col-md-6 text-center">
                <h3>Let us handle your <br /> project, professionally.</h3>
                <p className="text-secondary">With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</p>
            </div>
            <div className="col-md-6">
                <form action="">
                    <div className="form-group">
                        <input style={{ height: '70px' }} type="text" className="form-control" placeholder="Your Email Address *" />
                    </div>
                    <div className="form-group">
                        <input style={{ height: '70px' }} type="text" className="form-control" placeholder="Your Name/Company's Name *" />
                    </div>
                    <div className="form-group">
                        <textarea style={{ height: '277px' }} className="form-control" id="" cols="30" rows="10" placeholder="Your Message *"></textarea>
                    </div>
                    <button style={{ height: '45px', width: '140px' }} className="btn btn-dark ">Send</button>
                </form>
            </div>
                <div style={{margin:'auto',marginTop:'20px'}}>
                   <p className="text-secondary">Copyright Payal Paul 2020</p>
                </div>
        </section>
    );
};

export default Contact;