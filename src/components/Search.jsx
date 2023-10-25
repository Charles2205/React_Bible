import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
// import "./content.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Search = () => {
  const [inputs, setInput] = useState("");
  const [quotations, setQuotations] = useState([]);

  useEffect(() => {
    async function requestData() {
      try {
        if (inputs.trim().length > 0) {
          console.log(inputs);
          const res = await axios.get(`https://bible-api.com/${inputs}?verse_numbers=true`);
          console.log(res);
          setQuotations([res.data]);
          // console.log(quotations);
        }
      } catch (error) {
        console.log(error);
      }
    }
    const timer = setTimeout(() => {
      requestData();
    }, 800);
    return () => clearTimeout(timer);
  }, [inputs]);
  //   console.log(quotations);
  // setting up debouncing

  // setting up input state
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  // click event
  const btnSearch = async () => {
    const res = await axios.get(`https://bible-api.com/+${inputs}?verse_numbers=true`);
    console.log(res);
    setQuotations([res.data]);
    // console.log(quotations);
  };

  const selectTranslations = async (e) => {
    let trans = e.target.innerText;
    console.log(e.target.innerText);
    const res = await axios.get(
      `https://bible-api.com/+${inputs}?translation=${trans}`
    );
    console.log(res);
    setQuotations([res.data]);
  };
  // selectTranslations()
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
            <OverlayTrigger
              
              key="bottom"
              placement="bottom"
              overlay={<Tooltip id={`tooltip-bottom`}>
                Single Verse (Eg: John 3:16) <br />
                Abbreviated Book Name <br /> (Eg:jn 3:16) <br />
                Verse Range <br />(Eg:Romans 12:1-2)

              
              
              
              
              </Tooltip>}
            >
              <Button 
              className = "mx-1"
              variant="outline-danger">? </Button>
            </OverlayTrigger>
            <DropdownButton id="dropdown-basic-button" title="Translations">
              <Dropdown.Item
                onClick={selectTranslations}
                onChange={setQuotations}
              >
                KJV
              </Dropdown.Item>
              <Dropdown.Item
                onClick={selectTranslations}
                onChange={setQuotations}
              >
                {" "}
                BBE
              </Dropdown.Item>
              <Dropdown.Item
                onClick={selectTranslations}
                onChange={setQuotations}
              >
                	webbe
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>

          {/* <div className="content">
            {quotations.map((quotation)=>(
                
                <div key={inputs}>
                <span className="Ref">{quotation.reference}</span><br />
                <span className="Verse">{quotation.text}</span>
                </div>

            ))}
          </div> */}

          <Card>
            <Card.Body>
              {quotations.map((quotation) => (
                <blockquote
                  key={quotation.reference}
                  className="blockquote Ref mb-0"
                >
                  <p>
                    {" "}
                    {quotation.reference} ({quotation.translation_name}){" "}
                  </p>
                  <footer className="blockquote-footer Verse">
                    {quotation.text}
                  </footer>
                </blockquote>
              ))}
            </Card.Body>
          </Card>
        </Container>
      </center>
    </>
  );
};

export default Search;
