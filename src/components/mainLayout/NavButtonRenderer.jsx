import React from 'react';
import { NavButton } from '../../utils';
import PropTypes from 'prop-types';
import { navItems } from './navItems';

const NavButtonRenderer = ({ updateDisplayedContent }) => {
	if (!navItems || navItems.length === 0) {
		return null;
	}
	return navItems.map((each, i) => {
		return (
			<NavButton
				onClick={() => 
					updateDisplayedContent(
						`${each.path}`,
						{section: '${each.section}'}
					)}
				href="#${each.section}"
				aria-label="${each.section}"
				key={i}
			>{each.section}
			</NavButton>
		);
	});
};

NavButtonRenderer.propTypes = {
	navItems: PropTypes.array,
	updateDisplayedContent: PropTypes.func
};

export default NavButtonRenderer;
