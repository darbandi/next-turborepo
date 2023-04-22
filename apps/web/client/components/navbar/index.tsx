import { AppBar, Box, IconButton, SvgIcon, Theme, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

import { LightMode, Nightlight } from '@mui/icons-material';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppStore } from 'store';
import { useSession } from 'next-auth/react';
import { NavbarProps } from 'client/types';

const User = dynamic(() => import('./user'), { ssr: true });
const LoginActions = dynamic(() => import('./loginActions'), { ssr: true });

const useStyles = makeStyles((theme: Theme) => ({
	navLink: {
		'textDecoration': 'none',
		'color': 'inherit',
		'margin': '0 1rem',
		'&:hover': {
			color: '#fff'
		}
	},
	separator: {
		height: '24px',
		borderRight: `1px solid`,
		borderRightColor: theme?.palette?.secondary?.main,
		marginRight: '16px',
		marginLeft: '16px'
	}
}));

export const Navbar = ({ children }: NavbarProps) => {
	const classes = useStyles();
	const themeMode = useAppStore(store => store.themeMode);
	const changeTheme = useAppStore(store => store.changeTheme);
	const { data: session } = useSession();
	const { push, locale: nextLocale, pathname, query, asPath } = useRouter();

	const handleChangeLang = () => {
		push({ pathname, query }, asPath, {
			locale: nextLocale === 'fa' ? 'en' : 'fa'
		});
	};

	const navItems = [
		{
			id: 1,
			title: 'Home',
			link: `/home`
		},
		{
			id: 2,
			title: 'Main',
			link: `/`
		},
		{
			id: 3,
			title: 'Dashboard',
			link: `/admin/dashboard`,
			hidden: !session?.user?.name
		}
	];

	return (
		<AppBar position='static'>
			<Toolbar>
				<User />
				{navItems?.map(nav => (
					<Typography
						variant='button'
						color='secondary'
						key={nav.id}
						sx={{
							'textDecoration': 'none',
							'color': 'grey.500',
							'&:hover': { color: 'grey.100' },
							'px': 4
						}}
					>
						{!nav?.hidden && <Link shallow href={nav.link}>{nav.title}</Link>}
					</Typography>
				))}
				<Box className={classes.separator}></Box>
				<LoginActions />
				<Box className={classes.separator}></Box>
				<IconButton onClick={handleChangeLang} color='inherit'>
					{nextLocale === 'fa' ? 'en' : 'fa'}
				</IconButton>
				<IconButton onClick={changeTheme} color='inherit'>
					{themeMode === 'dark' ? (
						<SvgIcon component={LightMode} />
					) : (
						<SvgIcon component={Nightlight} />
					)}
				</IconButton>
			</Toolbar>
			{children}
		</AppBar>
	);
};

export default Navbar;
