import { useHistory } from 'react-router-dom';
import classes from './OrderReady.module.css';

const OrderReady = () => {
	let history = useHistory();

	return (
		<>
			<div className="order_window">
				<h1 className={classes.header}>Thank you for placing your order!</h1>
				<button onClick={() => history.push('/create_order')}>order another dish</button>
			</div>
		</>
	);
};

export default OrderReady;
