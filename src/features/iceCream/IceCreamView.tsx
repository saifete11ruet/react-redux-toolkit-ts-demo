import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { iceCreamActions } from "./iceCreamSlice";

const IceCreamView = () => {
  const numOfIceCreams = useAppSelector(
    (state) => state.iceCream.numOfIceCreams
  );
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<number>(1);

  return (
    <>
      <h2>Number of IceCreams: {numOfIceCreams}</h2>
      <button onClick={() => dispatch(iceCreamActions.ordered())}>Order</button>
      <input
        type="number"
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
      />
      <button onClick={() => dispatch(iceCreamActions.restocked(value))}>
        Restock
      </button>
    </>
  );
};

export default IceCreamView;
