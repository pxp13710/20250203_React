import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout'

import Home from './pages/Home'
import Axios from './pages/Axios'
import GetContactList from './pages/ContactList'
import GetContact from './pages/Contact'
import AddContact from './pages/AddContact'
import UpdateContact from './pages/UpdateContact'

// npm i react-router-dom axios
function App() {
  return (
    <div className="m-3">
      <h1>Chap07 Axios</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/axios" element={<Axios />} />
          <Route path="/contactList" element={<GetContactList />} />
          <Route path="/contact" element={<GetContact />} />
          <Route path="/addContact" element={<AddContact />} />
          <Route path="/updateContact" element={<UpdateContact />} />
          <Route path="*" element={<h3>Not Found</h3>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

