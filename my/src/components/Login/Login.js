import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Strem from './Strem'
import Strem2 from './Strem2';
import Strem3 from './Strem3';
import Strem4 from './Strem4';
import Strem5 from './Strem5';
import Strem6 from './Strem6'

const Login = () => {
  return (
    <>
      <Main>
        <Banner />
        <Strem />
        <Strem3 />
        <Strem4 />
        <Strem5 />
        <Strem2 />
        <Strem6 />
      </Main>
    </>
  )
}

const Main = styled.main`
    width: auto;
    height: auto;
    overflow: auto;
`

export default Login;




