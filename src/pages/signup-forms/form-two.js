import React from 'react';

export default function FormThree(props) {
	const { handleInput, submit, back } = props;
	return (
		<div className="forms">
			<div className="container-fluid">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-3"></div>
						<div className="col-12 col-md-6 big-card">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Contact Information</h5>
									<h6 className="card-subtitle mb-2 text-muted">&nbsp;</h6>
									<br />
									<div className="form-body">
										<h5 className="card-subhead">Primary Contact</h5>
										<div className="form">
											<p>
												<label>First Name</label>
												<input
													className="send-form-input"
													placeholder="First Name"
													name="firstName"
													onChange={handleInput}
												></input>
											</p>
											<p>
												<label>Last Name</label>
												<input
													className="send-form-input"
													placeholder="Last Name"
													name="lastName"
													onChange={handleInput}
												></input>
											</p>
											<p>
												<label>Title</label>
												<input
													className="send-form-input"
													placeholder="Title"
													name="title"
													onChange={handleInput}
												></input>
											</p>
											<p>
												<label>Email Address</label>
												<input
													className="send-form-input"
													placeholder="Email Address"
													name="email"
													onChange={handleInput}
												></input>
											</p>
											<p>
												<label>Phone Number</label>
												<input
													className="send-form-input"
													placeholder="Phone Number"
													name="number"
													onChange={handleInput}
												></input>
											</p>
											<br />
											<div>
												<h5 className="proof">Proof of Association with Organization</h5>
												<input
													className="send-form-input"
													placeholder="Requester Profile (LinkedIn, Organization Page e.t.c)"
													name="profile"
													onChange={handleInput}
												></input>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Your Organization Information</h5>
									<h6 className="card-subtitle mb-2 text-muted">&nbsp;</h6>
									<br />
									<div className="form-body">
										<h5 className="card-subhead">Organization</h5>
										<div className="form">
											<p>
												<label>Organization Type</label>
												<select
													className="send-form-input"
													placeholder="Organization Type"
													name="orgType"
													onChange={handleInput}
												>
													<option disabled selected>
														Organization Type
													</option>
													<option value="Supplier">Supplier</option>
													<option value="Manufacturer">Manufacturer</option>
													<option value="Individual">Individual</option>
												</select>
											</p>
											<p>
												<label>Organization Name</label>
												<input
													className="send-form-input"
													placeholder="Organization Name"
													name="orgName"
													onChange={handleInput}
												></input>
											</p>
											<p>
												<label>Organization Website</label>
												<input
													className="send-form-input"
													placeholder="Organization Website"
													name="website"
													onChange={handleInput}
												></input>
											</p>
											<h5>Location</h5>
											<p>
												<label>Address Line 1</label>
												<input
													className="send-form-input"
													placeholder="Street Address, P.O Box, company name, c/o"
													name="add1"
													onChange={handleInput}
												></input>
											</p>
											<p>
												<label>Address Line 2</label>
												<input
													className="send-form-input"
													placeholder="Apartment, suite, unit, building, floor, e.t.c"
													name="add2 "
													onChange={handleInput}
												></input>
											</p>
											<p>
												<label>City</label>
												<input
													className="send-form-input"
													placeholder="City"
													name="city"
													onChange={handleInput}
												></input>
											</p>
											<p>
												<label>State/Province/Region</label>
												<input
													className="send-form-input"
													placeholder="State/Province/Region"
													name="state"
													onChange={handleInput}
												></input>
											</p>
											<p>
												<label>ZIP</label>
												<input
													className="send-form-input"
													placeholder="ZIP"
													name="zip"
													onChange={handleInput}
												></input>
											</p>
											<p>
												<label>Country</label>
												<input
													className="send-form-input"
													placeholder="Country"
													name="country"
													onChange={handleInput}
												></input>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Terms and Conditions</h5>
									<h6 className="card-subtitle mb-2 text-muted">&nbsp;</h6>
									<br />
									<div className="form-body terms">
										<h5 className="card-subhead">&nbsp;</h5>
										<p>
											Once you submit your request, we'll securely store your information in an
											account to make sure we can contact you when we find a match. We’ll send you
											a temporary password that you can use to access your account and manage your
											requests.
										</p>
										<div class="form-group form-check">
											<input
												type="checkbox"
												class="form-check-input"
												id="check1"
												name="terms"
												onClick={handleInput}
											/>
											<label class="form-check-label" for="check1">
												I hereby agree to the <span>Terms & Conditions</span>
											</label>
										</div>
										<div class="form-group form-check">
											<input
												type="checkbox"
												class="form-check-input"
												id="check2"
												name="policy"
												onClick={handleInput}
											/>
											<label class="form-check-label" for="check2">
												I hereby agree to the <span>Privacy Policy</span>
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className="finish">
								<button className="back-button btn-secondary btn-lg" onClick={back}>
									Back
								</button>
								<button className="submit-button btn-success btn-lg" onClick={submit}>
									Submit
								</button>
							</div>
						</div>
						<div className="col-md-3"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
