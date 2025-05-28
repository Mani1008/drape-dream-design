import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if (import.meta.env.MODE === 'development') {
  import('./StagewiseToolbarDevRoot').then(mod => {
    mod.mountStagewiseToolbar();
  });
}

createRoot(document.getElementById("root")!).render(<App />);
