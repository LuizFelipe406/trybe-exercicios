import React from 'react';

class LoginInput extends React.Component {
	render() {
		const { type, onChange, value } = this.props;
		return (
			<input
				type={type}
				name={type}
				value={value}
				onChange={onChange}
			></input>
		);
	}
}

export default LoginInput;
