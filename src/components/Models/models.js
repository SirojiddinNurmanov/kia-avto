import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getReaquest, _Authorization } from "../utils/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { getModels } from "../store/models/model-action";

import "./model.css";
const Models = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getReaquest(
      "https://cartestwebapp.herokuapp.com/category/marka?limit=5&page=1",
      _Authorization
    ).then((data) => {
      dispatch(getModels(data));
    });
  }, []);

  // const Models = useSelector(selectData);

  return (
    <div className="models">
      <div className="paths">
        <span onClick={() => navigate("/")}>Bosh Sahifa</span>{" "}
        <span>
          <img src="img/icons/path.png" alt="path" />
        </span>{" "}
        <span onClick={() => navigate("/")}>Modellar</span>
      </div>
      <h1>Modellari</h1>
      <div className="automobiles">
        <div className="automobile">
          <Link to="/Modellar/ChevroletTurlari">
            <img src="img/models/chevrolet.png" alt="auto"></img>
            <span>Chevrolet</span>
          </Link>
        </div>
        <div className="automobile">
          <Link to="/Modellar/LadaTurlari">
            <img src="img/models/lada.png" alt="auto"></img>
            <span>Ladas</span>
          </Link>
        </div>
        <div className="automobile">
          <Link to="/Modellar/LamborghiniTurlari">
            <img src="img/models/lamborghini.png" alt="auto"></img>
            <span>Lamborghini</span>
          </Link>
        </div>
        <div className="automobile">
          <Link to="/Modellar/FerrariTurlari">
            <img src="img/models/ferari.png" alt="auto"></img>
            <span>Ferrari</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Models;
