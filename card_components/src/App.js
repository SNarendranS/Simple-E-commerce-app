import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './components/Card';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CartDetails } from './components/cartDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function App() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  let cartP = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <BrowserRouter>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/products">
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to="/cart">
                  Cart ({cartP.length})
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="mt-4">
          <Routes>
            <Route
              path="/products"
              element={
                <div className="row row-cols-1 row-cols-md-4 g-4">
                  {products.map((product) => (
                    <div key={product.id} className="col">
                      <Card data={product} />
                    </div>
                  ))}
                </div>
              }
            />
            <Route
              path="/cart"
              element={
                <div className="row row-cols-1 row-cols-md-4 g-4">
                  {cartP.map((product) => (
                    <div key={product.id} className="col">
                      <CartDetails data={product} />
                    </div>
                  ))}
                </div>
              }
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
