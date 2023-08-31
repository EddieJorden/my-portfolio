import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import { navItems } from './navItems';

const RouteRenderer = () => {
	if (!navItems || navItems.length === 0) {
		return null;
	}

	return (
		<Routes>
			{navItems.map((each, i) => (
				<Route
					path={each.path}
					element={each.element}
					key={i}
				/>
			))}
		</Routes>
	);
};

RouteRenderer.propTypes = {
	routes: PropTypes.array
};

export default RouteRenderer;
