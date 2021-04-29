const baseURL = 'http://localhost:3001/orders';

const getToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return user.token;
  }
  return null;
};

const salesDetails = async (id) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    authorization: token,
  };

  const getMethod = {
    method: 'GET',
    headers,

  };
  if (!token) return { redirect: true };
  const apiRequest = await fetch(`${baseURL}/${id}`, getMethod);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

export default salesDetails;
