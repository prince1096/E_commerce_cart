import "./NavBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { faCottonBureau } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faPersonDress } from "@fortawesome/free-solid-svg-icons";
import { faChildReaching } from "@fortawesome/free-solid-svg-icons";

// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Diversity2Icon from "@mui/icons-material/Diversity2";
// import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="container">
        <div className="first_header cart_logo">
          <NavLink to="/" className="nav_link">
            <div className="logo_icons">
              <Diversity2Icon fontSize="large" />
              {/* <FontAwesomeIcon icon={faCottonBureau} /> */}
              <div>VastraCart</div>
            </div>
          </NavLink>
        </div>

        <div className="second_header nav-links_category">
          <NavLink to="/" className="nav_link">
            Explore
          </NavLink>

          <NavLink to="/" className="nav_link nav_Men">
            {" "}
            <div>
              Men
              <FontAwesomeIcon className="logo_men" icon={faPerson} />
            </div>
          </NavLink>

          <NavLink to="/" className="nav_link nav_Women">
            {" "}
            <div>
              Women
              <FontAwesomeIcon className="logo_women" icon={faPersonDress} />
            </div>
          </NavLink>

          <NavLink to="/" className="nav_link nav_Kids">
            {" "}
            <div>
              Kids
              <FontAwesomeIcon icon={faChildReaching} className="logo_kid" />
            </div>
          </NavLink>
        </div>

        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search products"
            className="input_header"
          />
          {/* <SearchIcon /> */}
        </div>

        <div className="third_header nav-links">
          {/* <div className="nav_logo_links"> */}

          <NavLink to="/" className="nav_link_detail">
            {" "}
            <PersonIcon fontSize="large" />
          </NavLink>

          <NavLink to="/" className="nav_link_detail">
            {" "}
            <FavoriteIcon fontSize="medium" />
            {/* <FavoriteBorderIcon /> */}
          </NavLink>

          <NavLink to="/" className="nav_link_detail  nav_link_cart">
            {" "}
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
          {/* </div> */}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
