import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../sidebar";
import { useDispatch, useSelector } from "react-redux";
import { postReaquest, getReaquest, _Authorization } from "../utils/fetchData";
import { getData } from "../store/auth/auth-action";
import { selectData } from "../store/auth/auth-selector";
import { useNavigate } from "react-router-dom";

import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getReaquest("https://cartestwebapp.herokuapp.com/car?limit=5&page=1").then(
      (data) => {
        dispatch(getData(data));
      }
    );
  }, []);

  const data = useSelector(selectData);
  console.log(data);

  const dataNumber = data && data.total;
  console.log(dataNumber, "xx");
  const totalArr = [];
  for (let i = 5; i <= dataNumber; i = i + 5) {
    if (dataNumber % 5 === 0) {
      totalArr.push(i / 5);
    } else {
      totalArr.push((i + 5) / 5);
    }
  }

  console.log(totalArr);

  const [page, setPage] = useState(1);
  const [num, setNum] = useState(page);
  const [show, setShow] = useState(false);
  const [marka, setMarka] = useState("");
  const [motor, setMotor] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState();
  const [gearbok, setGearbook] = useState("");
  const [imageinside, setImageinside] = useState("");
  const [tonirov, setTonirov] = useState("");
  const [distance, setDistance] = useState("");
  const [cost, setCost] = useState();
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [imageoutside, setImageoutside] = useState("");

  useEffect(() => {
    getReaquest(
      `https://cartestwebapp.herokuapp.com/car?limit=5&page=${page}`
    ).then((data) => {
      dispatch(getData(data));
    });
    setNum(page);
  }, [page]);

  const body = {
    imgUrl: "img-a64a93be58b928fddea2eb88cf3b23aa.jpg",
    imgUrlInside: "img-db607b3fdb99095051f37c849887ace7.jpg",
    imgUrlAutside: "img-9c3a72917ef084370f9130349ed33445.jpg",
    price: +cost,
    year: +year,
    description: desc,
    tonirovka: tonirov,
    motor,
    color,
    distance,
    gearbok,
    categoryId: "631810ae7ff943f201d4ca7c",
  };
  const url = "https://cartestwebapp.herokuapp.com/car";
  function addCar() {
    const request = postReaquest(url, body, _Authorization);
    console.log(request);
  }
  return (
    <div className="wrap">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="home-page">
          {show ? (
            <div className="modal-container">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="auto-lay">
                    <div className="auto-column-2"></div>
                    <h3>Mashinalar</h3>
                  </div>
                  <button onClick={() => setShow(false)}>
                    <img src="img/icons/close.png" alt="close" />
                  </button>
                </div>
                <div className="modal-content-2">
                  <div className="modal-right">
                    <div className="modal-element">
                      <label htmlFor="marka">Markasi:</label>
                      <select
                        type="text"
                        id="marka"
                        className="modal-input"
                        value="Chevrolet"
                        onChange={(e) => setMarka(e.target.value)}
                      >
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Lada">Lada</option>
                        <option value="Lamborghini">Lamborghini</option>
                        <option value="Ferrari">Ferrari</option>
                      </select>
                    </div>

                    <div className="modal-element">
                      <label htmlFor="marka">Motor:</label>
                      <input
                        placeholder="Kiriting"
                        type="text"
                        id="marka"
                        className="modal-input"
                        onChange={(e) => setMotor(e.target.value)}
                      />
                    </div>
                    <div className="modal-element">
                      <label htmlFor="marka">Color:</label>
                      <input
                        placeholder="Kiriting"
                        type="text"
                        id="marka"
                        className="modal-input"
                        onChange={(e) => setColor(e.target.value)}
                      />
                    </div>
                    <div className="modal-element">
                      <label htmlFor="marka">GearBook:</label>
                      <input
                        placeholder="Kiriting"
                        type="text"
                        id="marka"
                        className="modal-input"
                        onChange={(e) => setGearbook(e.target.value)}
                      />
                    </div>
                    <div className="modal-element">
                      <label htmlFor="marka">Rasm 360 ichki makon:</label>
                      <input
                        placeholder="Rasm Yuklash"
                        type="file"
                        id="marka"
                        className="modal-input"
                        onChange={(e) => setImageinside(e.target.value)}
                      />
                    </div>
                    <div className="modal-element">
                      <label htmlFor="marka">Markasi:</label>
                      <textarea
                        rows={6}
                        placeholder="Kiriting"
                        type="text"
                        id="marka"
                        className="modal-input"
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal-left">
                    <div className="modal-element">
                      <label htmlFor="marka">Tonirovkasi:</label>
                      <select
                        type="text"
                        id="marka"
                        className="modal-input"
                        value="bor"
                        onChange={(e) => setTonirov(e.target.value)}
                      >
                        <option value="yoq">Yoq</option>
                        <option value="bor">Bor</option>
                      </select>
                    </div>
                    <div className="modal-element">
                      <label htmlFor="marka">Year:</label>
                      <input
                        placeholder="Kiriting"
                        type="text"
                        id="marka"
                        className="modal-input"
                        onChange={(e) => setYear(e.target.value)}
                      />
                    </div>
                    <div className="modal-element">
                      <label htmlFor="marka">Distance:</label>
                      <input
                        placeholder="Kiriting"
                        type="text"
                        id="marka"
                        className="modal-input"
                        onChange={(e) => setDistance(e.target.value)}
                      />
                    </div>
                    <div className="modal-element">
                      <label htmlFor="marka">Narxi:</label>
                      <input
                        placeholder="Kiriting"
                        type="text"
                        id="marka"
                        className="modal-input"
                        onChange={(e) => setCost(e.target.value)}
                      />
                    </div>
                    <div className="modal-element">
                      <label htmlFor="marka">Rasm 360 tashqi makon</label>
                      <input
                        placeholder="Kiriting"
                        type="file"
                        id="marka"
                        className="modal-input"
                        onChange={(e) => setImageoutside(e.target.value)}
                      />
                    </div>
                    <div className="modal-element">
                      <label htmlFor="marka">Model Turi uchun rasm:</label>
                      <input
                        placeholder="Kiriting"
                        type="file"
                        id="marka"
                        className="modal-input"
                        onChange={(e) => setImage(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-btn">
                  <button onClick={addCar} className="auto-btn">
                    Saqlash
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="auto-container">
            <div className="auto-header">
              <div className="auto-lay">
                <div className="auto-column"></div>
                <h3 onClick={() => navigate("/Modellar")}>Mashinalar</h3>
              </div>
              <button onClick={() => setShow(!show)} className="auto-btn">
                {" "}
                + Mashina qo'shish
              </button>
            </div>
            <div className="auto-content">
              <table className="table">
                <thead className="t-header">
                  <tr>
                    <th>#</th>
                    <th>Markasi</th>
                    <th>GearBook</th>
                    <th>Tonirovkasi</th>
                    <th>Motor</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Distance</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="t-body">
                  {data &&
                    data.data.map((item, n) => {
                      return (
                        <tr key={item._id}>
                          <td>{(page - 1) * 5 + 1 + n}</td>
                          <td>{item.marka.name}</td>
                          <td>{item.gearbok}</td>
                          <td>{item.tonirovka}</td>
                          <td>{item.motor}</td>
                          <td>{item.year}</td>
                          <td>{item.color}</td>
                          <td>{item.distance}</td>
                          <th>
                            <img src="img/icons/right-arrow.png" />
                          </th>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="pagination">
              <img
                onClick={() => {
                  page > 1 ? setPage(page - 1) : setPage(page);
                }}
                className="pagination-arrow"
                src="img/icons/arrow.png"
                alt="pag"
              />
              {totalArr.map((item) => (
                <div
                  onClick={() => {
                    setPage(item);
                  }}
                  key={item}
                  className={
                    page === item
                      ? "pagination-arrow active"
                      : "pagination-arrow"
                  }
                >
                  {item}
                </div>
              ))}
              <img
                className="pagination-arrow"
                src="img/icons/right-arrow.png"
                alt="pag"
                onClick={() => {
                  page < totalArr.at(-1) ? setPage(page + 1) : setPage(page);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
