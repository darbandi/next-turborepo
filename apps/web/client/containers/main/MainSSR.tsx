import { Box, Divider, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useIntl } from 'react-intl';

export const Main: NextPage = () => {
	const { formatMessage } = useIntl();
	return (
		<Box className='container'>
			<Head>
				<meta name='description' content='This is an SSR component rendering' />
			</Head>
			<Typography variant='h3'>
				This is an SSR component rendering {formatMessage({ id: 'title' })}
			</Typography>
			<Divider />
		</Box>
	);
};

export default Main;
