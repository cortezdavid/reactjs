const product = [
    {id: 1, title: "Future State Aquaman #1", price: 435, pictureUrl: "../img/Future-State-Aquaman-1-2021.jpg"},
    {id: 2, title: "Future State Aquaman #2", price: 376, pictureUrl: "../img/Future-State-Aquaman-2-2021.jpg"},
    {id: 3, title: "Future State Batman Superman #1", price: 345, pictureUrl: "../img/Future-State-Batman-Superman-1-2021.jpg"},
    {id: 4, title: "Future State Batman Superman #2", price: 367, pictureUrl: "../img/Future-State-Batman-Superman-2-2021.jpg"}
]


export const getFetch = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(product)
    }, 2000);
})