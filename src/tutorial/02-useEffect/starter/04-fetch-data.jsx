import { useState,useEffect } from "react";

const url = 'https://api.github.com/users';


const FetchData = () =>{

  const [users,setUsers] = useState([])

  useEffect(()=>{
    fetch(url)
    .then(response =>response.json())
    .then(data=>setUsers(data))
  },[])

  return (
    <main>
      <h4>Fetch data example</h4>
      <h3>Github Users</h3>
      <ul className="users">
        {
          users.map((user)=>{
            return <li key={user.id} className="person">
            <img src={user.avatar_url} alt="avatar url"  className="img"/>
            <div>
            <h5>{user.login}</h5>
            <a href={user.url}>Profile</a>
            </div>
          </li>
          })
        }
      </ul>
    </main>
  )
}

export default FetchData