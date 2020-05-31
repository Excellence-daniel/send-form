import React from 'react';

export default function FormOne(props) {
	const { options, next, offerOptions, disableButton } = props;

	return (
		<div className="forms">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-12 col-md-6 big-card">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">What products do you offer?</h5>
								<h6 className="card-subtitle mb-2 text-muted">Select all that applies</h6>
								<br />
								<div className="options">
									{offerOptions.map((option, id) => {
										return (
											<button onClick={options} id="button" key={id} value={id}>
												<h5>{option.title}</h5>
												<h6>{option.subTitle}</h6>
											</button>
										);
									})}
								</div>
							</div>
						</div>
						<button disabled={disableButton} className="next-button" onClick={next}>
							Continue
						</button>
					</div>
					<div className="col-md-3"></div>
				</div>
			</div>
		</div>
	);
}
