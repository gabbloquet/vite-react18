import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

const rootContainer = document.getElementById('app')!;
const root = createRoot(rootContainer);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
