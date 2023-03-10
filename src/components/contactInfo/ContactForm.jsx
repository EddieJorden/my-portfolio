import React, { useState } from 'react';

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
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name:</label>
			<input
				type="text"
				id="name"
				name="name"
				value={name}
				onChange={(event) => setName(event.target.value)}
				required
			/>

			<label htmlFor="email">Email:</label>
			<input
				type="email"
				id="email"
				name="email"
				value={email}
				onChange={(event) => setEmail(event.target.value)}
				required
			/>

			<label htmlFor="message">Message:</label>
			<textarea
				id="message"
				name="message"
				value={message}
				onChange={(event) => setMessage(event.target.value)}
				required
			/>

			<button type="submit">Send</button>

			{status && <p>{status}</p>}
		</form>
	);
}

export default ContactForm;
