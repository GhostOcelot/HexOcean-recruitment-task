import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';
import classes from './OrderSoup.module.css';

const OrderSoup = () => {
	const [spiciness, setSpiciness] = useState(4);
	const [orderDetails, setOrderDetails] = useContext(OrderContext);
	let history = useHistory();

	const changeOrderDetails = e => {
		setOrderDetails({ ...orderDetails, [e.target.name]: Number(e.target.value) });
		setSpiciness(e.target.value);
	};

	const orderSoup = () => {
		if (orderDetails.spiciness_scale) {
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
				<label htmlFor="spiciness_scale">spiciness scale:</label>
			</div>
			<div>
				<input
					onChange={e => changeOrderDetails(e)}
					type="range"
					name="spiciness_scale"
					min="1"
					max="10"
					value={spiciness}
				/>

				<p className={classes.spice_level}>{spiciness}</p>
			</div>

			<button onClick={orderSoup}>Continue</button>
		</div>
	);
};

export default OrderSoup;
