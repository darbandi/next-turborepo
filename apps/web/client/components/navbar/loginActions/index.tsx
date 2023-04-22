import { Button, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useAppStore } from 'store';

function LoginActions() {
	const { data: session } = useSession();
	const signOut = useAppStore(store => store.signOut);
    
	if (session?.user?.name)
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
