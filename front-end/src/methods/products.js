const baseURL = 'http://localhost:3001/products';

const fetchProducts = async () => {
  const apiRequest = await fetch(baseURL);
  const apiResponse = await apiRequest.json();

  return apiResponse;
};

export default fetchProducts;
