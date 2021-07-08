const CreateOrder = () => {
	return (
		<>
			<form>
				<label htmlFor="dish_name">dish name:</label>
				<input type="text" name="dish_name" />

				<label htmlFor="preparation_time">preparation time:</label>
				<input type="text" name="preparation_time" />

				<label htmlFor="dish_type">dish type:</label>
				<select name="dish_type">
					<option value="pizza">pizza</option>
					<option value="soup">soup</option>
					<option value="sandwich">sandwich</option>
				</select>
			</form>
		</>
	);
};

export default CreateOrder;
