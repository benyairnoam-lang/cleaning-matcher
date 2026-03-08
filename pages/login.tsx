import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const LoginPage = () => {
    const [role, setRole] = useState('customer');

    const responseGoogle = (response) => {
        console.log(response);
        // Handle authentication with response
    };

    return (
        <div>
            <h2>Login Page</h2>
            <div>
                <label>
                    <input
                        type="radio"
                        value="customer"
                        checked={role === 'customer'}
                        onChange={() => setRole('customer')}
                    /> Customer
                </label>
                <label>
                    <input
                        type="radio"
                        value="cleaner"
                        checked={role === 'cleaner'}
                        onChange={() => setRole('cleaner')}
                    /> Cleaner
                </label>
            </div>
            <GoogleLogin
                clientId="YOUR_GOOGLE_CLIENT_ID_HERE"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default LoginPage;