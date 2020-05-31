import React, { Component } from 'react';
import FormHeader from '../../components/form-header';
import './request-page.scss';
import BeginSignUp from '../signup-forms/begin';
import FormOne from '../signup-forms/form-one';
import FormThree from '../signup-forms/form-two';

const offerOptions = [
	{ title: 'Respirators', subTitle: 'Surgical N95 or equivalent' },
	{ title: 'Respirators', subTitle: 'N95 or equivalent' },
	{ title: 'Respirators', subTitle: 'KN95 or equivalent' },
	{ title: 'Gown', subTitle: 'PB70' },
	{ title: 'Examination Gloves', subTitle: 'Powder-free nitrile (ASTM D6319)' },
	{ title: 'Examination Gloves', subTitle: 'Powder-free nitrile (ASTM D3578)' },
	{ title: 'Facial Shields', subTitle: 'ANSI Z87.1' },
	{ title: 'Hand Sanitizer', subTitle: '' },
	{ title: 'Disinfecting wipes', subTitle: 'EPA Certified' },
	{ title: 'Surgical Masks', subTitle: '' },
];

class RequestPage extends Component {
	state = {
		page: 1,
		offers: [],
		disableOfferNextButton: true,
	};

	nextPage = () => {
		const { page } = this.state;
		this.setState({ page: page + 1 });
	};

	pageOneOptions = (e) => {
		const elem = e.target;
		if (elem.id === 'button') {
			if (elem.className === 'active') {
				elem.className = '';
				let value = Number(elem.value);
				this.removeOffer(value);
			} else {
				elem.className = 'active';
				let value = Number(elem.value);
				this.addOffer(value);
			}
		}
	};

	addOffer = (value) => {
		const { offers } = this.state;
		const selectedOption = offerOptions[value];
		const options = offers;
		options.push(selectedOption);
		this.setState({ offers: options });
	};

	removeOffer = (value) => {
		let { offers } = this.state;
		const unselectedoption = offerOptions[value];
		const index = offers.indexOf(unselectedoption);
		offers.splice(index, 1);
		this.setState({ offers });
	};

	render() {
		const { page, offers } = this.state;

		return (
			<div className="request-page">
				<FormHeader />
				<div className="page-content">
					{page === 1 ? (
						<BeginSignUp next={this.nextPage} />
					) : page === 2 ? (
						<FormOne
							options={this.pageOneOptions}
							next={this.nextPage}
							offerOptions={offerOptions}
							disableButton={offers.length ? false : true}
						/>
					) : page === 3 ? (
						<FormThree
							options={this.pageOneOptions}
							next={this.nextPage}
							offerOptions={offerOptions}
							disableButton={offers.length ? false : true}
						/>
					) : (
						alert('Hey there')
					)}
				</div>
			</div>
		);
	}
}

export default RequestPage;
