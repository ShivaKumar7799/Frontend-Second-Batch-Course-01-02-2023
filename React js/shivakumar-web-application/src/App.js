import logo from './logo.svg';
import './App.css';

function App() {
  
  const myName = "Shiva kumar b";
  const role = "Front end Developer";
  const phoneNumber = 345454545;

  const date = new Date();
  const todayDate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return (
    <div >
      <h1>Learning React</h1>
      <p>Name : {myName} </p>
      <p>Designation : {role} </p>
      <p>Ph No : {phoneNumber}</p>
      <p>Today Date : 04/April/2023 </p>
      <p>Today Date : {todayDate} / {month + 1} / {year} </p>
      <p>Time : {hours} : {minutes} : {seconds} </p>
    </div>
  );
}

export default App;
