import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Components/Spinner';

const Protected = ({ component: Component }) => {
    // const authToken = useSelector(state => state.token);
    const authToken = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!authToken) {
            navigate('/login');
        }
    }, [authToken, navigate]);

    return authToken ? <Component /> : <Spinner/>;
};

export default Protected;
