import { Link } from 'react-router-dom';

const MainScreen = () => {
	return (
		<>
			<h1>Please place your order!</h1>
			<Link to="/create_order">
				<button>Continue</button>
			</Link>
		</>
	);
};

export default MainScreen;
