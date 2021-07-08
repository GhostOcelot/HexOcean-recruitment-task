import { Link } from 'react-router-dom';

const OrderPizza = () => {
	return (
		<div>
			<label htmlFor="no_of_slices">number of slices:</label>
			<input type="number" name="no_of_slices" />

			<label htmlFor="diameter">diameter: </label>
			<input type="number" step="0.1" name="diameter" />

			<Link to="/order_ready">
				<button>Continue</button>
			</Link>
		</div>
	);
};

export default OrderPizza;
