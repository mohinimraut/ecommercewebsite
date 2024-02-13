import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions';

function Signup() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const auth = useSelector(state => state.auth)
  //here reducer name is user
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  const userSignup = (e) => {
    e.preventDefault();
    const user = {
      firstName, lastName, email, password
    }
    dispatch(signup(user));
  }

  if (auth.authenticate) {
    return <Redirect to={`/`} />
  }
  if(user.loading){
    return <p>Loading...!</p>
  }

  return (
    <Layout>
      <Container>
        {user.message}
        <Row  style={{ marginTop: '100px',}}>
        <Col style={{border:"1px solid #3B3E79",padding:"40px",borderRadius:"10px"}} md={{ span: 6, offset: 3 }}>

            <Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value={firstName}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value={lastName}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />


<Button style={{background:"#3B3E79",marginTop:"5px"}} type="submit">
               SIGNUP
              </Button>
            </Form>
          </Col>
        </Row>

      </Container>
    </Layout>
  )
}

export default Signup