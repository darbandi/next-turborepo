import { Typography } from '@mui/material';
import { useSession } from 'next-auth/react';

function User() {
	const { data: session } = useSession();
	return (
		<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
			{session?.user?.name ? `Hi, ${session?.user?.name}` : 'Welcome to commerce'}
		</Typography>
	);
}

export default User;
