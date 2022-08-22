let brandsData = [
    { title: 'Apple', link: '#', imageUrl: '../imgs/brands/apple.svg'},
    { title: 'Sony', link: '#', imageUrl: '../imgs/brands/sony.svg'},
    { title: 'Lenovo', link: '#', imageUrl: '../imgs/brands/lenovo.svg'},
    { title: 'Acer', link: '#', imageUrl: '../imgs/brands/acer.svg'},
    { title: 'ViewSonic', link: '#', imageUrl: '../imgs/brands/view-sonic.svg'},
    { title: 'HP', link: '#', imageUrl: '../imgs/brands/hp.svg'},
    { title: 'Samsung', link: '#', imageUrl: '../imgs/brands/samsung.svg'},
    { title: 'Bosch', link: '#', imageUrl: '../imgs/brands/bosch.svg'},
    { title: 'Xiaomi', link: '#', imageUrl: '../imgs/brands/xiaomi.svg'},
    { title: 'Nokia', link: '#', imageUrl: '../imgs/brands/nokia.svg'},
    { title: 'Sony', link: '#', imageUrl: '../imgs/brands/sony.svg'},
    { title: 'Huawei', link: '#', imageUrl: '../imgs/brands/huawei.svg'}
];
let brandItemsCount = 6;

function setMedia() {
    if (window.matchMedia('(max-width: 1119px, min-width: 768px)').matches) {
        console.log('desktop');
    }
    if(window.matchMedia('(min-width: 768px)').matches) { // от 768
        if (window.matchMedia( '(min-width: 1120px)').matches) { // от 1120 и больше
            brandItemsCount = 8;
        }
        else { // от 768 до 1120
            brandItemsCount = 6;
        }
        console.log('desktop');
        toDesktopMod();
    } else { // меньше 768
        console.log('mobile');
        brandItemsCount = brandsData.length;
        toMobileMod()
    }
}

setMedia();

function toMobileMod() {
    
}

function toDesktopMod() {
    let showMore = document.querySelector('.show-more');
    let additionalBrandItems = [];

    showMore.addEventListener('click', function () {
        if (showMore.textContent === 'Показать все') {
            for(let i = brandItems.children.length-1; i < brandsData.length; i++) {
                additionalBrandItems.push(makeBrandItem(brandsData[i]));
            }
            showMore.textContent = 'Скрыть'; 
        }
        else {
            while(additionalBrandItems.length>0) {
                additionalBrandItems.pop().remove();
            }
            showMore.textContent = 'Показать все';
        }
    });
}


let brandItemTemplate = document.querySelector('.brand-items__brand-item-template').content;
let brandItems = document.querySelector('.brand-list__brand-items');

function makeBrandItem(brandData) {
    let brandItem = brandItemTemplate.cloneNode(true).querySelector('.brand-item');
    let brandItemLogo = brandItem.querySelector('.brand-item__logo');
    brandItemLogo.src = brandData.imageUrl;
    brandItemLogo.alt = brandData.title;

    let brandItemButton = brandItem.querySelector('.brand-item__button');
    brandItemButton.href = brandData.link;

    brandItems.appendChild(brandItem);
    return brandItem;
}

for (let i = 0; i < brandItemsCount; i++) {
    makeBrandItem(brandsData[i]);
}