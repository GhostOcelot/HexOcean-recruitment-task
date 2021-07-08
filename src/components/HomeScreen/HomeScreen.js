import { useHistory } from 'react-router-dom';
import classes from './HomeScreen.module.css';

const MainScreen = () => {
	let history = useHistory();

	const handleClick = () => {
		history.push('/create_order');
	};

	return (
		<div className="order_window">
			<h1 className={classes.header}>Please place your order!</h1>
			<button onClick={handleClick}>Continue</button>
		</div>
	);
};

export default MainScreen;
