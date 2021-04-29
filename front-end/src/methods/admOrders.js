const url = 'http://localhost:3001';

const options = {
  method: 'GET',
  headers: {},
};

const admOrders = {
  async getAll(token) {
    options.headers.authorization = token;
    const response = await (await fetch(`${url}/admin/orders`, options)).json();
    return response;
  },
};

export default admOrders;
