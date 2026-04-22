import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MemberDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState({});

  useEffect(() => {
  axios.get(`http://localhost:5000/api/members/${id}`)
    .then(res => setMember(res.data));
}, [id]);

  return (
    <div className="details">
      <div className="card3d">
      <img src={`http://localhost:5000/uploads/${member.image}`} alt="" />

      <h2>{member.name}</h2>
      <p><b>Role:</b> {member.role}</p>
      <p><b>Email:</b> {member.email}</p>
      <p><b>Phone:</b> {member.phone || "N/A"}</p>
      <p><b>Department:</b> {member.department || "N/A"}</p>

      <button onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>
    </div>
    </div>
  );
}