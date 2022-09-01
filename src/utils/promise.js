const OK = true;

const desafio = (task) => {
    return new Promise((resolve, reject) => {
        if(OK){
            setTimeout(() =>{
                resolve(task);
            })
        } else {
            reject('Error')
        }
    })
}

export default desafio;