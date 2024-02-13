import React,{useEffect} from 'react';
import Layout from '../../components/Layout';
import { Col,Container,Row} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../components/Layout/style.css';
import {NavLink} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';

// import Jumbotron from 'react-bootstrap/Jumbotron';

// import Jumbotron from 'Jumbotron';
const Home =(props)=>
 {
 
  return (
    <Layout sidebar>
 Home
       {/* <div style={{margin:'10px',marginTop:'0px',background:'#f3f3f3',padding:'10px'}}>
       
        <h1 style={{textAlign:'center'}}>Welcome to Admin Dashboard</h1>
        <p style={{textAlign:'center',margin:'10px',lineHeight:'30px'}}>
        t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>
        </div> */}


        {/* <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
          <ul>
            <li><NavLink to={`/`}>Home</NavLink></li>
            <li><NavLink to={`/products`}>Products</NavLink></li>
            <li><NavLink to={`/orders`}>Orders</NavLink></li>

          </ul>
          </Col>
          <Col md={10} style={{marginLeft:'auto'}}>Container</Col>
        </Row>
        </Container> */}

    </Layout>
  )
}

export default Home
