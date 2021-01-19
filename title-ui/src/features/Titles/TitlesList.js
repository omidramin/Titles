import React, { useState, useEffect } from "react";
import axios from "axios";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import TitleListRow from "./TitleList-Row/TitleList-Row";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export const Titles = (props) => {
  const [title, setTitle] = useState([]);
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [txtValue, setTxtValue] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/Titles").then((response) => {
      setTitle(response.data);
      setLoading(false);
    });
  }, []);

  const get = () => {
    if(txtValue)
    {
    axios({
      method: "put",
      url: "http://localhost:5000/api/Titles/title",
      params: {
        Title:  txtValue ,
      },
    }).then((response) => {
      console.log(response);
      setTitle(response.data);
      setLoading(false);
    });}
    else{
      axios.get("http://localhost:5000/api/Titles").then((response) => {
        setTitle(response.data);
        setLoading(false);
      });
    }
  };

  const handleOnToggle = (e) => {
    setLoading(true);
    open ? setOpen(false) : setOpen(true);
  };

  const handleOChange = (e) => {
    setTxtValue(e.target.value);
  };

  return (
    <Card onToggle={handleOnToggle}>
      <Card.Header as="h5" onClick={handleOnToggle} bg="delta">
        Titles
        <span className="ml" onClick={handleOnToggle}>
          {open ? (
            <IoIosArrowForward size={28}></IoIosArrowForward>
          ) : (
            <IoIosArrowDown size={28}></IoIosArrowDown>
          )}
        </span>
      </Card.Header>
      <Collapse in={open}>
        <Card.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handleOChange}
            />
            <InputGroup.Append>
              <Button onClick={get} variant="outline-secondary">
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
          {loading ? null : (
            <>
              <table className="table table-sm table-striped table-bordered">
                <thead bg="gamma">
                  <tr>
                    <th className="border-right-0"></th>
                    <th className="border-left-0">Title Name</th>
                    <th>Title Name Sortable</th>
                    <th>Release Year</th>
                    <th>Processed Date</th>
                  </tr>
                </thead>
                <tbody>
                  {title.map((dataItem, i) => (
                    <TitleListRow key={i} {...dataItem} {...props} />
                  ))}
                </tbody>
              </table>
            </>
          )}
        </Card.Body>
      </Collapse>
    </Card>
  );
};
