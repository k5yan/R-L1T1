import logo from './logo.svg';
import './App.css';
import React from 'react';
export function App() {
	return React.createElement(
		`div`,
		{
			className: 'App',
		},
		React.createElement(
			`header`,
			{
				className: 'App-header',
			},
			React.createElement(`img`, {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			React.createElement(
				'p',
				{},
				'Edit ',
				React.createElement('code', {}, 'src/App.js'),
				' and save to reload',
			),
			React.createElement(
				`a`,
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				`Learn React`,
			),
			React.createElement(`p`, {}, `${new Date().getFullYear()}`),
		),
	);
	// return (
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<img src={logo} className="App-logo" alt="logo" />
	// 			<p>
	// 				Edit <code>src/App.js</code> and save to reload.
	// 			</p>
	// 			<a
	// 				className="App-link"
	// 				href="https://reactjs.org"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				Learn React
	// 			</a>
	// 			<p>{new Date().getFullYear()}</p>
	// 		</header>
	// 	</div>
	// );
}
