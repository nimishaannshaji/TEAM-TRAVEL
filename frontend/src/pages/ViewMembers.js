import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ViewMembers() {
  const [members, setMembers] = useState([]);

  const fetchMembers = () => {
    axios.get("http://localhost:5000/api/members")
      .then(res => setMembers(res.data));
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const deleteMember = async (id) => {
    await axios.delete(`http://localhost:5000/api/members/${id}`);
    fetchMembers();
  };

  return (
    <div className="container">
      <h1>TEAM TRAVEL MEMBERS</h1>

      <div className="grid">
        {members.map((m) => (
          <div className="card3d" key={m._id}>
          <img src={`http://localhost:5000/uploads/${m.image}`} alt="" />
          <h3>{m.name}</h3>
          <p>{m.role}</p>

          <Link to={`/members/${m._id}`}>
            <button style={{background:"linear-gradient(45deg,#00c6ff,#0072ff)"}}>View</button>
          </Link>

          <Link to={`/edit/${m._id}`}>
            <button style={{background:"linear-gradient(45deg,#f7971e,#ffd200)"}}>Edit</button>
          </Link>

          <button style={{background:"linear-gradient(45deg,#ff416c,#ff4b2b)"}} onClick={() => deleteMember(m._id)}>Delete</button>
        </div>
        ))}
      </div>
    </div>
  );
}