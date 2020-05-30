import React from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from './images/logo.svg';
import './index.scss';

export default function Header() {
	return (
		<div className="container-fluid main-page-header">
			<div className="row">
				<div className="logo-section col-md-4 col-sm-6">
					<img src={LogoSvg} className="logo-svg" alt="response logo" />
				</div>
				<div className="menu-section col-md-4 col-sm-6">
					<Link>
						<li>Group Purchasing</li>
					</Link>
					<Link>
						<li>About Us</li>
					</Link>
					<Link>
						<li>Contact Us</li>
					</Link>
				</div>
				<div className="actions-section col-md-4 col-sm-12">
					<button className="link-button">
						<Link to="">Log in</Link>
					</button>
					<button className="request-button">Request</button>
					<button className="supply-button">Supply</button>
				</div>
			</div>
		</div>
	);
}
