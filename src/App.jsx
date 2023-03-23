import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Trainers from './pages/trainers/Trainers';
import Gallery from './pages/gallery/Gallery';
import Plans from './pages/plans/Plans';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="plans" element={<Plans />} />
          <Route path="trainers" element={<Trainers />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
