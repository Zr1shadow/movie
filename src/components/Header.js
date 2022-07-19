import React from 'react'
import styled from 'styled-components'
import MovieForm from "./MovieForm"

const NavBar = styled.div`
    display: flex;
    max-height: 150px;
    align-items: center;
    justify-content: space-between;
    background-color: #2b2d42;
    color: #EDF2F4;
    width:100%;
`
const Logo = styled.div`
    font-size: 24px;
    flex:1;
`

const NavBarLinks= styled.div`
    flex:1;
    ul{
        display: flex;
        justify-content: space-evenly;
        list-style: none;
        a{
        color: #EDF2F4;
        text-decoration: none;
    }
    }
`
const Header = ({setMovieName}) => {
  return (
    <NavBar>
        <Logo> &lt;Raul&gt; </Logo>

        <NavBarLinks>
            <ul>
                <li><a href="#">Test</a></li>
                <li><a href="#">Test</a></li>
                <li><a href="#">About Us</a></li>
                <li><MovieForm setMovieName={setMovieName}/></li>
            </ul>
            
        </NavBarLinks>
            
        
    </NavBar>
  )
}

export default Header