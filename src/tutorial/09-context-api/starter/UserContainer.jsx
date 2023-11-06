

function UserContainer({user,logout}) {
  return (
    <div className="user-container">
        <p>Hello There, {user.name}</p>
        <button type="button" onClick={logout} className="btn">logout</button>
    </div>
  )
}

export default UserContainer