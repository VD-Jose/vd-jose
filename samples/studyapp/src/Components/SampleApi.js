import React, {useState, useEffect} from "react";
import './Sample.css';

function SampleApi() {
    const [data, setData] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")  
      .then((res) => res.json())
        .then((json) => {
            console.log('response', json);
          setData(json);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
  }, []);

  return (
    <div className="card">
        <h1 className>Sample API</h1>
        <ul>
            {data.map((item, index)=>(
                <li key={index}>{item.title}</li>
            ))}
        </ul>
    </div>
    );
};
export default SampleApi;