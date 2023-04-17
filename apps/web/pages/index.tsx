import dynamic from 'next/dynamic';
import { getServerSidePropsWithTranslation } from '../lib/getServerSidePropsWithTranslation';
const MainSSR = dynamic(() => import('../containers/main/MainSSR'), {
  ssr: true,
});
const MainNoSSR = dynamic(() => import('../containers/main/MainNoSSR'), {
  ssr: false,
});

export function Index() {
  return (
    <>
      <MainSSR />
      <MainNoSSR />
    </>
  );
}
export const getServerSideProps = getServerSidePropsWithTranslation;
export default Index;