import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { cakeActions } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <>
      <h2>Number of Cakes: {numOfCakes}</h2>
      <button onClick={() => dispatch(cakeActions.ordered())}>Order</button>
      <button onClick={() => dispatch(cakeActions.restocked(3))}>
        Restock
      </button>
    </>
  );
};

export default CakeView;
