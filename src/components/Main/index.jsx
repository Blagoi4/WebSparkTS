import "../../App.css";
import { useState } from "react";
import Card from "./Card";
import "../Main/Card/Card.css";
import SelectionGrid from "../SelectionGrid";
import BgWwaves2 from "../../img/Vector2.svg";

const Main = () => {
  const [view, setView] = useState("grid");

  const handleGridClick = () => setView("grid");
  const handleListClick = () => setView("list");

  return (
    <section className="image-section">
      <SelectionGrid
        activeIcon={view}
        onGridClick={handleGridClick}
        onListClick={handleListClick}
      />
      <Card view={view} />
      <div>
        <img src={BgWwaves2} alt="" className="bg-waves-2" />
      </div>
    </section>
  );
};

export default Main;
