import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font};
  }

  html, body {
    width: 100%;
    height: 100%;
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
   
  }

  #root {
    display: flex;
    flex-direction:column;
    min-height: 100%;
    color:  ${({ theme }) => theme.textColor};;
    background-color: ${({ theme }) => theme.bodyBg};
  }

  ul, ol, li {
    list-style: none;
  }
  
  a {text-decoration: none;}

  @media screen and (max-width: 1665px) {
  html {
    font-size: 53%;
    } 
  }


  @media screen and (max-width: 1200px) {
  html {
    font-size: 46%;
    } 
  }

  @media screen and (max-width: 992px) {
  html {
    font-size: 42%;
    } 
  }

  @media screen and (max-width: 768px) {
  html {
    font-size: 34%;
    } 
  }

  @media screen and (max-width: 550px) {
  html {
    font-size: 22%;
    } 
  }
`
