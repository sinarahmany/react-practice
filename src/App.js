import './App.css';
import Greet from './components/Greet';
import {Message} from './components/Message';
import { ParentComponenet } from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet name={'sina'} familyName={'Rahmannejad'} />
      <Greet name={'John'} familyName={'Doe'} >
        <p>I`m the child</p>
      </Greet> */}

      {/* <Message /> */}
      <ParentComponenet />
    </div>
  );
}

export default App;
