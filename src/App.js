import Users from './Containers/Users';
import MultiFetch from './Containers/MultiFetch';
import TwitterSearch from './Containers/TwitterSearch.js';
import Counter from './Containers/Counter';
import './App.css';
import {Row, Col } from 'react-bootstrap';

function App() {

  return (
    <div className="App container">
      <Row>
        <Col>
          <Counter />
        </Col>
        {/* <Col>
          <Users />
        </Col> */}
        
        {/* <Col><MultiFetch /></Col> */}
        <Col><TwitterSearch /></Col>
      </Row>     
    </div>
  );
}

export default App;


//button getTime();

// implement clock

// parent -> child

// child should display time

// parent will have button