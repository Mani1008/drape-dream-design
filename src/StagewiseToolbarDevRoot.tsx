
import React from 'react';
import { createRoot } from 'react-dom/client';

const stagewiseConfig = {
  plugins: []
};

export function mountStagewiseToolbar() {
  if (process.env.NODE_ENV === 'development') {
    // Only try to load the toolbar if the package is available
    try {
      import('@stagewise/toolbar-react').then((module) => {
        const { StagewiseToolbar } = module;
        let toolbarRoot = document.getElementById('stagewise-toolbar-root');
        if (!toolbarRoot) {
          toolbarRoot = document.createElement('div');
          toolbarRoot.id = 'stagewise-toolbar-root';
          document.body.appendChild(toolbarRoot);
        }
        createRoot(toolbarRoot).render(
          React.createElement(StagewiseToolbar, { config: stagewiseConfig })
        );
      }).catch((error) => {
        console.log('Stagewise toolbar not available:', error.message);
      });
    } catch (error) {
      console.log('Stagewise toolbar not available:', error);
    }
  }
}
