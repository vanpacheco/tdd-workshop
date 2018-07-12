import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);              // 1. Renderizar el componente y 2. Revisar el DOM resultante
  ReactDOM.unmountComponentAtNode(div);
});
