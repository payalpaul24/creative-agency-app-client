import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <OurWorks></OurWorks>
            <ClientFeedback></ClientFeedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;