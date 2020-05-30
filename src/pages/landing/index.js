import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/main-page-header';
import PictureOne from './images/pic-1.png';
import './landing.scss';

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
						<div className="equipment-types">
							<div className="equipment">
								<img
									src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9da596b99e412007923c2e_N95.svg"
									alt="A Respirator"
									class="covid-type-icon"
								/>
								<p>Respirators</p>
							</div>
							<div className="equipment">
								<img
									src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685e38205a2f86da9be8_Glove.svg"
									alt="A Respirator"
									class="covid-type-icon"
								/>
								<p>Gloves</p>
							</div>
							<div className="equipment">
								<img
									src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685e38205ac3e6da9be7_Mask.svg"
									alt="A Respirator"
									class="covid-type-icon"
								/>
								<p>Face Shields</p>
							</div>
							<div className="equipment">
								<img
									src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685e1ceb3e5c17649a7d_Sanitizer.svg"
									alt="A Respirator"
									class="covid-type-icon"
								/>
								<p>Sanitizer</p>
							</div>
							<div className="equipment">
								<img
									src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d69b91ceb3e7c8164a18a_Respirator.svg"
									alt="A Respirator"
									class="covid-type-icon"
								/>
								<p>Ventilators</p>
							</div>
							<div className="equipment">
								<img
									src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685ee014f924d6aad1b6_SurgicalMask.svg"
									alt="A Respirator"
									class="covid-type-icon"
								/>
								<p>Masks</p>
							</div>
							<div className="equipment">
								<img
									src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685e38205ab232da9be4_Wipes.svg"
									alt="A Respirator"
									class="covid-type-icon"
								/>
								<p>Wipes</p>
							</div>
							<div className="equipment">
								<img
									src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685d9aae7e0b16bf20be_Gown.svg"
									alt="A Respirator"
									class="covid-type-icon"
								/>
								<p>Gowns</p>
							</div>
						</div>
						<div className="coming-soon-eqipments"></div>
					</div>
				</div>
			</div>
		</>
	);
}
