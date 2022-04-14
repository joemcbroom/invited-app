import { useSession, signIn, signOut } from 'next-auth/react';

const CheckAuthenticated = () => {
	const { data: session } = useSession();
	if (session) {
		return (
			<div className="flex flex-col justify-center items-center absolute right-0 top-0 p-6 text-xs">
				Signed in as {session.user.email} <br />
				<button
					className=" bg-teal-400 text-black px-2 py-1 text-base rounded cursor-pointer hover:bg-teal-500"
					onClick={() => signOut()}
				>
					Sign out
				</button>
			</div>
		);
	}
	return (
		<div className="flex flex-col justify-center items-center absolute right-0 top-0 p-6">
			Not signed in <br />
			<button
				className=" bg-teal-400 text-black px-2 py-1 rounded cursor-pointer hover:bg-teal-500"
				onClick={() => signIn()}
			>
				Sign in
			</button>
		</div>
	);
};

export default CheckAuthenticated;
