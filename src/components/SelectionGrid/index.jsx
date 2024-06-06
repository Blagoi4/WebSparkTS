import PropTypes from "prop-types";
import GridIcon from "../GridIcon";
import ListIcon from "../ListIcon";
import "./SelectionGrid.css";

const SelectionGrid = ({ activeIcon, onGridClick, onListClick }) => {
  return (
    <div className="container">
      <div className="main-icons">
        <div
          className={`main-icons-btn ${activeIcon === "grid" ? "active" : ""}`}
          onClick={onGridClick}
        >
          <GridIcon />
        </div>
        <div
          className={`main-icons-btn ${activeIcon === "list" ? "active" : ""}`}
          onClick={onListClick}
        >
          <ListIcon />
        </div>
      </div>
    </div>
  );
};

SelectionGrid.propTypes = {
  activeIcon: PropTypes.string.isRequired,
  onGridClick: PropTypes.func.isRequired,
  onListClick: PropTypes.func.isRequired,
};

export default SelectionGrid;
