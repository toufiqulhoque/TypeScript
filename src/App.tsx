
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import LoggedIn from './components/State/LoggedIn';
import Status from './components/Status';

function App() {
  const personName = {
    first: 'toufiq',
    last: 'hoque'
  }

  const nameList = [{
    first: 'Toufiq',
    last: 'Hoque'
  },
  {
    first: 'Fahim',
    last: 'Hossain'
  },
  {
    first: 'Saikat',
    last: 'Mazumdar'
  }
  ]
  return (
    <div className="App">
      <Greet name='toufiq' messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Placeholder text</Heading >
      <Oscar>
        <Heading>Oscar goes to toufiq</Heading>
      </Oscar>
      <Button handleClick={() => {
        console.log('Button clicked');
      }}></Button>
      <Container styles={{ border: '1px solid black', padding: '1rem' }}></Container>
      <LoggedIn></LoggedIn>
    </div>
  );
}

export default App;
