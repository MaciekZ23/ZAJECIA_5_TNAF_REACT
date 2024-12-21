function ShowUser({ name, phone, country }) 
{
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <p>Numer telefonu: {phone}</p>
        <p>Kraj pochodzenia: {country}</p>
      </div>
    );
}
  
export default ShowUser;
  