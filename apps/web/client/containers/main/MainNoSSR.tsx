import { Box, Button, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useAppStore } from 'store';

export const Main: NextPage = () => {
	const { data: session } = useSession();
	const inc = useAppStore(store => store.inc);
	const count = useAppStore(store => store.count);
	const { t } = useTranslation('common');

	return (
		<Box className='container'>
			<Typography component='h3' variant='h3'>
				{t('no-ssr')}
			</Typography>
			<pre>{JSON.stringify(session ? session : {}, null, 2)}</pre>
			<Button variant='contained' onClick={() => inc()}>
				counter: {count}
			</Button>
		</Box>
	);
};

export default Main;
