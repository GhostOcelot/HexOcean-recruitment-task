import { Link } from 'react-router-dom';
import { useState } from 'react';

const CreateOrder = () => {
	const [orderType, setOrderType] = useState('pizza');

	const changeOrderType = e => {
		setOrderType(e.target.value);
	};

	return (
		<>
			<form>
				<label htmlFor="dish_name">dish name:</label>
				<input type="text" name="dish_name" />

				<label htmlFor="preparation_time">preparation time:</label>
				<input type="text" name="preparation_time" />

				<label htmlFor="dish_type">dish type:</label>
				<select onChange={e => changeOrderType(e)} name="dish_type">
					<option value="pizza">pizza</option>
					<option value="soup">soup</option>
					<option value="sandwich">sandwich</option>
				</select>

				<Link to={`/order_${orderType}`}>
					<button>Continue</button>
				</Link>
			</form>
		</>
	);
};

export default CreateOrder;
