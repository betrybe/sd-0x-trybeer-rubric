const url = 'http://localhost:3001';
const register = async (userData) => {
  const postMethod = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: userData,
    }),
  };

  const apiRequest = await fetch(`${url}/register`, postMethod);
  const apiResponse = await apiRequest.json();
  localStorage.setItem('user', JSON.stringify(apiResponse.user));
  return apiResponse;
};

export default register;
