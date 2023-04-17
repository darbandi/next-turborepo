import { Box, Button, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useAppStore } from '../../store';

export const Main: NextPage = () => {
  const { data: session } = useSession();
  const { count, inc } = useAppStore((store) => store);
  const { t } = useTranslation('common');

  return (
    <Box className='container'>
      <Typography component='h3' variant='h3'>
        {t('title')}
      </Typography>
      <pre>{JSON.stringify(session ? session : {}, null, 2)}</pre>
      <Button variant='contained' onClick={() => inc()}>
        counter: {count}
      </Button>
    </Box>
  );
};

export default Main;
