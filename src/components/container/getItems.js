const item=[
    {
        title: 'Gorra Roja',
        price: 123,
        description: 'descripcion del producto',
        url: 'https://static4.depositphotos.com/1000261/339/i/600/depositphotos_3394871-stock-photo-red-baseball-cap.jpg'
        },
        {
            title: 'Gorra Azul',
            price: 123,
            description: 'descripcion del producto',
            url: 'https://promocionalesnw.com/463-thickbox_default/gorra.jpg'
            }
]



const task = new Promise((res)=>{
    res(item)
}, 2000)

export const getItems=()=>{
    return(
        task
    )
}
