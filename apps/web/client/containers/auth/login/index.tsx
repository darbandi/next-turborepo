import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useAppStore } from 'store';

export function LoginPage() {
	const [error, setError] = useState('');
	const router = useRouter();
	const { data: session, status } = useSession();
	const getCurrentUser = useAppStore(store => store.getCurrentUser);

	useEffect(() => {
		if (session?.user) {
			const user = session.user as { id: string };
			getCurrentUser(user?.id as string);
		}
	}, [session, getCurrentUser]);

	const schema = yup.object().shape({
		email: yup.string().required('Email is required'),
		password: yup.string().required('Password is required')
	});

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmit = async ({ email, password }) => {
		const result = await signIn('credentials', {
			email,
			password,
			redirect: false
		});
		if (result.error) {
			setError(result.error);
		}
	};

	if (status === 'loading') return null;
	if (status === 'authenticated') {
		router.push('/');
		return null;
	}

	return (
		<Box display='flex' alignItems='center' justifyContent='center'>
			<Box display='flex' flexDirection='column' alignItems='center' width={500} mt={8}>
				<LockOutlined />
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>
					<TextField
						label='Email'
						variant='outlined'
						margin='normal'
						fullWidth
						{...register('email')}
						error={Boolean(errors.email)}
						helperText={<>{errors.email?.message}</>}
					/>
					<TextField
						label='Password'
						variant='outlined'
						margin='normal'
						type='password'
						fullWidth
						{...register('password')}
						error={Boolean(errors.password)}
						helperText={<>{errors.email?.message}</>}
					/>
					<Button
						// disabled={!userLoading}
						type='submit'
						variant='contained'
						color='primary'
					>
						Sign in
					</Button>
				</form>
				{error && <Typography color='error'>{error}</Typography>}
			</Box>
		</Box>
	);
}

export default LoginPage;
