import Head from 'next/head';
import favicon from '../public/images/favicon.ico';

const CustomHead = ({ title = "You're Invited!" }) => (
	<Head>
		<link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
		<title>{title}</title>
	</Head>
);

export default CustomHead;
