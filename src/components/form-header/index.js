import React from 'react';
import { Link } from 'react-router-dom';

export default function FormHeader() {
	return (
		<div className="form-header">
			<div className="container-fluid">
				<div className="row">
					<div className="col-4 col-md-4">
						<Link to="/">
							<img
								src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5d0aaf93cfe3203389aaebf9_logo-blue.svg"
								alt="Response Logo"
								height="24"
							></img>
						</Link>
					</div>
					<div className="col-8 col-md-8"></div>
				</div>
			</div>
		</div>
	);
}
