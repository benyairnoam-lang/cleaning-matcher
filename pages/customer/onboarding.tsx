import React from 'react';

const Onboarding = () => {
    return (
        <form>
            <h1>Customer Onboarding</h1>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" />
            </div>
            <div>
                <label htmlFor="address">Address:</label>
                <textarea id="address" name="address"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Onboarding;
