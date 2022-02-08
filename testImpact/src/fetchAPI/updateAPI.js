import * as types from '../constant'

export default function updateAPI(data){
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3004/student?id=${data.studentId}&limit=${types.LIMIT}&activePage=${data.activePage}&search=${data.searchTxt}`;
		// console.log(url,'uel updateeeeeeeeeeee');
		// console.log(data.updatePhoneName,"dataaaaa");
        fetch(url, { 
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({"name": data.updateTxt})
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