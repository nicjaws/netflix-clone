import React, {useState, useEffect} from 'react';
import axios from '../axios';

function Row({title, fetchUrl}) {
  const [movies, setMovies] = useState([]);

  // A snipped of code which runs based on a specific condition/variable
  useEffect(() => {
    // if [], run once when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchData()
  }, [])
  return (
    <div>
      {/* title */}
        <h2>{title}</h2>
      {/* container */}
    </div>
  )
}

export default Row
