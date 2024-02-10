import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const sendCart = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.notify({
        status: "Pending",
        title: "Sending",
        message: "Sending Cart Data",
      })
    );

    const sendData = async () => {
      const response = await fetch(
        "https://addtask1-default-rtdb.firebaseio.com/book.json",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      dispatch(
        uiActions.notify({
          status: "success",
          title: "Success",
          message: "Cart is sended successfully",
        })
      );
    };

    try {
      await sendData();
    } catch (e) {
      dispatch(
        uiActions.notify({
          status: "error",
          title: "Error",
          message: "Sending Cart is failed",
        })
      );
    }
  };
};

export const getCart = () => {
  return (dispatch) => {
    const getData = async () => {
      const response = await fetch(
        "https://addtask1-default-rtdb.firebaseio.com/book.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log(data);

      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
    };

    try {
      getData();
    } catch (e) {}
  };
};
