import  {Login,Home}  from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';

function App(props) {

  useEffect(()=>{
    props.getUserAuth();
  },[]);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/home'element={<Home/>}/>
            
          
        </Routes>
      </Router>
    </div>
  );
}


const mapStateToProps = (state)=>{
  return {};
};

const mapDispatchToProps = (dispatch) =>({
  getUserAuth:() => dispatch(getUserAuth())
})



export default connect(mapStateToProps,mapDispatchToProps)(App);
