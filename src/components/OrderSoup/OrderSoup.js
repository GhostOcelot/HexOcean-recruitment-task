import { useState } from 'react';

const OrderSoup = () => {
	const [spiciness, setSpiciness] = useState(4);

	const changeSpiciness = e => {
		setSpiciness(e.target.value);
	};

	return (
		<div>
			<label htmlFor="spiciness_scale">spiciness scale:</label>
			<input
				onChange={e => changeSpiciness(e)}
				type="range"
				name="spiciness_scale"
				min="1"
				max="10"
				value={spiciness}
			/>
			<span>{spiciness}</span>
		</div>
	);
};

export default OrderSoup;
