import React, { useState,useEffect } from "react";
import axios from "axios";

const UpdateForm = ({showSelectedDigimons}) => {
  const data = showSelectedDigimons
  const [name, setName] = useState(data.name);
  const [level, setLevel] = useState(data.level);
  const [img, setImg]= useState(data.img)


  
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedDigimon = {
      id: data.id,
      name,
      level,
      img,
    };
    axios
      .put(`https://be-digimons-ardzlsj9t-abdallahmosa.vercel.app/api/v1/edit/${data.id}`, updatedDigimon)
      .then((response) => {
        alert("Digimon updated successfully!");
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };



  return (
    <form onSubmit={handleUpdate}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Image URL
        <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
      </label>
      <label>
        Level:
        <input type="text" value={level} onChange={(e) => setLevel(e.target.value)} />
      </label>

      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
