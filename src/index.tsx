import ReactDOM from 'react-dom';
import Login from './Login';
import CallPage from './CallPage';
import App from './App';
import Dashboard from './components/Dashboard';

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/callpage" element={<CallPage />} />
      <Route path="/" element={<Login />} />
      <Route path="/app" element={<App />}>
        <Route path="/app" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
