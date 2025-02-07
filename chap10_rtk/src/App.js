import { Route, Routes } from 'react-router-dom';

import Layout from '@components/Layout';
import CountStore from '@pages/Count';
import TodoStore from '@pages/TodoList';

import ContactList from './pages/ContactList';
import Contact from './pages/Contact';
import UpdateContact from './pages/UpdateContact';
import AddContact from './pages/AddContact';
import { useSelector } from 'react-redux';

function App() {
  const title = 'react';
  const { count } = useSelector(store => store.countStore)

  return (
    <div className="m-3">
      <h1>{title.toUpperCase()}: {count}</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CountStore />}></Route>
          <Route path="/todoList" element={<TodoStore />}></Route>

          <Route path="/contactList" element={<ContactList />}></Route>
          <Route path="/contact/:no" element={<Contact />}></Route>
          <Route path="/update" element={<UpdateContact />}></Route>
          <Route path="/add" element={<AddContact />}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
