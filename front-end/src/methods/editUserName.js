const url = 'http://localhost:3001';

const editUserName = async (user) => {
  // console.log(user);
  const postMethod = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
    }),
  };

  const apiRequest = await fetch(`${url}/profile`, postMethod);
  const apiResponse = await apiRequest.json();
  const getToken = JSON.parse(localStorage.getItem('user')).token;
  apiResponse.token = getToken;
  localStorage.setItem('user', JSON.stringify(apiResponse));
  return apiResponse;
};

export default editUserName;
