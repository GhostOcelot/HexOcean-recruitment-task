import { useState, createContext } from 'react';

export const OrderContext = createContext();

const OrderContextProvider = props => {
	const [orderDetails, setOrderDetails] = useState({});

	return (
		<OrderContext.Provider value={[orderDetails, setOrderDetails]}>
			{props.children}
		</OrderContext.Provider>
	);
};

export default OrderContextProvider;
