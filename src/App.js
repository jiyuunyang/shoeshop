// eslint-disable
import React, {useState} from 'react';
import logo from './logo.svg';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './App.css';
import data from './data.js';
import Goods from './Goods.js';
import Detail from './Detail.js';
import Jumbo from './Jumbo.js'
import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom';



function App() {

    const [shoes, shoesChange] = useState(data);
    const [stock, stockChange] = useState([10, 11, 12])

    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>ShoeShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                {/* Switch : 중복 매칭을 허용하지 않음 */}
            <Route exact path="/">
                <Jumbo/>
                <div className="container">
                <div className="row">
                    {
                      shoes.map((el, i) => { 
                        return <Goods item={el} key={i}/>
                      })
                    }
                </div>
                {/* <button className="btn btn-primary" onClick={()=>{
                    axios.post('서버url',{ id: 'coddingapple', pw: 1234}) //쿠키, 헤더 설정하는 것도 가능
                }}>서버로 정보 전달</button> */}
                <button className="btn btn-primary" onClick={() => {
                    //로딩 중 ui 띄우기
                    //axios는 json을 object로 자동으로 바꿔줌
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result)=>{
                        //로딩중 ui 안보이게 처리
                        shoesChange((cur)=>[...cur, ...result.data]);
                    })
                    .catch(()=>{
                        //로딩중 ui 안보이게 처리
                        console.log('실패')
                    })
                }}>더보기</button>
            </div>
            
            </Route>
            <Route path="/detail/:id">
            <Detail shoes={shoes} stock={stock} stockChange={stockChange}/>
            </Route>
            {/* <Route path="/component" component={Modal}></Route> */}
            </Switch>
        </div>
    );
}

export default App;
