
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './content.css'
import { useEffect } from 'react';


useEffect(()=>{
    async function ApiRequest(){}
})

const Search =()=>{

    return(
    <>
    
    
    <center>

    <Container className='my-5'>

    <InputGroup className="mb-3">
        <Button variant="outline-primary" id="button-addon1">
            Search
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <div className='content'>
            <span>HEllo</span>
      </div>
    </Container>

    </center>
    
    
        </>
    )



}


export default Search