import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import Homescreen from './screens/Homescreen'


function App() {
  return (
    <div>
      <Header />
      <main>
        <Container className="py-5">
          <Homescreen />
      </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
