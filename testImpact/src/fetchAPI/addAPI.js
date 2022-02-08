import * as types from '../constant'

export default function postApi(data){
    return new Promise((resolve, reject) => {
		// console.log(data,"api dataaaaaaaaaaaaa");
		const url = `http://localhost:3004/student?limit=${types.LIMIT}&activePage=${data.activePage}&search=${data.searchTxt}`;
        fetch(url, { 
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({"name": data.addTxt})
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res)
        })
        .catch((error) =>{
            reject(error);
        })
    })
    }