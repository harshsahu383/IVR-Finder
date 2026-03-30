function prepareFood(food){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Prepared' + food);
        },1000);
    });}