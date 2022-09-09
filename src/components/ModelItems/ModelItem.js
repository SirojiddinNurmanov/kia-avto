import React from "react";
import { useNavigate, Link } from "react-router-dom";
import data from "../data.json";

import "./modelitem.css";

export const ModelItem = () => {
  const navigate = useNavigate();
  return (
    <div className="model-item">
      <div className="paths">
        <span onClick={() => navigate("/")}>Bosh Sahifa</span>{" "}
        <span>
          <img src={data.modalItem.path} alt="path" />
        </span>{" "}
        <span onClick={() => navigate("/Modellar")}>Modellar</span>
        <span>
          <img src={data.modalItem.path} alt="path" />
        </span>{" "}
        <span onClick={() => navigate("/Modellar/ChvroletTurlari")}>
          ChevroletTurlari
        </span>
      </div>
      <h1>Modellari Turlari</h1>
      <div className="automobiles">
        <div className="automobile">
          <Link to="/Modellar/ChevroletTurlari/Malibu">
            <img src={data.modalItem.malibu} alt="auto"></img>
          </Link>
          <span>Malibu</span>
          <span>Narxi: 329 000 000 so'm</span>
        </div>
        <div className="automobile">
          <Link to="/Modellar/ChevroletTurlari/Malibu">
            <img src={data.modalItem.malibu} alt="auto"></img>
          </Link>
          <span>Malibu</span>
          <span>Narxi: 329 000 000 so'm</span>
        </div>
        <div className="automobile">
          <Link to="/Modellar/ChevroletTurlari/Damas">
            <img src={data.modalItem.damas} alt="auto"></img>
          </Link>
          <span>Damas</span>
          <span>Narxi: 329 000 000 so'm</span>
        </div>
        <div className="automobile">
          <Link to="/Modellar/ChevroletTurlari/nexia">
            <img src={data.modalItem.nexia} alt="auto"></img>
          </Link>
          <span>Nexia</span>
          <span>Narxi: 329 000 000 so'm</span>
        </div>
      </div>
      <div className="automobiles">
        <div className="automobile">
          <Link to="/Modellar/ChevroletTurlari/Tahoe">
            <img src={data.modalItem.tahoe} alt="auto"></img>
          </Link>
          <span>Tahoe</span>
          <span>Narxi: 329 000 000 so'm</span>
        </div>
        <div className="automobile">
          <Link to="/Modellar/ChevroletTurlari/nexia">
            <img src={data.modalItem.nexia} alt="auto"></img>
          </Link>
          <span>Nexia</span>
          <span>Narxi: 329 000 000 so'm</span>
        </div>
        <div className="automobile">
          <Link to="/Modellar/ChevroletTurlari/Malibu">
            <img src={data.modalItem.malibu} alt="auto"></img>
          </Link>
          <span>Chevrolet</span>
          <span>Narxi: 329 000 000 so'm</span>
        </div>
        <div className="automobile">
          <Link to="/Modellar/ChevroletTurlari/Malibu">
            <img src={data.modalItem.malibu} alt="auto"></img>
          </Link>
          <span>Chevrolet</span>
          <span>Narxi: 329 000 000 so'm</span>
        </div>
      </div>
    </div>
  );
};
