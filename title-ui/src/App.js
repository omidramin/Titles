import React, {useState , useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props)=> {
  const [title , setTitle] = useState([]);

  // useEffect(() =>{
    
  // })
  const get = () => {
    axios.get('http://localhost:5000/api/Titles')
    .then((response) =>
    setTitle(response.data));
  }
  return (
    <div className="App">
      <Button variant="primary" title="getTitle" onClick={get}>get Title</Button>
      <table className="table table-sm table-striped table-bordered">
        <thead className="bg-light">
          <tr>
            <th>Title Name</th>
            <th>Title Name Sortable</th>
            <th>Release Year</th>
            <th>Processed Date</th>
          </tr>
        </thead>
        <tbody>
        {title.map((t) => (
          <tr>
            <td>{t.titleName}</td>
            <td>{t.titleNameSortable}</td>
            <td>{t.releaseYear}</td>
            <td>{new Date(t.processedDateTimeUtc).toDateString()}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
