import { Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Catalog from './components/catalog/Catalog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Pricing from './components/pricing/Pricing';
import Schedule from './components/schedule/Schedule';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
    return (
        <>
            <main>
                {/* <header className="site-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12 d-flex flex-wrap">
                                <p className="d-flex me-4 mb-0">
                                    <i className="bi-person custom-icon me-2" />
                                    <strong className="text-dark">Welcome to Sunny Beach Music Festival 2024</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </header> */}


                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/schedule' element={<Schedule />} />
                    <Route path='/pricing' element={<Pricing />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>

            </main>

            <Footer />
        </>
    );
}

export default App;