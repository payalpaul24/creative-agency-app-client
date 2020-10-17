import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {

    const { user } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;


    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('https://mighty-ravine-85440.herokuapp.com/placeOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...data })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Ordered Placed!');
                }
            })
    };

    return (
        <div className="d-flex col-sm-12">

            <Sidebar></Sidebar>
            <div className="" style={{ height: '700px', width: '100%', marginTop: '100px' }}>
                <div className="d-flex justify-content-between">
                    <h4 className="">Order</h4>
                    <button className="btn btn-dark"> {loggedInUser.name} </button>
                </div>

                <div className="d-flex mt-5 p-3" style={{ height: '700px', width: '100%', background: '#F4F7FC' }}>

                    <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group">
                            <input style={{ height: '50px' }} type="text" ref={register({ required: true })} name="name" className="form-control" placeholder="Your name / company’s name" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input style={{ height: '50px' }} type="text" ref={register({ required: true })} name="email" className="form-control" placeholder="Your email address" />
                            {errors.email && <span className="text-danger">This field is required</span>}

                        </div>

                        <div className="form-group">
                            <input style={{ height: '50px' }} type="text" ref={register({ required: true })} name="serviceName" className="form-control" placeholder="Graphic Design" />
                            {errors.serviceName && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <textarea style={{ height: '100px' }} type="text" ref={register({ required: true })} name="details" className="form-control" cols="30" rows="10" placeholder="Project Details"></textarea>
                            {errors.details && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <div className="d-flex">
                                <input style={{ height: '50px' }} type="number" ref={register({ required: true })} name="price" className="form-control 75" placeholder="Price" />
                                {errors.price && <span className="text-danger">This field is required</span>}

                                <div>
                                    <input className="form-control w-100" style={{ height: '50px', backgroundColor: '#DEFFED' }} placeholder="upload a Project" type="file" name="" id="" />
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-dark" >Send</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;