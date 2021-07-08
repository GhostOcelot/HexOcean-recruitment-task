import { Link } from 'react-router-dom';
import classes from './OrderReady.module.css';

const OrderReady = () => {
	return (
		<>
			<div className="order_window">
				<h1 className={classes.header}>Thank you for placing your order!</h1>
				<Link to="/">
					<button>order another dish</button>
				</Link>
			</div>
		</>
	);
};

export default OrderReady;
