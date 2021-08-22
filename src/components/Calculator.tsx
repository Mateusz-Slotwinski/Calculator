import React from 'react';
import styled from 'styled-components'
import KeysContainer from './keys/KeysContainer'

function Calculator() {
    return (
        <Outline>
            <Screen></Screen>
            <KeysContainer/>
        </Outline>
    );
  }

  const Outline = styled.div`
  width:540px;
  height:780px;
  border:5px solid white;
  border-radius:35px;
  padding:10px;
  display:flex;
  flex-direction:column;`

  const Screen = styled.div`
  margin:10px;
  flex-grow:1;
  box-sizing:border-box;
  border:5px solid white;
  border-radius:15px;`

export default Calculator;
