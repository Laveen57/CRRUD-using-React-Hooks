import { useState } from "react";
import UserTable from "./Tables/UserTable";
import AddUserForm from "./Forms/addUserForm";
import EditUserForm from "./Forms/EditUserForm";



function App() {

  const userData = [
    {id:1,name:'Vijay',username:'vijay22'},
    {id:2,name:'Ajith',username:'ajith01'},
    {id:3,name:'Surya',username:'surya23'},
  ];

  const addUser = (user)=>{
    user.id = users.length + 1;
    setUsers([...users,user]);
  }

  const deleteUser = (id)=>{
    setUsers(users.filter((user)=>
      user.id!==id
    ));
    setEditing(false);
  }

  const [users, setUsers] = useState(userData);
  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,
    name:'',
    username:''
  }

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({id:user.id, name:user.name, username:user.username});
  }

  const updateUser = (id,updatedUser)=>{
    setEditing(false);
    setUsers(users.map((user)=>(
      user.id===id?updatedUser:user
    )));
  }


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing?(<div>
            <h2>Edit User</h2>
            <EditUserForm 
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}/>
          </div>)
          :(<div>
            <h2>Add User</h2>
            <AddUserForm addUser={addUser}/> 
          </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
