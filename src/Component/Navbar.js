import React, { Fragment } from "react";
import { Link } from "react-router-dom";


import "./Navbar.css";

const Navbar = (props) => {debugger
  return (
    <Fragment>
      <header className="header">
        <Link  to="/">Home </Link>
        <Link  to="/about"> About </Link>
        <Link  to="/contact">Contact Us</Link>
      </header>
    </Fragment>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// export default function Navbar(props) {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           Home
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About
//               </Link>
//             </li>
//           </ul>

//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
