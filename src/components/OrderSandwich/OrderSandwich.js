import { Link } from 'react-router-dom';

const OrderSandwich = () => {
	return (
		<div>
			<label htmlFor="slices_of_bread ">number of slices:</label>
			<input type="number" name="slices_of_bread" />

			<Link to="/order_ready">
				<button>Continue</button>
			</Link>
		</div>
	);
};

export default OrderSandwich;
