import React from "react"
import Helmet from "react-helmet"

const ReactHelmet = ({ children }) => {
	console.log(children);
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>
					{children && children.length > 15
						? children.slice(0, 15) + "... -"
						: children + " -"}
					Rapid Dealer
				</title>
			</Helmet>
		</div>
	)
}

export default ReactHelmet
