import React from 'react';
import styled from 'styled-components'

function KeysContainer() {
    return (
            <Container>
                <Key className="trigonometric">sin</Key>
                <Key className="trigonometric">cos</Key>
                <Key className="trigonometric">tg</Key>
                <Key className="operation">(</Key>
                <Key className="operation">)</Key>
                <Key className="operation">␡</Key>

                <Key className="trigonometric">arcsin</Key>
                <Key className="trigonometric">arccos</Key>
                <Key className="trigonometric">arctg</Key>
                <Key className="advanced">log</Key>
                <Key className="advanced">eˣ</Key>
                <Key className="basic">%</Key>

                <Key className="number">1</Key>
                <Key className="number">2</Key>
                <Key className="number">3</Key>
                <Key className="basic">+</Key>
                <Key className="basic">−</Key>
                <Key className="basic">×</Key>

                <Key className="number">4</Key>
                <Key className="number">5</Key>
                <Key className="number">6</Key>
                <Key className="basic">÷</Key>
                <Key className="basic">√</Key>
                <Key className="basic">x²</Key>

                <Key className="number">7</Key>
                <Key className="number">8</Key>
                <Key className="number">9</Key>
                <Key className="number">0</Key>
                <Key className="basic">,</Key>
                <Key className="basic"> = </Key>

            </Container>
    );
  }

  const Container = styled.div`
  height:540px;
  box-sizing:border-box;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;`

  const Key = styled.div`
  font-size:35px;
  display:block;
  width:70px;
  height:80px;
  color:#e3e3e3;
  border-radius:10px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#00000050;
  margin:5px;
  cursor:pointer;
  `

  export default KeysContainer;