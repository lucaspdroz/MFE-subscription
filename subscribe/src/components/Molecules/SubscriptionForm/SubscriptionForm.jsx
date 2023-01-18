import React from 'react';
import SubmitButton from '../../Atoms/Buttons/Button';

import Input from "../../Atoms/Input/Input";
import Subtitle from "../../Atoms/Subtitle/Subtitle";
import Title from "../../Atoms/Title/Title";

import './style.css'

const SubscriptionForm = ({ setMessage }) => {

    const submitForm = (e) => {
        e.preventDefault()
        setMessage('Subscribed!')
    }

    return (
        <form action="" method="post" onSubmit={submitForm}>
            <Title>subscribe to newsletter </Title>
            <Subtitle>Your weekly dose of Javascript news!</Subtitle>
            <Input placeholder="Your Best e-mail" onChange={e => e.target.value} />
            <SubmitButton />
        </form>
    );
}

export default SubscriptionForm;
