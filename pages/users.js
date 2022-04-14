export const getServerSideProps = async () => {
	const res = await fetch('http://localhost:3000/api/users');
	const users = await res.json();
	return {
		props: {
			users,
		},
	};
};

const Users = ({ users }) => {
	return (
		<>
			<h1 className="text-3xl font-bold text-center">Users</h1>
			{users.map((user) => (
				<div key={user.id}>
					<p>{user.name}</p>
					<p>{user.email}</p>
					<p>{Date(user.createdAt)}</p>
				</div>
			))}
		</>
	);
};

export default Users;
