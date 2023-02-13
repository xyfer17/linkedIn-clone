import React from 'react'
import styled from "styled-components";
import Header from './Header';
import LeftSide from './LeftSide';
import Main from './Main';
import RightSide from './RightSide';

const Home = (props) => {
  return (
    <div>
      <Header />
      <Container>
        <Content>
          <Section>
            <h5><a href='/'>Hiring in a Hurry? --</a></h5>
            <p>Find Talendted Pros in record time with Upwork</p>
          </Section>
          <Layout>
            <LeftSide />
            <Main />
            <RightSide />
          </Layout>
        </Content>
          

        




      </Container>
    </div>
  )
}

const Layout = styled.div`
display: grid;
grid-template-areas: "leftside main rightside";
grid-template-columns:minmax(0, 5fr) minmax(0,12fr) minmax(300px,7fr);
column-gap:25px;
row-gap:25px;
margin:25px 0;

@media (max-width:768px) {
  display:flex;
  flex-direction:column;
  padding: 0 5px;
}
`

const Container = styled.div`
  padding-top:52px;
  max-width:100%;
`
const Section = styled.section`
  min-height:50px;
  padding:12px 0;
  box-sizing:content-box;
  text-align:center;
  text-decoration:underline;
  display:flex;
  justify-content:center;
  h5{
     color:#0a66c2;
     font-size:14px;
     a{
      font-weight:700;
     }
  }

  p{
    font-size:14px;
    color:#434649;
    font-weight:600;
  }

  @media (max-width:786px) {
      flex-direction:column;
      padding:0 5px;
    
  }
`
const Content = styled.div`
    max-width:1128px;
    margin-left:auto;
    margin-right:auto;
`

export default Home
