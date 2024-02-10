import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";

function App() {
  const cart = useSelector((state) => state.cart);
  const isVisibleCart = useSelector((state) => state.ui.isVisibleCart);

  useEffect(() => {
    fetch("https://addtask1-default-rtdb.firebaseio.com/book.json", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    });
  }, [cart]);
  return (
    <Layout>
      {isVisibleCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
