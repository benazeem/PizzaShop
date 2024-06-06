import { useState, useEffect } from 'react';

function useMap() {

  const [data, setData] = useState(null);
  const [ermsg, setErmsg] = useState(null);

  const url = 'https://maps-data.p.rapidapi.com/reviews.php?business_id=ChIJ63MeDRDrDDkRvKS54STQ7Qs&country=in&lang=en&limit=18&sort=Relevant&place_id=ChIJ63MeDRDrDDkRvKS54STQ7Qs';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7a78dd5859msh61137d84fe00721p15693ejsn8bca805a270c',
      'X-RapidAPI-Host': 'maps-data.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        if (!response.ok) {
          throw Error(response.statusText);
        }
      } catch (error) {
        setErmsg(error.message);
        console.log(ermsg);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  return data;
}

export default useMap;
