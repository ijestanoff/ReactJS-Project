import { Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

import About from './components/about/About';
import Catalog from './components/catalog/Catalog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Pricing from './components/pricing/Pricing';
import Schedule from './components/schedule/Schedule';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import PrivateGuard from './components/common/PrivateGuard';
import ArtistDetails from './components/artistDetails/ArtistDetails';
import ArtistEdit from './components/artistEdit/ArtistEdit';
import Festival from './components/festival/Festival';
import ArtistCreate from './components/artistCreate/ArtistCreate';

function App() {
    return (
        <AuthContextProvider>
            <Header />

            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/schedule' element={<Schedule />} />
                    <Route path='/pricing' element={<Pricing />} />
                    <Route path='/catalog/:artistId/details' element={<ArtistDetails />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route element={<PrivateGuard />}>
                        <Route path='/festival' element={<Festival />} />
                        <Route path='/create' element={<ArtistCreate />} />
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