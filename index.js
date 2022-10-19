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
            userApi.then(response => {
                console.log(response.data.results[0].name.first)
                    userApi.then(response => {
                        console.log(response.data.results[0].name.last)
                            foodList.then(response => {
                                const obj = response.data;
                                const foodArr = []
                                    for (let i =0; i < obj.length; i++) {    
                                        foodArr.push(obj[i].name);
                                    }  
                                    console.log (foodArr)
                                
                            })
                    })
            })
    })

}

async function getUserInfosWithAsyncAwait() {
    const awaituserApi = await userApi
    const awaitfoodList = await foodList
    console.log(awaituserApi.data.results[0].name.title + " " + awaituserApi.data.results[0].name.first + " " + awaituserApi.data.results[0].name.last);

    const obj = awaitfoodList.data;
    const foodArr = []
    for (let i =0; i < obj.length; i++) {    
        foodArr.push(obj[i].name);
     }  
   console.log (foodArr)
}

(async () => {
    getUserInfosWithAsyncAwait();
    //getUserInfosWithThen();
})();