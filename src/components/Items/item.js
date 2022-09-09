import React, { useState } from "react";

import "./item.css";

export const Item = () => {
  const [value, setValue] = useState("outside");
  return (
    <div className="item-container">
      <h1>Modellari</h1>
      <div className="item-content">
        <div className="item-desc">
          <ul className="item-ul">
            <li>
              <h4>Chevrolet Malibu</h4>
            </li>
            <li>
              <img src="/img/models/chevrolet/malib.png"></img>
            </li>
            <li>
              <span>
                <b>Markasi:</b>
              </span>{" "}
              <span>Chevrolet</span>
            </li>
            <li>
              <span>
                <b>Tonirovkasi:</b>
              </span>{" "}
              <span>Yoq</span>
            </li>
            <li>
              <span>
                <b>Motor:</b>
              </span>{" "}
              <span>1.6</span>
            </li>
            <li>
              <span>
                <b>Year:</b>
              </span>{" "}
              <span>2016</span>
            </li>
            <li>
              <span>
                <b>Rangi:</b>
              </span>{" "}
              <span>Oq</span>
            </li>
            <li>
              <span>
                <b>Distance:</b>
              </span>{" "}
              <span>3000 km</span>
            </li>
            <li>
              <span>
                <b>Gearbok:</b>
              </span>{" "}
              <span>Avtomat Karobka</span>
            </li>
            <li>
              <span>
                <b>Description:</b>
              </span>{" "}
              <span>
                Deseription: Mishina ideal holatda krasska top toza 100tali.
                Ayol kishiniki judayam akuratno haydalgan.{" "}
              </span>
            </li>
          </ul>
          <div className="desc-footer">
            <span>
              <b>Umumiy xarajat:</b> 329 000 000 so`mdan
            </span>
          </div>
        </div>
        <div className="item-image">
          <div className="image-header">
            <h3>Chevrolet</h3>
            <div className="image-header-right">
              <img src="/img/icons/archa.png" alt="archa"></img>
              <img src="/img/icons/vector.png" alt="archa"></img>
            </div>
          </div>
          <div className="image-content">
            {value === "outside" ? (
              <div className="outside">
                <div className="outside-images">
                  <img src="/img/outside/outside.png" alt="out" />
                </div>
                <div className="s360">
                  <img src="/img/icons/360.png" alt="360" />
                </div>
                <span className="out-text">
                  Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin.
                  Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi
                  mumkin.
                </span>
              </div>
            ) : (
              <div className="inside">
                <div className="inside-images">
                  <img src="/img/inside/inside.png" alt="out" />
                </div>
                <div className="s360">
                  <img src="/img/icons/360.png" alt="360" />
                </div>
                <span className="out-text">
                  Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin.
                  Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi
                  mumkin.
                </span>
              </div>
            )}
          </div>
          <div className="image-radio">
            <div>
              <input
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                selected
                onClick={() => {
                  setValue("outside");
                  console.log(value);
                }}
              />
              <label htmlFor="huey">Tashqi</label>
            </div>

            <div>
              <input
                type="radio"
                id="dewey"
                name="drone"
                value="dewey"
                onClick={() => {
                  setValue("inside");
                  console.log(value);
                }}
              />
              <label htmlFor="dewey">Ichki</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
