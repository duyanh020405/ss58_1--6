import axios from 'axios';
import React, { useState } from 'react';

interface Student {
  id?: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  statut: boolean;
  created_at: string;
}

export default function Create() {
  const [newStudent, setNewStudent] = useState<Student>({
    name: '',
    email: '',
    address: '',
    phone: '',
    statut: false,
    created_at: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:8080/students', newStudent)
  }

  return (
    <div>
      <h2>Bai 5</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text"  placeholder="name" value={newStudent.name} onChange={handleChange} />
          <input type="text"  placeholder="address" value={newStudent.address} onChange={handleChange} />
          <input type="text"  placeholder="email" value={newStudent.email} onChange={handleChange} />
          <input type="text"  placeholder="phone" value={newStudent.phone} onChange={handleChange} />
          <input type="text"  placeholder="created_at" value={newStudent.created_at} onChange={handleChange} />
          <p><input type="checkbox" checked={newStudent.statut} onChange={e => setNewStudent({ ...newStudent, statut: e.target.checked })} />Statust</p>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}

