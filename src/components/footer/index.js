import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
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
	);
}
