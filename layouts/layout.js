import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => (
	<div className="flex flex-col min-h-screen">
		<Head>
			<meta name="description" content="You're invited!" />
			<link rel="shortcut icon" href="/images/favicon.ico" />
		</Head>
		<header>
			<nav className="flex gap-4 justify-center items-center h-20 w-full">
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/users">
					<a>Users</a>
				</Link>
			</nav>
		</header>
		<main>{children}</main>
		<footer className="mt-auto">This is the footer</footer>
	</div>
);

export default Layout;
