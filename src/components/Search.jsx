import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./content.css";
import { useEffect, useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    async function requestData() {
      try {
        if (input.trim().length > 0) {
          const res = await axios.get(`https://bible-api.com/${input}`);
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    requestData();
  }, [input]);

  // setting up input state
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  // click event
  const btnSearch = () => {
    console.log(input);
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
              value={input}
            />
          </InputGroup>

          <div className="content">
            <span className="Ref">Ref</span> <br />
            <span className="Verse">Verse</span>
          </div>
        </Container>
      </center>
    </>
  );
};

export default Search;
