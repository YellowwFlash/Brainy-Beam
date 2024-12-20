import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '@redux/slice/crendentialsSlice';
import { styles } from '../styles/homeStyles';


const Home = () => {
    const { isLoggedIn, userDetails } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div style={styles.container}>
            <h1>Welcome to Redux Auth</h1>
            {isLoggedIn ? (
                <>
                    <p>Hello, {userDetails.name}!</p>
                    <button onClick={handleLogout} style={styles.button}>Logout</button>
                </>
            ) : (
                <button onClick={() => navigate('/login')} style={styles.button}>Login</button>
            )}
        </div>
    );
};

export default Home;