import React from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import { API_URL } from '../services';
import qs from 'qs';

export const useOrderListManager = () => {
    const [orders, setOrders] = React.useState([]);

    const [loading, setLoading] = React.useState(false);

    React.useEffect(async () => {
        setLoading(true);
        const username = await EncryptedStorage.getItem('username');
        const jwt = await EncryptedStorage.getItem('jwt');
        if (!username || !jwt) {
            setOrders(null);
        } else {
            const query = qs.stringify(
                {
                    filters: {
                        user: {
                            username,
                        },
                    },
                    field: [
                        'id',
                        'address',
                        'phone',
                        'status',
                        'total_price',
                        'note',
                        'shop_address',
                        'createdAt',
                    ],
                    populate: {
                        order_items: {
                            field: [
                                'id',
                                'product_name',
                                'price',
                                'unit',
                                'quantity',
                            ],
                            populate: {
                                product: {
                                    field: [
                                        'id',
                                        'name',
                                        'description',
                                        'price',
                                        'image',
                                        'unit',
                                    ],
                                },
                            },
                        },
                    },
                },
                {
                    encodeValuesOnly: false,
                }
            );
            const response = await fetch(`${API_URL}/api/orders?${query}`, {
                method: 'GET',
            });
            if (response.ok) {
                const json = await response.json();
                console.log(json);
                setOrders(json.data);
            } else {
                setOrders(null);
            }
        }
        setLoading(false);
    }, []);

    return {
        orders,
        loading,
    };
};
