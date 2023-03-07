import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import UpdateForm from "../Form/UpdateForm";
const MyDigimons = () => {
  const [myDigimons, setMyDigimons] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showSelectedDigimons, setSelectedDigimons]=useState([])


  useEffect(() => {
    axios
      .get("https://be-digimons-ardzlsj9t-abdallahmosa.vercel.app/api/v1/list-view")
      .then((response) => setMyDigimons(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleRemoveFromMyDigimons = (id) => {
    axios
      .delete(`https://be-digimons-ardzlsj9t-abdallahmosa.vercel.app/api/v1/edit/${id}`)
      .then((response) =>
        setMyDigimons(myDigimons.filter((digimon) => digimon.id !== id))
      )
      .catch((error) => console.log(error));
  };

  const handelUpdate = (digimon)=>{
    setSelectedDigimons(digimon)
    setShowUpdateForm(true)

  }



  return (
    <div>
      {showUpdateForm && <UpdateForm showSelectedDigimons={showSelectedDigimons}></UpdateForm>}
      <h1>My Digimons</h1>
      {myDigimons.length === 0 ? (
        <h1>NO AVAILABLE RECORDS</h1>
      ) : (
        <div className="row">
          {myDigimons.map((digimon) => (
            <div className="col-md-3 mb-4" key={digimon.id}>
              <Card>
                <Card.Img variant="top" src={digimon.img} />
                <Card.Body>
                  <Card.Title>{digimon.name}</Card.Title>
                  <Card.Text>{digimon.level}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromMyDigimons(digimon.id)}
                  >
                    Remove
                  </Button>


                  <Button
                  variant="danger"
                  onClick={() =>handelUpdate(digimon)}
                  >

                    Update
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDigimons;
