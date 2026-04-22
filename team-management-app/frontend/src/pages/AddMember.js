import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function AddMember() {
  const { id } = useParams();
  const [form, setForm] = useState({});
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/members/${id}`)
        .then(res => setForm(res.data));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(form).forEach(key => data.append(key, form[key]));
    if (file) data.append("image", file);

    if (id) {
      await axios.put(`http://localhost:5000/api/members/${id}`, data);
      alert("Updated!");
    } else {
      await axios.post("http://localhost:5000/api/members", data);
      alert("Added!");
    }
  };

  return (
    <div className="form-container">
      <h2>{id ? "Update Member" : "Add Member"}</h2>

      <form onSubmit={handleSubmit}>
        <input value={form.name || ""} placeholder="Name"
          onChange={e => setForm({...form, name: e.target.value})} />

        <input value={form.role || ""} placeholder="Role"
          onChange={e => setForm({...form, role: e.target.value})} />

        <input value={form.email || ""} placeholder="Email"
          onChange={e => setForm({...form, email: e.target.value})} />

        <input value={form.phone || ""} placeholder="Phone"
          onChange={e => setForm({...form, phone: e.target.value})} />

        <input value={form.department || ""} placeholder="Department"
          onChange={e => setForm({...form, department: e.target.value})} />

        <input type="file" onChange={e => setFile(e.target.files[0])} />

        <button type="submit">{id ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}
