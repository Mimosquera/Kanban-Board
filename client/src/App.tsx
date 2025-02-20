import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Board from './pages/Board';
import CreateTicket from './pages/CreateTicket';
import EditTicket from './pages/EditTicket';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/' element={<Board />} />
              <Route path='/create' element={<CreateTicket />} />
              <Route path='/edit' element={<EditTicket />} />
            </Route>
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;