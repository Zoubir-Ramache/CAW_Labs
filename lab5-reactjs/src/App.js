import Ex1 from "./Exo1/ex1";
import Ex2 from "./Exo1/ex2";
import Ex3 from "./Exo1/ex3";
import Ex4 from "./Exo1/ex4";
import DisplayTab from "./Exo2/ex1";
import DisplayTabWithIndex from "./Exo2/ex2";
import DisplayTabWithRemove from "./Exo2/ex3";
import DisplayTabWithProps from "./Exo2/ex4";
import DisplayTwoTabs from "./Exo2/exo5";
import AuthForm from "./Exo3/ex1";
import UserList from "./Exo3/ex2";
import UserListWithDelete from "./Exo3/ex3";
import DivCreator from "./Exo4/exo1";
function App() {
  return (
    <div className="App">
      <h1>Exo 1</h1>
      <li>Exo 1.1</li>
      <Ex1/> 
      <li>Exo 1.2</li>
      <Ex2/>
      <li>Exo 1.3</li>
      <Ex3/>
      <li>Exo 1.4</li>
      <Ex4/>
      <hr/>


      <h1>Exo 2</h1>
      <li>Exo 2.1</li>
      <DisplayTab/>
      <li>Exo 2.2</li>
      <DisplayTabWithIndex/>
      <li>Exo 2.3</li>
      <DisplayTabWithRemove/>
      <li>Exo 2.4</li>
      <DisplayTabWithProps tab={["hello", "world", "from", "react"]}/>
      <li>Exo 2.5</li>
      <DisplayTwoTabs/>
      <hr/>

      <h1>Exo 3</h1>
      <li>Exo 3.1</li>
      <AuthForm/>
      <li>Exo 3.2</li>
      <UserList/>
      <li>Exo 3.3</li>
      <UserListWithDelete/>
      <hr/>

      <h1>Exo 4</h1>
      <li>Exo 4.1</li>
      <DivCreator/>
    </div>
  );
}

export default App;

