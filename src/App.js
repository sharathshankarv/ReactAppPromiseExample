import Users from './Containers/Users';
import MultiFetch from './Containers/MultiFetch';
import './App.css';
import {Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App container">
      <Row>
        <Col sm={6}>
          <Users />
        </Col>
        
        <Col><MultiFetch /></Col>
      </Row>     
    </div>
  );
}

export default App;
