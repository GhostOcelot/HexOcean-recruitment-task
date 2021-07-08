import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';

const CreateOrder = () => {
	const [showWarning, setShowWarning] = useState(false);
	const [orderDetails, setOrderDetails] = useContext(OrderContext);
	let history = useHistory();

	const changeOrderDetails = e => {
		setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (orderDetails.name && orderDetails.preparation_time && orderDetails.type) {
			if (orderDetails.preparation_time.length === 5) {
				setOrderDetails({
					...orderDetails,
					preparation_time: `${orderDetails.preparation_time}:00`,
				});
			}
			setShowWarning(false);
			history.push(`/order_${orderDetails.type}`);
		} else {
			setShowWarning(true);
		}
	};

	return (
		<div className="order_window">
			<form onSubmit={e => handleSubmit(e)}>
				<div>
					<label htmlFor="name">dish name:</label>
				</div>
				<div>
					<input
						type="text"
						name="name"
						value={orderDetails.name}
						onChange={e => changeOrderDetails(e)}
					/>
				</div>

				<div>
					<label htmlFor="preparation_time">preparation time:</label>
				</div>
				<div>
					<input
						type="time"
						step="1"
						name="preparation_time"
						value={orderDetails.preparation_time}
						onChange={e => changeOrderDetails(e)}
					/>
				</div>

				<div>
					<label htmlFor="type">dish type:</label>
				</div>
				<div>
					<select value={orderDetails.type} onChange={e => changeOrderDetails(e)} name="type">
						<option value=""></option>
						<option value="pizza">pizza</option>
						<option value="soup">soup</option>
						<option value="sandwich">sandwich</option>
					</select>
				</div>
				<button>Continue</button>
				<p className={showWarning ? 'warning' : 'warning hide'}>PLEASE FILL ALL THE FIELDS</p>
			</form>
		</div>
	);
};

export default CreateOrder;
