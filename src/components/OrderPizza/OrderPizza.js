import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';

const OrderPizza = () => {
	const [orderDetails, setOrderDetails] = useContext(OrderContext);
	let history = useHistory();

	const changeOrderDetails = e => {
		setOrderDetails({ ...orderDetails, [e.target.name]: Number(e.target.value) });
	};

	const orderPizza = () => {
		if (orderDetails.no_of_slices && orderDetails.diameter) {
			fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(orderDetails),
			})
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setOrderDetails({});
					history.push('/order_ready');
				})
				.catch(err => console.log(err));
		}
	};

	return (
		<div className="order_window">
			<div>
				<label htmlFor="no_of_slices">number of slices:</label>
			</div>
			<div>
				<input type="number" min="1" name="no_of_slices" onChange={e => changeOrderDetails(e)} />
			</div>
			<div>
				<label htmlFor="diameter">diameter: </label>
			</div>
			<div>
				<input
					type="number"
					min="1"
					step="0.1"
					name="diameter"
					onChange={e => changeOrderDetails(e)}
				/>
			</div>

			<button onClick={orderPizza}>Continue</button>
		</div>
	);
};

export default OrderPizza;
