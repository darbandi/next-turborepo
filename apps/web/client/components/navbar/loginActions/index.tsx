import { Typography, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useAppStore } from 'store';

function LoginActions() {
	const user = useAppStore(store => store.user);
	const signOut = useAppStore(store => store.signOut);
    
	if (user?.userName)
		return (
			<Button
				onClick={signOut}
				variant='text'
				color='secondary'
				sx={{
					'color': 'grey.500',
					'&:hover': { color: 'grey.100' },
					'px': 4
				}}
			>
				logout
			</Button>
		);
	else
		return (
			<Typography
				variant='button'
				color='secondary'
				sx={{
					'textDecoration': 'none',
					'color': 'grey.500',
					'&:hover': { color: 'grey.100' },
					'px': 4
				}}
			>
				<Link href='/auth/login'>login</Link>
			</Typography>
		);
}

export default LoginActions;
