import React from "react";
import styled from "styled-components";
import { FaStar, FaRegStar } from "react-icons/fa";
import icon_eletrodomestico from "../assets/icon_eletrodomestico.svg";
import iconManuten from "../assets/iconManuten.svg";
import iconReparo from "../assets/iconReparo.svg";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 250px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.8s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    border-color: var(--azul_secundario);
    transform: scale(1.03);
    /* box-shadow: 0px 1px 10px var(--azul_secundario); */
  }
  .perfil_button {
    background-color: var(--azul_principal);
    padding: 8px;
    border-radius: 8px;
    border: none;
    color: #ffffff;
    font-size: 14px;
  }
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const Name = styled.h3`
  /* font-size: 2rem; */
  margin-bottom: 10px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Avaliacoes = styled.span`
  font-size: 0.9rem;
  margin-left: 5px;
  color: var(--azul_secundario);
`;

const CardMenu = ({ foto, nome, descricao, avaliacoes }) => {
  const renderStars = () => {
    const totalStars = 5;
    const starsFilled = Math.round((avaliacoes / 5) * totalStars);
    const starsArray = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < starsFilled) {
        starsArray.push(<FaStar key={i} color="gold" />);
      } else {
        starsArray.push(<FaRegStar key={i} color="gold" />);
      }
    }

    return starsArray;
  };

  return (
    <Card>
      <Name>{nome}</Name>
      <ProfileImage src={foto} alt={nome} />

      <Stars>
        {renderStars()}
        <Avaliacoes>{avaliacoes}</Avaliacoes>
      </Stars>
      {/* <Description>{descricao}</Description> */}
      <div>
        {" "}
        <p className="titulo">
          Manutenção de eletrodomésticos
        </p>
        <p className="titulo">
          Manutenção de vídeo games
        </p>
        <p className="titulo">
          Manutenção de televisores
        </p>
      </div>

      <button className="perfil_button">Ver perfil</button>
    </Card>
  );
};

export default CardMenu;
