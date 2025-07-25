import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Home from './Pages/Home.jsx';
import Layout from './Layout.jsx';
import Form from './Pages/Form.jsx';
import Contact from './Pages/Contact.jsx';
import Docs from './Pages/Docs.jsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { FormContextProvider } from './Context/Context.jsx';
import { ApiContextProvider } from './Context/ApiContext';
import Result from './Pages/Result.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/footer" element={<Contact />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/topicresult" element={<Result/>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <FormContextProvider>
  <ApiContextProvider>
    <RouterProvider router={router} />
  </ApiContextProvider>
</FormContextProvider>
  </StrictMode>
);
