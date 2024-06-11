import axios from 'axios';
import React, { useState } from 'react';

export default function Delete() {
  const [id, setId] = useState<number | undefined>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(Number(e.target.value));
  };

  const handleDelete = () => {
    if (id !== undefined) {
      axios.delete(`http://localhost:8080/students/${id}`)
    } else {
      alert("khong co id");
    }
  };

  return (
    <div>
        <h2>Bai4</h2>
        <h3>Xoa</h3>
      <input type="number" id="id" onChange={handleInputChange} />
      <button onClick={handleDelete}>xoa</button>
    </div>
  );
}
