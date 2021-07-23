import './DashBoard.css'
import {Link} from 'react-router-dom'

function DashBoard() {
  const toggle = () => {
    document.querySelector("#sidebar", "#content").classList.toggle('active') ;
  };

  return (
    <div className="App">
      <div className="vertical-nav navbar bg-white" id="sidebar">
        <ul className="nav flex-column bg-white m-0 p-0">
          <li className="nav-item sidebar-item">
            <Link className="nav-links"><i className="fa-solid fa-house"></i>Home</Link>
          </li>
          <li className="nav-item sidebar-item">
            <Link className=" nav-links "><i className="fa fa-address-card mr-3 text-primary fa-fw"></i>Profile</Link>
          </li>
          <li className="nav-item sidebar-item">
            <Link className=" nav-links "><i className="fa fa-question mr-3 text-primary fa-fw"></i></Link>
          </li>
        </ul>
      </div>
      <div className="page-content p-5" id="content">
        <button id="sidebarCollapse" type="button" className="btn btn-secondary toggle-button" onClick={()=>toggle()}>
          <i className="fa fa-slider mr-3 text-primary fa-fw"></i><span className="text-uppercase font-weight-bold">Toggle</span>
        </button>
      </div>
    </div>
  );
}

export default DashBoard;
