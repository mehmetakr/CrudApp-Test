import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [users, setusers] = useState([
    {
      name: 'Mehmet',
      mail: 'mehmet60@gmail.com',
      age: 60,
    },
    {
      name: 'Ali',
      mail: '	alihttp@gmail.com',
      age: 30,
    },
    {

      name:"Hasan",
      mail:"kalem@gmail.com",
      age:32,

    }
  ]);


  // yeni kullanıcılar ekleyebilmek bir method  olusturuyoruz..


  const adduser= (newuser) =>{


    setusers([...users,newuser]);

  };

  return (
    <div >
      <h2 className="text-center my-5"  style={{color:"white"}}>Kullanıcı Paneli</h2>
      <Form adduser={adduser} />
      <List users={users} />
    </div>
  );
};
export default App;
