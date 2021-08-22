import React from 'react';
import styled from 'styled-components'

function Calculator() {
    return (
        <Outline>
            <Screen>
            </Screen>
            <KeysContainer>
                <Key>1</Key>
                <Key>1</Key>
                <Key>1</Key>
            </KeysContainer>
        </Outline>
    );
  }

  const Outline = styled.div`
  width:600px;
  height:800px;
  border:5px solid white;
  border-radius:35px;
  padding:10px;
  display:flex;
  flex-direction:column;`

  const KeysContainer = styled.div`
  margin:10px;
  flex-grow:3;
  box-sizing:border-box;
  border:5px solid white;
  border-radius:15px;
  padding:10px;
  display:flex;
  flex-wrap:wrap;`

  const Screen = styled.div`
  margin:10px;
  flex-grow:1;
  box-sizing:border-box;
  border:5px solid white;
  border-radius:15px;`

  const Key = styled.div`
  font-size:40px;
  display:block;
  width:80px;
  height:100px;
  color:#e3e3e3;
  border-radius:10px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#00000050;
  `

export default Calculator;
