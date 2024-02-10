import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect, Fragment } from "react";
import Notification from "./components/UI/Notification";
import { sendCart, getCart } from "./components/store/actions";

let initCheck = true;
function App() {
  const cart = useSelector((state) => state.cart);
  const isVisibleCart = useSelector((state) => state.ui.isVisibleCart);
  const notification = useSelector((state) => state.ui.notifiction);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    if (initCheck) {
      initCheck = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCart(cart));
    }
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isVisibleCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
