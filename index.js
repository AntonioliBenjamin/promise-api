require('dotenv').config();
const userApiUrl = process.env.USER_API;
const foodApiUrl = process.env.FOOD_API;
const axios = require('axios');
const { updateShorthandPropertyAssignment } = require('typescript');


const userApi = axios.get(`${userApiUrl}/api/`);
const foodList = axios.get(`${foodApiUrl}/learning-area/javascript/apis/fetching-data/can-store/products.json`);

// todo transform this in a new async await function.
function getUserInfosWithThen() {   
    let title = userApi.then(response => {
        console.log(response.data.results[0].name.title)
            let firstName = userApi.then(response => {
                console.log(response.data.results[0].name.first)
                    let lastName = userApi.then(response => {
                        console.log(response.data.results[0].name.last)
                            let food = foodList.then(response => {
                                console.log(response.data)
                                
                            })
                    })
            })
    })

}


async function getUserInfosWithAsyncAwait() {
    const AwaituserApi = await axios.get(`${userApiUrl}/api/`);
    const AwaitfoodList = await axios.get(`${foodApiUrl}/learning-area/javascript/apis/fetching-data/can-store/products.json`);
    console.log(AwaituserApi.data.results[0].name.title + " " + AwaituserApi.data.results[0].name.first + " " + AwaituserApi.data.results[0].name.last);
    console.log(AwaitfoodList.data)
}


(async () => {
    //getUserInfosWithAsyncAwait();
    getUserInfosWithThen()
})();