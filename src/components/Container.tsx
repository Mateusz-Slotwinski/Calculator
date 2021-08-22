import React from 'react';
import styled from 'styled-components'
import Calculator from './Calculator';

function Container() {
    return (
        <Background>
          <Calculator />
        </Background>
    );
  }

const Background = styled.div`
width:100vw;
height:100vh;
background: rgb(224,97,45);
background: linear-gradient(117deg, rgba(224,97,45,1) 0%, rgba(221,165,42,1) 42%, rgba(0,212,255,1) 100%);
display:flex;
justify-content:center;
align-items:center;`

export default Container;
