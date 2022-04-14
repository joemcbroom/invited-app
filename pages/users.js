import useSwr from 'swr';
import LoadingSpinner from '../components/loadingSpinner';
import fetcher from '../utils/fetcher';

const Users = () => {
	const { data: users, error } = useSwr('/api/users', fetcher);
	if (error) return <div>failed to load</div>;
	if (!users) return <LoadingSpinner />;
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
