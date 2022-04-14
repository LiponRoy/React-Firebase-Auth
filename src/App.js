import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from 'firebase/auth';
import { auth, provider } from './Firebase config/Firebase-config';

function App() {
	// register
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	//login
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	// getting current User
	const [currentUserMe, setCurrentUserMe] = useState({});
	onAuthStateChanged(auth, currentUser => {
		setCurrentUserMe(currentUser);
	});

	// sign in with google
	const signInWithGoogle = async () => {
		const userMe = await signInWithPopup(auth, provider);
		// then set it to current user state
		onAuthStateChanged(auth, userMe => {
			setCurrentUserMe(userMe.user);
		});
		console.log(userMe);
	};
	// End  sign in with google

	const registerUser = async () => {
		try {
			const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};
	const loginUser = async () => {
		try {
			const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};
	const logoutUser = async () => {
		await signOut(auth);
	};

	return (
		<div className='App'>
			<div className='registerUser'>
				<h1>Register</h1>
				<input
					placeholder='Reg Email'
					onChange={e => {
						setRegisterEmail(e.target.value);
					}}
				/>
				<input
					placeholder='Reg Password'
					onChange={e => {
						setRegisterPassword(e.target.value);
					}}
				/>
				<button onClick={registerUser}>Register user</button>
			</div>
			<h1>Login</h1>
			<input
				placeholder='Login Email'
				onChange={e => {
					setLoginEmail(e.target.value);
				}}
			/>
			<input
				placeholder='Login Pass'
				onChange={e => {
					setLoginPassword(e.target.value);
				}}
			/>
			<button onClick={loginUser}>Login user</button>

			{/* Display sign in user informetion */}
			<h1>{currentUserMe?.email}</h1>
			<h1>{currentUserMe?.displayName}</h1>
			<img src={currentUserMe?.photoURL} alt='no img found' />
			{/*End Display sign in user informetion */}

			<br></br>
			<br></br>
			<button onClick={logoutUser}>SignOut</button>
			<button onClick={signInWithGoogle} className='google-signinMe'>
				Google signin
			</button>
		</div>
	);
}

export default App;
