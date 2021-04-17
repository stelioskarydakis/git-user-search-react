import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper>
      <h4>WELCOME TO GITHUB USER SEARCH BY STELIOS</h4>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: block;

  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
`

export default Navbar
