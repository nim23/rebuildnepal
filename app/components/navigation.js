import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';

/**
 * Navigation component for the app
 * Info: If you declare a <Link> component, for which no route has been defined,
 * react-router will throw an error.
 * @class NavigationComponent
 */
const Navigation = React.createClass({
	render() {
		return (
			<Navbar brand={<Link to='pledge' path='/'>Kaha.co : Rebuild Nepal</Link>}>
				<Nav>
					<li>
						<Link to='project' path='/project'>
							Projects
						</Link>
					</li>
					<li>
						<Link to='project' path='/project'>
							Partners
						</Link>
					</li>
					<li>
						<Link to='howitworks' path='/howitworks'>
							How does it work
						</Link>
					</li>
			</Nav>
		</Navbar>
		);
	}
});

export default Navigation;
