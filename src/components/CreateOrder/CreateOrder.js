import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';

const CreateOrder = () => {
	const [orderDetails, setOrderDetails] = useContext(OrderContext);
	let history = useHistory();

	const changeOrderDetails = e => {
		setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (orderDetails.name && orderDetails.preparation_time && orderDetails.type) {
			history.push(`/order_${orderDetails.type}`);
		}
	};

	return (
		<div className="order_window">
			<form onSubmit={e => handleSubmit(e)}>
				<div>
					<label htmlFor="name">dish name:</label>
				</div>
				<div>
					<input type="text" name="name" onChange={e => changeOrderDetails(e)} />
				</div>

				<div>
					<label htmlFor="preparation_time">preparation time:</label>
				</div>
				<div>
					<input
						type="time"
						step="1"
						name="preparation_time"
						onChange={e => changeOrderDetails(e)}
					/>
				</div>

				<div>
					<label htmlFor="type">dish type:</label>
				</div>
				<div>
					<select onChange={e => changeOrderDetails(e)} name="type">
						<option value=""></option>
						<option value="pizza">pizza</option>
						<option value="soup">soup</option>
						<option value="sandwich">sandwich</option>
					</select>
				</div>
				<button>Continue</button>
			</form>
		</div>
	);
};

export default CreateOrder;
