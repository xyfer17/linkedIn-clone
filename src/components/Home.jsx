import React from 'react'
import styled from "styled-components";
import Header from './Header';

const Home = (props) => {
  return (
    <div>
        <Header/>
        <Container>
          <Section>
            <h5><a href='/'>Hiring in a Hurry? --</a></h5>
          </Section>
        </Container>
    </div>
  )
}


const  Container = styled.div``
const  Section = styled.section``

export default Home
