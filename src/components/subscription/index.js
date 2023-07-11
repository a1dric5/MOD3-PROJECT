import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SubscriptionPage = () => {
  const history = useNavigate();

  const [selectedPlan, setSelectedPlan] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubscription = async () => {
    try {
      // Make an API request to your backend to process the subscription
      const response = await axios.post('/api/subscribe', {
        plan: selectedPlan,
        paymentMethod,
      });
      // Handle the response or any necessary actions
      console.log(response.data);
      // Redirect the user to a success page or any other desired destination
      history.push('/success');
    } catch (error) {
      // Handle any errors or display error messages
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Choose a Subscription Plan</h1>
      <div>
        <input
          type="radio"
          id="basic-plan"
          name="subscription-plan"
          value="basic"
          checked={selectedPlan === 'basic'}
          onChange={() => handlePlanSelection('basic')}
        />
        <label htmlFor="basic-plan">Basic Plan</label>
      </div>
      <div>
        <input
          type="radio"
          id="premium-plan"
          name="subscription-plan"
          value="premium"
          checked={selectedPlan === 'premium'}
          onChange={() => handlePlanSelection('premium')}
        />
        <label htmlFor="premium-plan">Premium Plan</label>
      </div>
      <h2>Select a Payment Method</h2>
      <div>
        <input
          type="radio"
          id="credit-card"
          name="payment-method"
          value="credit-card"
          checked={paymentMethod === 'credit-card'}
          onChange={() => handlePaymentMethodChange('credit-card')}
        />
        <label htmlFor="credit-card">Credit Card</label>
      </div>
      <div>
        <input
          type="radio"
          id="paypal"
          name="payment-method"
          value="paypal"
          checked={paymentMethod === 'paypal'}
          onChange={() => handlePaymentMethodChange('paypal')}
        />
        <label htmlFor="paypal">PayPal</label>
      </div>
      <button onClick={handleSubscription}>Subscribe</button>
    </div>
  );
};

export default SubscriptionPage;
