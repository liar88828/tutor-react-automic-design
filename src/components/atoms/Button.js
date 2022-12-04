import React from 'react';

export const Button = ({onClick, title, isLoading}) => {
	if (isLoading) {
		return (<button
			className='btn loading'>Loading...</button>)
	}
	return (<button
		className='btn'
		onClick={onClick}>{title}</button>);
}

