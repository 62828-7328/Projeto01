import { useState, useEffect } from "react";
import axios from 'axios';
import Card from "../CardHome/CardHome";
import "./GridCardsHome.css";

const GridCards = () => {
  return (
    <div className="containerCards"> 
      <div className="grid">
        <div className="primeiraLinha">
        <Card
              title={"Mateus EB"}
              value={"cursando analise e desenvolvimento de sistemas"}
              info={"Eu estou no primeiro semestre, na faculdade fasipe aquarela, e estou desenvolvendo muito conhecimento"}
            ></Card>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
