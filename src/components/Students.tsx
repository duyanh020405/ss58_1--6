import axios from "axios";
import { useEffect, useState } from "react";

interface Student {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: number;
  statut: boolean;
  created_at: string;
}

export default function Students() {
  const [list, setList] = useState<Student[]>([]);
  const [searchId, setSearchId] = useState<number | undefined>();
  const [foundStudent, setFoundStudent] = useState<Student | null>();
  const [notFound, setNotFound] = useState<boolean>();

  useEffect(() => {
    axios.get("http://localhost:8080/students")
      .then(response => setList(response.data));
  }, []);

  const find = () => {
    if (searchId === undefined || searchId === null) {
      return;
    }
    const student = list.find(item => item.id === searchId);
    if (student) {
      setFoundStudent(student);
      setNotFound(false);
    } else {
      setFoundStudent(null);
      setNotFound(true);
    }
  };

  return (
    <>
      {list.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>ID: {item.id}</p>
          <p>Address: {item.address}</p>
          <p>Created at: {item.created_at}</p>
          <p>Email: {item.email}</p>
          <p>Phone: {item.phone}</p>
        </div>
      ))}
      <h3>Nhập ID</h3>
      <input 
        type="number" 
        placeholder="Tìm kiếm ID" 
        onChange={(e) => setSearchId(Number(e.target.value))} 
      />
      <button onClick={find}>Tìm kiếm</button>
      {foundStudent && (
        <div>
          <h3>Kết quả tìm kiếm:</h3>
          <p>Name: {foundStudent.name}</p>
          <p>ID: {foundStudent.id}</p>
          <p>Address: {foundStudent.address}</p>
          <p>Created at: {foundStudent.created_at}</p>
          <p>Email: {foundStudent.email}</p>
          <p>Phone: {foundStudent.phone}</p>
        </div>
      )}
      {notFound && <p>Không tìm thấy bản ghi</p>}
    </>
  );
}
