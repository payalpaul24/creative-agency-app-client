import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Reviews = () => {

    const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;
    const { register, handleSubmit, errors } = useForm();

    // const src = loggedInUser.image;

    const onSubmit = data => {
        fetch('https://mighty-ravine-85440.herokuapp.com/insertFeedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...data})
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('success');
                }
            })
            .catch(error => {
                alert('Error');
            })
    };



    return (
        <div className="d-flex col-sm-12">

            <Sidebar></Sidebar>
            <div className="" style={{ height: '700px', width: '100%',marginTop: '100px'}}>
                <div className="">
                    <h4 className="">Reviews</h4>
                </div>

                <div className="d-flex mt-5 p-4" style={{ height: '700px', width: '100%', background: '#F4F7FC' }}>

                    <form className="p-5 w-100 col-md-8 col-sm-12" onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group">
                            <input style={{ height: '50px' }} type="text" ref={register({ required: true })} name="name" className="form-control" placeholder="Your name" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>


                        <div className="form-group">
                            <input style={{ height: '50px' }} type="text" ref={register({ required: true })} name="companyName" className="form-control" placeholder="Company’s name, Designation" />
                            {errors.companyName && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <textarea style={{ height: '100px' }} type="text" ref={register({ required: true })} name="details" className="form-control" cols="30" rows="10" placeholder="Description"></textarea>
                            {errors.details && <span className="text-danger">This field is required</span>}
                        </div>

                        <button type="submit" class="btn btn-dark w-25" >Submit</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reviews;