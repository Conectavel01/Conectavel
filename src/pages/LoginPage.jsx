import React from "react";
import styled from "styled-components";
import logo_conectavel from "../assets/logo_conectavel.svg";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import Google_logo from "../assets/Google_logo.svg";
import { ButtonLogin } from "../components/ButtonLogin";
import Facebook_logo from "../assets/Facebook_logo.svg";
import Arrow_button from "../assets/Arrow_button.svg";

const ContainerDiv = styled.div`
  background-color: var(--azul_principal);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
// Div do lado Esquerdo com a logo.
const LogoDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    & {
      display: none;
    }
  }
  @media (max-width: 1100px) {
    img {
      width: 300px;
    }
  }
`;
// Div do lado Direito com as informaçoes de login/cadastro.
const FormDiv = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 0px 100px;
  min-height: 100vh;

  .form-container {
    padding: 0% 10% 10% 10%;
    max-width: 700px;
    margin: 0 auto;
  }

  h2 {
    color: var(--laranja);
    text-align: center;
    font-size: 75px;
    margin-bottom: 40px;
  }
  .justify-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
  }
  a {
    color: var(--azul_secundario);
    text-decoration: none;
  }
  .ckeckbox-input {
    margin: 5px;
    text-align: center;
  }

  .center-text {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 5px;
  }
// Estilização botão Arrow

  .arrow_button {
    cursor: pointer;
    width: 50px;
    height: 50px;
    padding: 0;
    border: none;
    background: url() no-repeat center center;
    background-size: cover;
    outline: none;
    margin-top: 48px;
    margin-left: 30px;
  }
  //Responsividade da tela de  login.
  @media (max-width: 992px) {
    & {
      border-radius: unset;
      position: relative;
    }
    .arrow_button {
      position: absolute;
    }
    .form-container {
      padding: 10%;
    }
    .justify-between {
      flex-direction: column;
      gap: 8px;
    }
  }
  @media (max-width: 1100px) {
    h2 {
      font-size: 62px;
    }
  }
  @media (max-width: 682px) {
    h2 {
      font-size: 48px;
      margin-bottom: 12px;
    }
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`;

const LoginPage = () => {
  return (
    <ContainerDiv>
      <LogoDiv>
        <div>
          <img src={logo_conectavel} alt="Logo e Slogan" />
        </div>
      </LogoDiv>

      <FormDiv>
        <button className="arrow_button">
          <img src={Arrow_button} alt="Botão Voltar" />
        </button>

        <div className="form-container">
          <h2>Entrar</h2>
          <form action="">
            <Input
              name="email"
              label="E-mail"
              placeholder="Digite seu e-mail aqui"
              type="email"
            />
            <Input
              name="senha"
              label="Senha"
              placeholder="Digite sua senha aqui"
              type="password"
            />
            <div className="justify-between">
              <div>
                <input className="ckeckbox-input" type="checkbox" name="" />
                <label htmlFor="">Lembrar senha</label>
              </div>
              <a href="http://">Esqueceu sua senha?</a>
            </div>
            <Button>Entrar</Button>
          </form>
          <div className="center-text">
            <span>
              Não tem uma conta?&nbsp;
              <StyledLink to="/Cadastro">Cadastre-se</StyledLink>
            </span>
            <br />
            <span
              style={{ fontSize: "30px", display: "block", marginTop: "20px" }}
            >
              Ou
            </span>
          </div>
          <div style={{ display: "flex", gap: "28px" }}>
            <ButtonLogin>
              <img src={Google_logo} alt="Google Icon" />
              <span>Entrar com Google</span>
            </ButtonLogin>
            <ButtonLogin>
              <img src={Facebook_logo} alt="Facebook Icon" />
              <span>Entrar com Facebook</span>
            </ButtonLogin>
          </div>
        </div>
      </FormDiv>
    </ContainerDiv>
  );
};

export default LoginPage;
