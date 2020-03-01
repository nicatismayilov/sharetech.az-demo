let mainNewsBox = document.querySelector('.main-news-box')
console.log(mainNewsBox.offsetWidth)

let mainNews = document.querySelector('.main-news')
window.innerWidth >= 992 ? mainNews.style.height = `${mainNewsBox.offsetWidth * .76}px` : mainNews.style.height = 'auto'
window.addEventListener('resize', () => {
    window.innerWidth >= 992 ? mainNews.style.height = `${mainNewsBox.offsetWidth * .76}px` : mainNews.style.height = 'auto'
})


// ------------------------------------------------------------------------------------------------------

const createNewsElement = newsItem => {
    let elem = document.createElement('div')
    elem.classList.add('additional-news-item')

    let elemImg = document.createElement('img')
    elemImg.classList.add('additional-news-item-img')
    elemImg.src = newsItem.img
    elem.appendChild(elemImg)

    let elemInfo = document.createElement('div')
    elemInfo.classList.add('additional-news-item-info')

    let elemTitleSub = document.createElement('span')
    elemTitleSub.classList.add('additional-news-item-title-sub')
    elemTitleSub.innerHTML = `${newsItem.titleSub}`
    elemInfo.appendChild(elemTitleSub)

    let elemTitleMain = document.createElement('h2')
    elemTitleMain.classList.add('additional-news-item-title-main')
    elemTitleMain.innerHTML = `${newsItem.titleMain}`
    elemInfo.appendChild(elemTitleMain)

    let elemFigures = document.querySelector('.additional-news-item-figures')
    elemInfo.appendChild(elemFigures)
    elem.appendChild(elemInfo)

    return elem
}

const newsItemsArray = [
    {
        img: 'imgs/news-img-1.png',
        titleSub: 'Social, Android, Mobile',
        titleMain: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        img: 'imgs/news-img-2.png',
        titleSub: 'Social, Android, Mobile',
        titleMain: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        img: 'imgs/news-img-3.png',
        titleSub: 'Social, Android, Mobile',
        titleMain: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        img: 'imgs/news-img-4.png',
        titleSub: 'Social, Android, Mobile',
        titleMain: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        img: 'imgs/news-img-5.png',
        titleSub: 'Social, Android, Mobile',
        titleMain: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        img: 'imgs/news-img-5.png',
        titleSub: 'Social, Android, Mobile',
        titleMain: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        img: 'imgs/news-img-1.png',
        titleSub: 'Social, Android, Mobile',
        titleMain: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        img: 'imgs/news-img-4.png',
        titleSub: 'Social, Android, Mobile',
        titleMain: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        img: 'imgs/news-img-1.png',
        titleSub: 'Social, Android, Mobile',
        titleMain: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        img: 'imgs/news-img-1.png',
        titleSub: 'Social, Android, Mobile',
        titleMain: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        img: 'imgs/news-img-2.png',
        titleSub: 'Social, Android, Mobile',
        titleMain: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        img: 'imgs/news-img-5.png',
        titleSub: 'Social, Android, Mobile',
        titleMain: 'Lorem ipsum dolor sit amet consectetur.'
    },
]

let additionalNewsSection = document.querySelector('.additional-news-container')
let countShownNews = 0
for (countShownNews; countShownNews < 9; countShownNews++) {
    additionalNewsSection.appendChild(createNewsElement(newsItemsArray[countShownNews]))
}

let addNewsBtn = document.querySelector('.add-news')
addNewsBtn.addEventListener('click', () => {
    for(countShownNews; countShownNews < (countShownNews + 3); countShownNews++) {
        if (countShownNews >= newsItemsArray.length) {
            console.log('All news has been displayed')
            break
        }
        else {
            additionalNewsSection.appendChild(createNewsElement(newsItemsArray[countShownNews]))
        }
    }
})

// -------------------------------------------------------------------------------------------------------------
