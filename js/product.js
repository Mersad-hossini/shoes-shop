let showsDatas = [
    {
        id:1, 
        title:'Sport SHOE', 
        description:'LOREM IPSUM, OR LIPSUM AS IT IS SOMETIMES KNOWN (Sport SHOE)', 
        urlImage:'images/1.png',
        price: '$90'
    },
    {
        id:2, 
        title:'WOMEN SHOE', 
        description:'LOREM IPSUM, OR LIPSUM AS IT IS SOMETIMES KNOWN (WOMEN SHOE)', 
        urlImage:'images/2.png',
        price: '$40'
    },
    {
        id:3, 
        title:'BOOTS', 
        description:'LOREM IPSUM, OR LIPSUM AS IT IS SOMETIMES KNOWN (BOOTS)', 
        urlImage:'images/3.png',
        price: '$220'
    },
]

let backBtn = document.getElementById("back")
let locationParams = new URLSearchParams(location.search)
let mainProductId = locationParams.get('id')

let mainShow = showsDatas.find((item) => {
    return item.id === Number(mainProductId)
})

if(mainShow) {
    let productShow = `
    <div class="details">
        <div class="desc">
            <h1>${mainShow.title}</h1>
            <p>${mainShow.description}</p>
        </div>
        <div class="image">
            <img src="${mainShow.urlImage}" />
        </div>
    </div>`
    document.body.insertAdjacentHTML('beforeend' , productShow)
} else {
    location.href = 'http://127.0.0.1:5500/index.html'
}

backBtn.addEventListener("click" , () => {
    history.back()
})