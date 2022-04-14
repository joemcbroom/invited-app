import Head from 'next/head';
import Link from 'next/link';
import StyledLink from '../components/styledLink';

const Layout = ({ children }) => (
	<div className="flex flex-col min-h-screen">
		<Head>
			<meta name="description" content="You're invited!" />
			<link rel="shortcut icon" href="/images/favicon.ico" />
		</Head>
		<header>
			<nav className="flex gap-4 justify-center items-center h-20 w-full">
				<StyledLink href="/">
					<a>Home</a>
				</StyledLink>
				<StyledLink href="/users">
					<a>Users</a>
				</StyledLink>
			</nav>
		</header>
		<main className="my-auto">{children}</main>
		<footer className="mt-auto">This is the footer</footer>
	</div>
);

export default Layout;
