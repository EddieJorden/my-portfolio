import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 600px;
`;

const StyledLabel = styled.label`
	font-weight: bold;
	margin-bottom: 10px;
`;

const StyledInput = styled.input`
	padding: 10px;
	margin-bottom: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
`;

const StyledTextarea = styled.textarea`
	padding: 10px;
	margin-bottom: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	resize: vertical;
	height: 100px;
`;

const StyledButton = styled.button`
	background-color: #1abc9c;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	font-size: 16px;
	cursor: pointer;
	margin: 0px 0px 20px 0px;

	&:hover {
		background-color: #148f77;
	}
`;

function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [status, setStatus] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await fetch('/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: name,
					email: email,
					message: message,
				}),
			});

			const data = await response.text();

			setStatus(data);
			setName('');
			setEmail('');
			setMessage('');
		} catch (error) {
			console.error(error);
			setStatus('An error occurred while sending the email');
		}
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledLabel htmlFor="name">Name:</StyledLabel>
			<StyledInput
				type="text"
				id="name"
				name="name"
				value={name}
				onChange={(event) => setName(event.target.value)}
				required
			/>

			<StyledLabel htmlFor="email">Email:</StyledLabel>
			<StyledInput
				type="email"
				id="email"
				name="email"
				value={email}
				onChange={(event) => setEmail(event.target.value)}
				required
			/>

			<StyledLabel htmlFor="message">Message:</StyledLabel>
			<StyledTextarea
				id="message"
				name="message"
				value={message}
				onChange={(event) => setMessage(event.target.value)}
				required
			/>

			<StyledButton type="submit">Send</StyledButton>

			{status && <p>{status}</p>}
		</StyledForm>
	);
}

export default ContactForm;
