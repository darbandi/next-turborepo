import { Box, Button, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useIntl } from 'react-intl';
import { useAppStore } from 'store';

export const Main: NextPage = () => {
	const { data: session } = useSession();
	const inc = useAppStore(store => store.inc);
	const count = useAppStore(store => store.count);
	const { formatMessage } = useIntl();

	return (
		<Box className='container'>
			<Typography component='h3' variant='h3'>
				{formatMessage({ id: 'no-ssr' })}
			</Typography>
			<pre>{JSON.stringify(session ? session : {}, null, 2)}</pre>
			<Button variant='contained' onClick={() => inc()}>
				counter: {count}
			</Button>
		</Box>
	);
};

export default Main;
