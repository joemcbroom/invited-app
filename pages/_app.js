import CustomHead from '../components/customHead';
import Layout from '../layouts/layout';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

const App = ({ Component, pageProps: { session, ...pageProps } }) => (
	<SessionProvider session={session}>
		<CustomHead />
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</SessionProvider>
);

export default App;
