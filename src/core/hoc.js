// Higher Order Component (HOC) - A Component that renders another component
// Reuse code
// Render Hijacking
// Prop manipulation
// Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);

const withAdminWarning = WrappedComponent => {
	return props => (
		<div>
			{props.isAdmin && <p>This is private info. Please don't share!</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuthentication = WrappedComponent => {
	return props => (
		<div>
			{props.isAuthenticated ? (
				<WrappedComponent {...props} />
			) : (
				<p>You don't have the privilegies to access this content</p>
			)}
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
	<AuthInfo isAuthenticated={false} info='These are the details' />,
	document.querySelector('#app')
);
