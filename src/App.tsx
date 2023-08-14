import "./App.css";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/IceCream/IceCreamView";
import UserView from "./features/User/UserView";

function App() {
  return (
    <>
      <h1>Redux Toolkit App</h1>
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  );
}

export default App;
