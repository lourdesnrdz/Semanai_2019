import React from 'react'
import Link from 'next/link'

const Nav = (props) => (
	<nav>
		<ul>
			<li>
				<Link href='/'>
					<a>{props.title}</a>
				</Link>
			</li>
		</ul>
	</nav>
)

export default Nav