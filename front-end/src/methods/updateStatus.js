const baseURL = 'http://localhost:3001/admin/orders';

const updateStatus = async (sale) => {
  const postMethod = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sale,
    }),
  };
  const apiRequest = await fetch(`${baseURL}/${sale.id}`, postMethod);
  const apiResponse = await apiRequest.json();
  // console.log('minha resposta foi', apiResponse.updatedSale[0]);
  // localStorage.setItem('user', JSON.stringify(apiResponse));
  return apiResponse.updatedSale[0];
};

export default updateStatus;
