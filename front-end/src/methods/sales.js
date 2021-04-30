const baseURL = 'http://localhost:3001/sales';

const fetchSales = async () => {
  const apiRequest = await fetch(baseURL);
  const apiResponse = await apiRequest.json();

  return apiResponse;
};

export default fetchSales;
