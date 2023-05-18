import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import { navItems } from './navItems';

const RouteRenderer = () => {
	if (!navItems || navItems.length === 0) {
		return null;
	}
	return navItems.map((each, i) => {
		return (
			<Routes key={i}>
				<Route
					path={each.path}
					element={each.element}
					title={each.title}
					key={i}
				/>
			</Routes>
		);
	});
};

RouteRenderer.propTypes = {
	routes: PropTypes.array

};

export default RouteRenderer;