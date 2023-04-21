import { AppProps } from "next/app";
import { GlobalSliceType, ProductSliceType } from "store/slices";

export type CustomAppType = AppProps & { Component: { auth: boolean } };
export type AppStoreType = ProductSliceType & GlobalSliceType;
export type NavbarProps = {
	children?: React.ReactNode;
};