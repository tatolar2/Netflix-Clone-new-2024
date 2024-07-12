import React from "react";
import "./Header.css";
import { IoIosSearch } from "react-icons/io";
import { FaPortrait } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

function Header() {
  return (
    <div className="header_outer_wrapper">
      <div className="header_container ">
        <div className="header_left">
          <img
            className="netflix-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="netflix logo"
          />
          <ul>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languge</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <IoIosSearch />
            </li>
            <li>
              <IoNotificationsOutline />
            </li>
            <li>
              <FaPortrait />
            </li>
            <li>
              <IoIosArrowDropdown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

// the below header uses an useffect method that used the header background to listen scrolling and return the header background color to appear black but not sucessful

// import React, { useEffect, useState } from "react";
// import "./Header.css";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import PortraitIcon from "@mui/icons-material/Portrait";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// function Header() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setShow(true);
//       } else {
//         setShow(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`header_outer_wrapper ${show && "nav_black"}`}>
//       <img
//         className="netflix-logo"
//         src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
//         alt="netflix logo"
//       />
//       <div className="header_container">
//         <div className="header_left">
//           <ul>
//             <li>Home</li>
//             <li>TVShows</li>
//             <li>Movies</li>
//             <li>Latest</li>
//             <li>MyList</li>
//             <li>Browse by Languge</li>
//           </ul>
//           <div />
//         </div>
//         <div className="header_right">
//           <ul>
//             <li>
//               <SearchIcon />
//             </li>
//             <li>
//               <NotificationsNoneIcon />
//             </li>
//             <li>
//               <PortraitIcon />
//             </li>
//             <li>
//               <ArrowDropDownIcon />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;