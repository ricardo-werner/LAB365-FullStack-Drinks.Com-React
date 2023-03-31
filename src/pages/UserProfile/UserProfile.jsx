import React from "react";
import { useState } from "react";
import { Orders } from "../../components/Orders/Orders";

export const UserProfile = () => {
  const [pessoa, setPessoa] = useState({
    nome: "Ricardo Werner",
    gihub: "https://avatars.githubusercontent.com/u/105825127?v=4",
  });

  return (
    <div className="profile__container">
      <div className="profile__header">
        <div className="profile__image-container">
          <img src="https://avatars.githubusercontent.com/u/105825127?v=4" alt="Ricardo" style={{borderRadius:5}}/>
        </div>
        <div className="profile__user-data">
          <p>bem vindo de volta,</p>
          <h1 className="profile__name">{pessoa.nome}</h1>
        </div>
      </div>
      <div className="profile__body">
        <Orders />
      </div>
    </div>
  );
};
