import React, { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AddService = () => {

    const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;

    // const { name, email, photoURL } = loggedInUser;

    const { register, handleSubmit, errors } = useForm();
    const formRef = useRef();

    const onSubmit = data => {
        fetch('https://mighty-ravine-85440.herokuapp.com/addServices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...data})
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Good Job', 'Your Ordered Placed!', 'success');
            }
        })
    };

    return (
        <div className="d-flex col-sm-12">

            <AdminSidebar></AdminSidebar>
            <div className="" style={{ height: '700px', width: '100%', marginTop: '100px' }}>
                <div className="">
                    <h4 className="">Add Service</h4>
                </div>
                <div className="d-flex mt-5 p-4" style={{ height: '700px', width: '100%', background: '#F4F7FC' }}>

                    <form className="bg-white h-75 w-100 p-3" ref={formRef} onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group">
                            <div className="form-row">
                                <div className="col">
                                    <label htmlFor="">Service Title</label>
                                    <input type="text" ref={register({ required: true })} name="title" className="form-control w-100" placeholder="Enter title" />
                                    {errors.title && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="col">
                                <label htmlFor="">Icon</label>
                                    <input className="form-control w-50" style={{ backgroundColor: '#DEFFED' }} placeholder="upload a Project" type="file" name="" id="" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Description</label>
                            <textarea type="text" ref={register({ required: true })} name="description" className="form-control w-50" cols="30" rows="6" placeholder="Enter Description"></textarea>
                            {errors.description && <span className="text-danger">This field is required</span>}
                        </div>

                        <div style={{float: 'right'}} className="">
                            <button type="submit" class="btn btn-success" >Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddService;