const baseURL = 'http://localhost:3001';

const getToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user !== null) {
    return user.token;
  }
};

const checkoutPost = async (orderData) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    authorization: token,
  };

  const postMethod = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      order: orderData,
    }),
  };

  const apiRequest = await fetch(`${baseURL}/orders`, postMethod);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

export default checkoutPost;
