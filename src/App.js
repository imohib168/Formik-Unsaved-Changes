import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfileForm from './pages/ProfileForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile-form' element={<ProfileForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
