import axios from "axios";
import {API_URL} from "../index";

export const getStatsByList = async (list) => {
    let data = [];
    let slugList = [];
    for (let i = 0; i < list.length; i++) {
        slugList.push(list[i].attributes.slug);
    }
    await axios.post(`${API_URL}/api/ratings/reviews`, {
        list: slugList
    }).then(response => {
        console.warn("Stats retrieved");
        data = response.data;
    }).catch(error => {
        console.warn("Error retrieving stats: " + error.response.data.error.message);
        data.error = error
    });
    return data;
    // eg: let products = await getProducts();
    //     let stats = await getStatsByList(products);
    //     let res = products.map(product => {
    //         let stat = stats.find(stat => stat.slug === product.attributes.slug);
    //         return {
    //             ...product,
    //             ...stat
    //         }
    //     })
    //     console.log(JSON.stringify(res));
}
export default getStatsByList;