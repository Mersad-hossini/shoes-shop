let showsDatas = [
    {
        id:1, 
        title:'Sport SHOE', 
        description:'LOREM IPSUM, OR LIPSUM AS IT IS SOMETIMES KNOWN', 
        urlImage:'images/1.png',
        price: '$90'
    },
    {
        id:2, 
        title:'WOMEN SHOE', 
        description:'LOREM IPSUM, OR LIPSUM AS IT IS SOMETIMES KNOWN', 
        urlImage:'images/2.png',
        price: '$40'
    },
    {
        id:3, 
        title:'BOOTS', 
        description:'LOREM IPSUM, OR LIPSUM AS IT IS SOMETIMES KNOWN', 
        urlImage:'images/3.png',
        price: '$220'
    },
]

let showsContainer = document.querySelector(".container")
let showsFragment = document.createDocumentFragment()

showsDatas.forEach((item) => {
    let shows = `
        <div class="product-card">
            <h1>${item.title}</h1>
            <p>${item.description}</p>
            <div class="product-pic" style="background-image: url(${item.urlImage});"></div>
            <div class="product-info">
                <div class="product-price">${item.price}</div>
                <a href="product.html?id=${item.id}" class="product-button">See More</a>
            </div>
        </div>`;
    let fragment = document.createRange().createContextualFragment(shows);
    showsFragment.appendChild(fragment);
})

showsContainer.append(showsFragment)