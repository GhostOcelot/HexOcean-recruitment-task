import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';

const OrderSandwich = () => {
	const [orderDetails, setOrderDetails] = useContext(OrderContext);
	let history = useHistory();

	const changeOrderDetails = e => {
		setOrderDetails({ ...orderDetails, [e.target.name]: Number(e.target.value) });
	};

	const orderSandwich = () => {
		if (orderDetails.slices_of_bread) {
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
				<label htmlFor="slices_of_bread ">number of slices:</label>
			</div>
			<div>
				<input type="number" min="1" name="slices_of_bread" onChange={e => changeOrderDetails(e)} />
			</div>

			<button onClick={orderSandwich}>Continue</button>
		</div>
	);
};

export default OrderSandwich;
