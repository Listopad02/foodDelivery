import { useState, useEffect } from "react";
import api from "../../utils/api";
import Order from "./Order";
import Loader from "../../components/Loader";

function Orders() {
  const [orders, setOreders] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api("/orders", {
          method: "GET",
        });
        setOreders(res.data);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, []);

  if (!orders) return <Loader />;

  return (
    <>
      {orders.reverse().map((order) => {
        return <Order key={order.id} order={order} />;
      })}
    </>
  );
}
export default Orders;
