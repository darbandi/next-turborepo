import { Box, Divider, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

export const Main: NextPage = () => {
  
  const { t } = useTranslation("common");
  return (
    <Box className='container'>
      <Head>
        <meta name='description' content='This is an SSR component rendering' />
      </Head>
      <Typography variant='h3'>This is an SSR component rendering {t('title')}</Typography>
      <Divider />
    </Box>
  );
};

export default Main;
