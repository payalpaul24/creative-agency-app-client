import React, { useEffect, useState } from 'react';
// import customerOne from "../../../images/customerOne.png";
// import customerTwo from "../../../images/customerTwo.png";
// import customerThree from "../../../images/customerThree.png";
import ClientFeedBackDetail from '../ClientFeedbackDetail/ClientFeedBackDetail';

const ClientFeedback = () => {
    // const ClientFeedbackData = [
    //     {
    //         name: 'Nash Patrik',
    //         position: 'CEO, Manpol',
    //         img: customerOne
    //     },
    //     {
    //         name: 'Graphic design',
    //         position: 'CEO, Manpol',
    //         img: customerTwo
    //     },
    //     {
    //         name: 'Web development',
    //         position: 'CEO, Manpol',
    //         img: customerThree
    //     }
    // ]

    // const [feedbacks, setFeedbacks] = useState([])

    // useEffect(() => {
    //     fetch('https://mighty-ravine-85440.herokuapp.com/feedbacks')
    //         .then(res => res.json())
    //         .then(data => {
    //             setFeedbacks(data)
    //         })
    // }, [])

    const [reviews, setReviews] = useState([]);

    fetch('https://mighty-ravine-85440.herokuapp.com/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))


    return (
        <section style={{marginTop:'100px'}} className="container">
            <div className="text-center">
                <h2>Clients <span style={{ color: '#7AB259' }}>Feedback</span></h2>
            </div>
            <div className="card-deck mt-5">
                {
                    reviews.map(reviews =><ClientFeedBackDetail reviews={reviews}></ClientFeedBackDetail> )
                }
            </div>

        </section>
    );
};

export default ClientFeedback;