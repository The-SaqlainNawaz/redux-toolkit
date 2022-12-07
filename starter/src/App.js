
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculate_the_money } from "./features/cart";

function App() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((store) => store.cart)
  useEffect(() => {
    dispatch(calculate_the_money())
  }, [cartItems])

  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>

  )
}
export default App;
