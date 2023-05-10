import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from './MenuItem'

export default function Menu() {
	return (
		<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			<nav aria-label="main mailbox folders">
				<MenuItem name='Statistiky' path='/' />
				<MenuItem name='Hypoteční kalkulačka' path='/calculator' />
			</nav>
		</Box>
	);
}
