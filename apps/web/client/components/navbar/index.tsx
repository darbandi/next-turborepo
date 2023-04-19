import React from 'react';
import { makeStyles } from '@mui/styles';
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	SvgIcon,
	Box,
	Theme,
	Button
} from '@mui/material';

import Link from 'next/link';
import { Nightlight, LightMode } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useAppStore } from 'store';

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

type NavbarProps = {
	children?: React.ReactNode;
};

export const Navbar = ({ children }: NavbarProps) => {
	const classes = useStyles();
	const { data: session, status } = useSession();

	const themeMode = useAppStore(store => store.themeMode);
	const changeTheme = useAppStore(store => store.changeTheme);
	const signOut = useAppStore(store => store.signOut);

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
		}
	];

	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					{session ? `Hi, ${session?.user?.name}` : 'Welcome to commerce'}
				</Typography>

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
						<Link href={nav.link}>{nav.title}</Link>
					</Typography>
				))}

				<Box className={classes.separator}></Box>
				{status === 'authenticated' ? (
					<Button
						onClick={signOut}
						variant='text'
						color='secondary'
						sx={{
							'color': 'grey.500',
							'&:hover': { color: 'grey.100' },
							'px': 4
						}}
					>
						logout
					</Button>
				) : (
					<Typography
						variant='button'
						color='secondary'
						sx={{
							'textDecoration': 'none',
							'color': 'grey.500',
							'&:hover': { color: 'grey.100' },
							'px': 4
						}}
					>
						<Link href='/auth/login'>login</Link>
					</Typography>
				)}
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
