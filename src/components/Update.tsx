import axios from "axios";
import React, { useEffect, useState } from "react";
interface Student {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: number;
  statut: boolean;
  created_at: string;
}
export default function Update() {
  let index = Number(document.getElementById("j") as HTMLInputElement);
  const [list, setList] = useState<Student[]>([]);
  useEffect(() => {
    axios
      .put("http://localhost:8080/students/1", {
        name: "duy3",
        email: "duy3@gmail.com",
        address: "khu 123",
        phone: 12345627,
        statut: true,
        created_at: "01/01/2002",
      })
      .then((respone) => setList(respone.data));
  }, []);
  //   const find = () => {
  //     for (let i = 0; i < list.length; i++) {
  //       if (index === list[i].id) {
  //         list[i].name = String(confirm("new Name"));
  //         list[i].address = String(confirm("new Address"));
  //         list[i].email = String(confirm("new Email"));
  //         list[i].statut = Boolean(confirm("nhap la true , next la false"));
  //         list[i].created_at = String(confirm("new created_at"));
  //       }
  //     }
  //   };
  return (
    <div>
      <input type="number" id="j" />
      {/* <button onClick={find}>Change by id</button> */}
    </div>
  );
}
