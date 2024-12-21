import './App.css';
import ShowUser from './components/ShowUser';

function App() 
{
  const users = [
    { name: 'Jan Kowalski', phone: '+48 123 456 789', country: 'Polska' },
    { name: 'Anna Nowak', phone: '+44 987 654 321', country: 'Wielka Brytania' },
    { name: 'John Doe', phone: '+1 555 123 456', country: 'USA' },
  ];

  return (
    <div className="App">
      <h1>Lista użytkowników</h1>
      {/* Renderowanie użytkowników */}
      <div className="userlist">
        {users.map((user, index) => (
          <ShowUser
            key={index}
            name={user.name}
            phone={user.phone}
            country={user.country}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
