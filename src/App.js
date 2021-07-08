import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen/HomeScreen';
import CreateOrder from './components/CreateOrder/CreateOrder';
import OrderPizza from './components/OrderPizza/OrderPizza';
import OrderSoup from './components/OrderSoup/OrderSoup';
import OrderSandwich from './components/OrderSandwich/OrderSandwich';
import OrderReady from './components/OrderReady/OrderReady';
import OrderContextProvider from './context/OrderContext';

function App() {
	return (
		<div className="App">
			<OrderContextProvider>
				<BrowserRouter>
					<Route exact path="/" component={HomeScreen} />
					<Route path="/create_order" component={CreateOrder} />
					<Route path="/order_pizza" component={OrderPizza} />
					<Route path="/order_soup" component={OrderSoup} />
					<Route path="/order_sandwich" component={OrderSandwich} />
					<Route path="/order_ready" component={OrderReady} />
				</BrowserRouter>
			</OrderContextProvider>
		</div>
	);
}

export default App;
