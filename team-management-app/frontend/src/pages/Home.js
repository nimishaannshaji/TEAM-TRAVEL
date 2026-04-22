import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>TEAM TRAVEL</h1>
      <p>Student Team Members Management Application</p>

      <div>
        <Link to="/add"><button>Add Member</button></Link>
        <Link to="/members"><button>View Members</button></Link>
      </div>
    </div>
  );
}