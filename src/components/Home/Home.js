import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const Home = () => {
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://be-digimons-ardzlsj9t-abdallahmosa.vercel.app/api/v1/total/");
        setDigimons(response.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  const handleAddToFavorite = async (digimon) => {
    try {
      const response = await axios.post("https://be-digimons-ardzlsj9t-abdallahmosa.vercel.app/api/v1/add-to-favorite/", digimon);
      console.log(response.data);
      alert("Done")
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <h1>Digimon Characters</h1>
      <div className="row">
        {digimons.map((digimon) => (
          <div className="col-md-3 mb-4" key={digimon.name}>
            <Card>
              <Card.Img variant="top" src={digimon.img} />
              <Card.Body>
                <Card.Title>{digimon.name}</Card.Title>
                <Card.Text>{digimon.level}</Card.Text>
                <Button variant="primary"onClick={() => handleAddToFavorite(digimon)}>Add to favorites</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;