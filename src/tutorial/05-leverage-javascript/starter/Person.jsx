import avatar from "../../../assets/avatar.svg";
const Person = ({ name, nickName = "defaultValue", images }) => {
  const img = images?.[0]?.small?.url ?? avatar;
  
  return (
    <div>
      <img src={img} alt={name} style={{ width: "60px" }}></img>
      <h4>{name}</h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
};

export default Person;
