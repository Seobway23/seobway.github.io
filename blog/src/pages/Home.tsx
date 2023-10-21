import React from "react";
import OOcean from "../components/Ocean";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const handleItemClick = (path: any) => {
    navigate(path);
  };

  const rowItemList = {
    profile: { navigate: "profile", title: "Profile" },
    project: { navigate: "project", title: "Project" },
    ing: { navigate: "ing", title: "ing" },
  };

  return (
    <>
      <div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <OOcean />
        </div>
      </div>
      <div className="titlecontainer">
        <div className="morphism">
          <h1>Welcome to my blog!</h1>
        </div>
      </div>
      <div className="divrow">
        {Object.entries(rowItemList).map(([key, value]) => (
          <div
            key={key}
            className="rowitem"
            onClick={() => handleItemClick(value.navigate)}
          >
            <h2>{value.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
