import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./store/actionCreators";

function App() {
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()

  const { deposit, withdraw } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => deposit(100)}> Deposit </button>
      <button onClick={() => withdraw(100)}> Withdraw </button>
    </div>
  );
}

export default App;
