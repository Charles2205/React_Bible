import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./content.css";
import { useEffect, useState } from "react";

const Search = () => {
  const [inputs, setInput] = useState("");
  const [quotations,setQuotations] =useState([])
  
  
  useEffect(() => {
    async function requestData() {
      try {
        if (inputs.trim().length > 0) {
            console.log(inputs);
          const res = await axios.get(`https://bible-api.com/${inputs}`);
          console.log(res);
          setQuotations([res.data])
          console.log(quotations);
        }
        
      } catch (error) {
        console.log(error);
      }

    }
    
    requestData()
  }, [inputs]);
//   console.log(quotations);

  // setting up input state
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  // click event
  const btnSearch = async() => {
    const res = await axios.get(`https://bible-api.com/+${inputs}`);
    console.log(res);
    setQuotations([res.data])
    console.log(quotations); 
  };
  return (
    <>
      <center>
        <Container className="my-5">
          <InputGroup className="mb-3">
            <Button
              onClick={btnSearch}
              variant="outline-primary"
              id="button-addon1"
            >
              Search
            </Button>
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              onChange={onChangeInput}
              value={inputs}
            />
          </InputGroup>

          <div className="content">
            {quotations.map((quotation)=>(
                
                <div key={inputs}>
                <span className="Ref">{quotation.reference}</span><br />
                <span className="Verse">{quotation.text}</span>
                </div>

            ))}
          </div>
        </Container>
      </center>
    </>
  );
};

export default Search;
