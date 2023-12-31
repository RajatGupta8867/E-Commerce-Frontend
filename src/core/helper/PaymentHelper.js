import { API } from '../../backend';

export const getmeToken = async (userId, token) => {
  try {
    const response = await fetch(`${API}/payment/gettoken/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json();
  } catch (error) {
    console.log('Error in getmeToken:', error);
  }
};

export const processPayment = async (userId, token, paymentInfo) => {
  try {
    const response = await fetch(`${API}/payment/braintree/${userId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(paymentInfo),
    });

    return response.json();
  } catch (error) {
    console.log('Error in processPayment:', error);
  }
};
