import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import "./Recipe.css";

function Recipe({ setDataa, dataa, search }) {
  const HendilClick = (cell) => {
    const deletData = dataa.filter((item) => {
      return item.cell !== cell;
    });
    setDataa(deletData);
  };

  return (
    <Fragment>
      <ul id="user" className="user">
        {dataa &&
          dataa
            .filter((item) => {
              const text = `${item.name.title} ${item.name.last} ${item.name.first} `;
              console.log(text);
              console.log(search);
              return text.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => {
              const { gender, name, picture, location, dob, cell } = item;
              return (
                <Fragment key={cell}>
                  <li className="user__item">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        HendilClick(cell);
                      }}
                      id="delete__btn"
                      className="user__delete--btn"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                    <img
                      className="user__img"
                      alt="User photo"
                      src={picture.large}
                      width="100"
                      height="100"
                    />
                    <div className="user__name">
                      <span className="material-symbols-outlined">badge</span>
                      <span>
                        - {`${name.title} ${name.last} ${name.first}`}
                      </span>
                    </div>
                    <div className="user__year">
                      <span className="material-symbols-outlined">cake</span>
                      <span>- {dob.age} years old.</span>
                    </div>
                    <div className="user__location">
                      <span className="material-symbols-outlined">
                        person_pin_circle
                      </span>
                      <span>
                        - {location.city}, {location.country}
                      </span>
                    </div>
                    <div className="user__gender">
                      <span className="material-symbols-outlined">man</span>
                      <span>- {gender}</span>
                    </div>
                  </li>
                </Fragment>
              );
            })}
      </ul>
    </Fragment>
  );
}

export default Recipe;
