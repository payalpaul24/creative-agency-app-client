import React, { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const MakeAdmin = () => {

    const { user } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;

    const { name } = loggedInUser;

    const formRef = useRef();


    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        formRef.current.reset();
        fetch('https://mighty-ravine-85440.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...data })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Admin Make Success!');
                }
            })
    };
    return (
        <div className="d-flex col-sm-12">

            <AdminSidebar></AdminSidebar>
            <div className="" style={{ height: '700px', width: '100%', marginTop: '100px' }}>
                <div className="d-flex justify-content-between">
                    <h4 className="">Order</h4>
                    <button className="btn btn-dark"> {name} </button>
                </div>

                <div className="d-flex mt-5 p-4" style={{ height: '700px', width: '100%', background: '#F4F7FC' }}>

                    <form className="p-5 w-75 bg-white w-100 h-50" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="">Email</label>
                        <div className="form-group d-flex">
                            <input type="text" ref={register({ required: true })} name="email" className="form-control w-75" placeholder="Your email address" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                            <div className=" ml-1">
                              <button type="submit" class="btn btn-success" >Send</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;