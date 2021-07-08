import CreateOrder from '../CreateOrder/CreateOrder';
import OrderPizza from '../OrderPizza/OrderPizza';
import OrderSoup from '../OrderSoup/OrderSoup';
import OrderSandwich from '../OrderSandwich/OrderSandwich';
import OrderReady from '../OrderReady/OrderReady';

const MainScreen = () => {
	return (
		<>
			<CreateOrder />
			<OrderPizza />
			<OrderSoup />
			<OrderSandwich />
			<OrderReady />
		</>
	);
};

export default MainScreen;
