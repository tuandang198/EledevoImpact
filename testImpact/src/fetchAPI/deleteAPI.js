import * as types from '../constant'

export default function deleteAPI(data){
	console.log(data, 'dataaaaaa');
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3004/student?id=${data.studentId}&limit=${types.LIMIT}&activePage=${data.activePage}&search=${data.searchTxt}`;
        fetch(url, { 
			method: 'DELETE'
            // headers: {'content-type': 'application/json'},
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