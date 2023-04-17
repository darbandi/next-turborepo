import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSidePropsWithTranslation = async (context) => {
  const locale = context?.locale || context?.router?.locale || "fa";
  const translations = await serverSideTranslations(locale);

  return {
    props: {
      ...translations,
    },
  };
};
