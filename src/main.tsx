import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import { Provider } from 'react-redux';
import store from './components/store/store';

const rootElement = document.getElementById('root') as HTMLDivElement; 
if (rootElement) { 
  const root = createRoot(rootElement);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  alert("Error! Can't open website");
  console.error("Error! Can't open website"); 
}