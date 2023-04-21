import { Typography } from '@mui/material';
import React from 'react';
import { useAppStore } from 'store';

function User() {
	const user = useAppStore(store => store.user);
	return (
		<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
			{user?.userName ? `Hi, ${user?.userName}` : 'Welcome to commerce'}
		</Typography>
	);
}

export default User;
