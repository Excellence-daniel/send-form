import React from 'react';

export default function BeginSignUp(props) {
	const { next } = props;
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-12 col-md-6 form-start">
					<h4>Welcome!</h4>
					<h5>Here are the next steps:</h5>
					<div className="instruction-cards">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Sign up</h5>
								<h6 className="card-subtitle mb-2 text-muted">
									<br />
								</h6>
								<p className="card-text">
									Create an account and complete your request in less than 3 minutes.
								</p>
							</div>
						</div>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Match with suppliers</h5>
								<h6 className="card-subtitle mb-2 text-muted">
									<br />
								</h6>
								<p className="card-text">
									After completing your request, we’ll notify relevant suppliers to start bidding.
								</p>
							</div>
						</div>
					</div>
					<button className="start-button" onClick={next}>
						Start
					</button>
				</div>
				<div className="col-md-2"></div>
			</div>
		</div>
	);
}
