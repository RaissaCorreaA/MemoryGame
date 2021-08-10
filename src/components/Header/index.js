import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";

const Header = ({ moves, handleRestart }) => {
  return (
    <div>
      <h1> スタジオジブリ - Studio Ghibli</h1>
      <h3>Jogo da Memória</h3>
      <Container>
        <div className="sub-header">
          <div className="moves">
            <span>Tentativas: </span>
            {moves}
          </div>
          <div className="reshuffle">
            <button onClick={handleRestart}></button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
