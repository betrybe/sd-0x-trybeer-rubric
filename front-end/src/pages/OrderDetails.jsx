import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import OrderDetailsCard from '../components/OrderDetailsCard';
import getSaleDetails from '../methods/salesDetails';

function OrderDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [orderDetails, setOrderDetails] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const saleDetails = await getSaleDetails(id);
      if (saleDetails.redirect) {
        history.push('/login');
      } else {
        setOrderDetails(saleDetails);
      }
    };
    fetchData();
  }, [history, id]);
  return (
    <>
      <h1 data-testid="top-title"> Detalhe do pedido</h1>
      {orderDetails.length > 0 && <OrderDetailsCard orderDetails={ orderDetails } /> }
    </>
  );
}

export default OrderDetails;
