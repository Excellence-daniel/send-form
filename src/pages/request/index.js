import React, { Component } from 'react';
import FormHeader from '../../components/form-header';
import './request-page.scss';
import BeginSignUp from '../signup-forms/begin';

class RequestPage extends Component {
	state = {
		page: 1,
	};

	render() {
		const { page } = this.state;

		return (
			<div className="request-page">
				<FormHeader />
				<div className="page-content">{page === 1 ? <BeginSignUp /> : <></>}</div>
			</div>
		);
	}
}

export default RequestPage;
