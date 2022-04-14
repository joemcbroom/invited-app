import Head from 'next/head';
import CustomHead from '../components/customHead';
import Layout from '../layouts/layout';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => (
	<>
		<CustomHead />
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</>
);

export default App;
