import { Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

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
import Logout from './components/logout/Logout';
import Create from './components/create/Create';
import PrivateGuard from './components/common/PrivateGuard';
import ArtistDetails from './components/artistDetails/ArtistDetails';

function App() {
    return (
        <AuthContextProvider>
            <main>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/schedule' element={<Schedule />} />
                    <Route path='/pricing' element={<Pricing />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/catalog/:artistId/details' element={<ArtistDetails />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route element={<PrivateGuard />}>
                        <Route path='/create' element={<Create />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/catalog/:artistId/edit' element={<ArtistEdit />} />
                    </Route>
                </Routes>
            </main>

            <Footer />
        </AuthContextProvider >
    );
}

export default App;