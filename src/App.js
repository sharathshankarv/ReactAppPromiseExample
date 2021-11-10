// import Users from './Containers/Users';
// import MultiFetch from './Containers/MultiFetch';
import TwitterSearch from './Containers/TwitterSearch.js'
import './App.css';
import {Row, Col } from 'react-bootstrap';

function App() {

  return (
    <div className="App container">
      <Row>
        {/* <Col sm={6}>
          <Users />
        </Col>
        
        <Col><MultiFetch /></Col> */}
        <Col sm={6}><TwitterSearch /></Col>
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