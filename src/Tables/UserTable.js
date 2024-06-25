
const UserTable = (props) => (
    <table>
        <thead>
            <th>Name</th>
            <th>UserName</th>
            <th>Action</th>
        </thead>
        <tbody>
            {props.users.length>0?(
                props.users.map((user)=>(
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                       <button 
                       className="button muted-button"
                       onClick={()=>props.editRow(user)}>Edit</button>
                       <button 
                       className="button muted-button"
                       onClick={()=>props.deleteUser(user.id)}>Delete</button>
                    </td>
                </tr>
                ))
                ):(
                    <tr>
                        <td colSpan={3}>No Users</td>
                    </tr>
                )
                }
        </tbody>
    </table>
)

export default UserTable;