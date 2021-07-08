import { useState, createContext } from 'react';

export const OrderContext = createContext();

const OrderContextProvider = props => {
	const [orderDetails, setOrderDetails] = useState({ name: '', preparation_time: '', type: '' });

	return (
		<OrderContext.Provider value={[orderDetails, setOrderDetails]}>
			{props.children}
		</OrderContext.Provider>
	);
};

export default OrderContextProvider;
