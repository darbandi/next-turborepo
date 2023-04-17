import { Box } from '@mui/material';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export function Home() {
  const { data: session } = useSession();
  return (
    <Box className='container'>
      <Link href='/'>index</Link>
      <div className='container'>name: {session.user.name}</div>
    </Box>
  );
}

export default Home;
