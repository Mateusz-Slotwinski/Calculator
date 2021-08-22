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
background: rgb(9,24,31);
background: linear-gradient(145deg, rgba(9,24,31,1) 0%, rgba(9,54,64,1) 35%, rgba(13,65,47,1) 100%);
display:flex;
justify-content:center;
align-items:center;`

export default Container;
