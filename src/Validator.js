import React, { useState } from 'react';
import './Validator.css';

function Validator() {
	const initialState = {
		username: '',
		password: '',
		passwordConfirm: '',
		valid: ''
	}
	const [formState, setFormState] = useState(initialState)

	const handleChange = (event) => {
		setFormState({...formState, [event.target.id]: event.target.value})
		console.log(formState)
	}

	const handleSubmit = (event) => {
		//prevent page from reloading on form submission
		event.preventDefault()
		// check if submission is valid
		if (formState.password === formState.passwordConfirm) {
			setFormState({...formState, valid: true})
		} else {
			setFormState({...formState, valid: false})
		}
		console.log(formState)
		// setFormState(initialState)
	}

	return (
		<div className='form'>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Username'
					id='username'
					onChange={handleChange}
					value={formState.username}
					required
				/>
				<label htmlFor='username'>Username</label>
				<input
					type='password'
					placeholder='Password'
					id='password'
					onChange={handleChange}
					value={formState.password}
					required
				/>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					placeholder='Confirm password'
					id='passwordConfirm'
					onChange={handleChange}
					value={formState.passwordConfirm}
					required
				/>
				<label htmlFor='passwordConfirm'>Confirm password </label>
				<button type='submit'>Sign Up</button>
				{(formState.valid === true) ? <p className='valid'>Passwords are a match</p> : (formState.valid === false) ? <p className='invalid'>Passwords do not match</p> : <p>Passwords must match</p>}
			</form>
		</div>
	);
}

export default Validator;
