import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import './index.css';
import App from './App';




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
