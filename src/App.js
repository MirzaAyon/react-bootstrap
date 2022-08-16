
import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardGroup2 from './Components/CardGroup2/CardGroup2';
// import CardGroup from './Components/CardGroup/CardGroup';

function App() {
  return (
    <div className="App">
      {/* <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>

      <button type="button" className="btn btn-link">Link</button> */}

      {/* <CardGroup></CardGroup> */}


      <h1>Using React Bootstrap</h1>
      <Button>My button</Button>
      <Button variant='danger'>Your button</Button>
      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      {/* eta amdr compo */}
      <CardGroup2></CardGroup2>

    </div>
  );
}

export default App;
