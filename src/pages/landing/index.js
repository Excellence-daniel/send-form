import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/main-page-header';
import PictureOne from './images/pic-1.png';
import './landing.scss';
import Equipments from '../../components/equipments';
import Processes from '../../components/processes';

export default function LandingPage() {
	return (
		<>
			<Header />
			<div className="main-page">
				<div className="section-one">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<h5>Lifesaving procurement</h5>
								<h2>Sourcing for COVID-19</h2>
								<h3 className="side-one-note">
									Response connects healthcare providers to medical suppliers with a sourcing platform
									built to accelerate emergency procurement.
								</h3>
								<button className="request-button"> Request Medical Eqipments</button>
								<h6>
									Questions? <Link className="action-link">Talk to us</Link>.
								</h6>
							</div>
							<div className="col-md-6">
								<div className="image-content">
									<img src={PictureOne} className="img-fluid" alt="section-one-img" />
									{/* <div className="images-content-placement">
									<img
										src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9dac215a3dabbebdc3dce5_Group%20579.svg"
										alt="A request for respirators that has received multiple offers from medical suppliers."
										class="request"
									/>
									<img
										src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9dac22aa58bef4f1e52972_Group%20576.svg"
										alt="A request for respirators that has received multiple offers from medical suppliers."
										class="quantity"
									></img>
									<img
										src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9dac21aa58bec738e52971_Group%20578.svg"
										alt="A request for respirators that has received multiple offers from medical suppliers."
										class="date"
									></img>
									<img
										src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9dac2188f10ff75c6e3702_Group%20577.svg"
										alt="A request for respirators that has received multiple offers from medical suppliers."
										class="location"
									></img>
									<img
										src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9dac2188f10f0fe06e3701_Group%20580.svg"
										alt="A request for respirators that has received multiple offers from medical suppliers."
										class="live"
									></img>
								</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section-two">
					<h4>Have Supplies? </h4>
					<button className="supply-button">Supply Medical Equipment</button>
				</div>

				<div className="section-three">
					<div className="partners-section">
						<h5>Partners</h5>
						<img
							src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9514078c78747f72aa5dc5_UberFreight_2018.png"
							srcset="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9514078c78747f72aa5dc5_UberFreight_2018-p-500.png 500w, https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9514078c78747f72aa5dc5_UberFreight_2018-p-800.png 800w, https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9514078c78747f72aa5dc5_UberFreight_2018.png 1023w"
							sizes="(max-width: 479px) 29vw, 140.296875px"
							alt="Uber Freight"
							class="partner-image"
						></img>
						<img
							src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5ea4624d8ad6b676ff921105_c19logo-dark.png"
							alt="C19Coalition"
							class="partner-image"
						></img>
					</div>

					<div className="dashed-equipments">
						<h2>
							Millons of units in <br /> medical eqipment ready to go
						</h2>
						<h4>
							We're working with manufacturers producing <br /> millions of high demand products per week.
						</h4>
						<>
							<Equipments />
						</>
						<div className="coming-soon-equipments">
							<button> 25+ More Classes of Goods Coming Soon</button>
						</div>
					</div>

					<div className="how-it-works">
						<h4>How it works</h4>
						<Processes />

						<center>
							<button className="request-button">Request Medical Equipments</button>
						</center>
					</div>

					<div className="about-us-card">
						<div className="subtitle">About us</div>
						<div className="big-text">
							<h2>
								We’re focused on accelerating the delivery of life saving medical supplies during
								COVID-19.
							</h2>
						</div>
						<Link>Learn more about our mission and who we are -></Link>
					</div>

					<div className="get-involved-section">
						<div className="container-fluid">
							<div className="row">
								<div class="col-md-3"></div>
								<div class="col-12 col-md-6">
									<h3>Get Involved</h3>
									<h4>
										Join our community for the latest technical specifications, verified suppliers
										data, and tools to help manage this global health pandemic.
									</h4>
									<div className="subscribe">
										<div class="input-group mb-3">
											<input type="text" class="form-control" placeholder="Your Email" />
											<div class="input-group-append">
												<button class="btn btn-outline-secondary" type="button">
													Sign Up
												</button>
											</div>
										</div>
									</div>
									<div className="policy">
										We care about protecting your data. Read our{' '}
										<Link className="policy-link">Privacy Policy</Link>
									</div>
								</div>
								<div class="col-md-3"></div>
							</div>
						</div>
					</div>

					<div className="footer">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-3"></div>
								<div className="col-12 col-md-6 footer-wrap">
									<div className="row">
										<div className="col">
											<div className="logo">
												<img
													src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5d0aaf93cfe3203389aaebf9_logo-blue.svg"
													alt="Response Logo"
													height="24"
												></img>
												<h6 className="copyright">&copy; 2020 Response Inc.</h6>
											</div>
										</div>
										<div className="col">
											<div className="sec-2">
												<h5>Product</h5>
												<br />
												<h6>
													<Link>Features</Link>
												</h6>
											</div>
										</div>
										<div className="col">
											<div className="sec-3">
												<h5>Legal</h5>
												<br />
												<h6>
													<Link>Terms</Link>
												</h6>
												<h6>
													<Link>Privacy</Link>
												</h6>
											</div>
										</div>
										<div className="col">
											<div className="sec-4">
												<h5>Company</h5>
												<br />
												<h6>
													<Link>About</Link>
												</h6>
												<h6>
													<Link>Contact Us</Link>
												</h6>
												<h6>
													<a href={`tel: ${+18449661910}`}>+1 (844) 966-1910</a>
												</h6>
											</div>
										</div>
										<div className="col sec-5">
											<div className="sec-5">
												<h5>Follow Us</h5>
												<br />
												<h6>
													<Link>
														<img
															src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9db94f5a3dab3636c443a5_iconfinder_BW_Linkedin_glyph_svg_5305157.svg"
															alt="LinkedIn"
															class="social-link-image"
														></img>
														<span>LinkedIn</span>
													</Link>
												</h6>
												<h6>
													<Link>
														<img
															src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9db9265a3dab89ffc4435b_iconfinder_BW_Facebook_2_glyph_svg_5305153.svg"
															alt="Facebook"
															class="social-link-image"
														/>
														<span>Facebook</span>
													</Link>
												</h6>
												<h6>
													<Link>
														<img
															src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9db91dd328d88000dc9744_iconfinder_BW_Twitter_glyph_svg_5305170.svg"
															alt="Twitter"
															class="social-link-image"
														/>
														<span>Twitter</span>
													</Link>
												</h6>
												<h6>
													<Link>
														<img
															src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9db8fd8a5e0bd40666af9d_iconfinder_Instagram_glyph_svg_5335781.svg"
															alt="Instagram"
															class="social-link-image"
														/>
														<span>Instagram</span>
													</Link>
												</h6>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-3"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
