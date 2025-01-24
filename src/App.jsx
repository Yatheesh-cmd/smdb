import { useState } from "react";
import Add from "./components/Add";
import List from "./components/List";

import "./App.css";

function App() {
  const [success,setSuccess]=useState("")

  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  return (
    <>
      <nav className="navbar-expand navbar-light navbar-success bg-danger" style={{ height: "40px" }} >
        <a href="" className="navbar-brand">
          <i className="fa-solid fa-film text-white"> SMDB</i>
        </a>
      </nav>
      <div className="container-fluid" style={{ minHeight: "100vh",backgroundColor: "#494F55", color:'white' }}>
        <Add val={setSuccess} />   
        <List success={success} onEditClick={handleShowEditModal} />
      
      </div>
    </>
  );
}

export default App;
