import React from 'react';

export default function Processes() {
	return (
		<>
			<div className="step">
				<h6>Step one</h6>
				<div className="side-left">
					<h3 className="main-text">Post Complaint requests in minutes</h3>
					<h3 className="sub-text">
						Tell us what you need and Response uses your terms to generate all the necessary paperwork.
					</h3>
				</div>
				<div className="side-right">
					<img
						src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d9311d328d86318db3303_request_simple.svg"
						alt="A request for examination gloves"
						className="img-fluid"
					/>
				</div>
			</div>
			<div className="step">
				<h6>Step two</h6>
				<div className="side-left">
					<h3 className="main-text">Match with suppliers you can trust</h3>
					<h3 className="sub-text">
						Response instantly notifies the most relevant suppliers based on your request.
					</h3>
				</div>
				<div className="side-right">
					<img
						src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5ea47d5b808bdf5ef78c4308_supplier_simple.svg"
						alt="A request for examination gloves"
					/>
				</div>
			</div>
			<div className="step">
				<h6>Step three</h6>
				<div className="side-left">
					<h3 className="main-text">Pick the best offer</h3>
					<h3 className="sub-text">
						We automatically collect and score the best offers based on quality, lead time, and price.
					</h3>
				</div>
				<div className="side-right">
					<img
						src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d92f4c0385a5a0fa4c828_compare.svg"
						alt="A request for examination gloves"
					/>
				</div>
			</div>

			<div className="step">
				<h6>Step four</h6>
				<div className="side-left">
					<h3 className="main-text">Get your supplies</h3>
					<h3 className="sub-text">
						Response is designed to make emergency procurement easy and fast, so that you can get back to
						the work that really matters - fighting COVID-19.
					</h3>
				</div>
				<div className="side-right">
					<img
						src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d92e6d328d8de2cdb3239_delivered.svg"
						alt="A request for examination gloves"
					/>
				</div>
			</div>
		</>
	);
}
