// newsapi.org api key: 1c411d3d57cf491aa3ed44f63fba5842
// GET https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=1c411d3d57cf491aa3ed44f63fba5842

const newsApiUrl = 'https://sharron-news-api-proxy.herokuapp.com/'
const spinner = document.querySelector('.spinner')

fetch(newsApiUrl)
    .then(response => response.json())
    .then(response => {
        const articleheader1 = document.querySelector('.articleheader1')
        const article1 = document.querySelector('.article1')
        const article = response.articles[0]
        articleheader1.append(article.title)
        article1.append(article.description)
        return article
    }).then(response => {
        const articleimg1 = document.querySelector('.articleimg1')
        const img = document.createElement('img')
        img.src = `${response.urlToImage}`
        img.setAttribute = ("alt", "Article Image")
        articleimg1.append(img)
        const articlelink1 = document.querySelector('.articlelink1')
        articlelink1.href = response.url
        spinner.classList.add('hidden')
        main.append(response)
    })

fetch(newsApiUrl)
    .then(response => response.json())
    .then(response => {
        const articleheader2 = document.querySelector('.articleheader2')
        const article2 = document.querySelector('.article2')
        const article = response.articles[1]
        articleheader2.append(article.title)
        article2.append(article.description)
        return article
    }).then(response => {
        const articleimg2 = document.querySelector('.articleimg2')
        const img = document.createElement('img')
        img.src = `${response.urlToImage}`
        img.setAttribute = ("alt", "Article Image")
        articleimg2.append(img)
        const articlelink2 = document.querySelector('.articlelink2')
        articlelink2.href = response.url
    })

fetch(newsApiUrl)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        const articleheader3 = document.querySelector('.articleheader3')
        const article3 = document.querySelector('.article3')
        const article = response.articles[2]
        articleheader3.append(article.title)
        article3.append(article.description)
        return article
    }).then(response => {
        const articleimg3 = document.querySelector('.articleimg3')
        const img = document.createElement('img')
        img.src = `${response.urlToImage}`
        img.setAttribute = ("alt", "Article Image")
        articleimg3.append(img)
        const articlelink3 = document.querySelector('.articlelink3')
        articlelink3.href = response.url
    })

fetch(newsApiUrl)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        const articleheader4 = document.querySelector('.articleheader4')
        const article4 = document.querySelector('.article4')
        const article = response.articles[3]
        articleheader4.append(article.title)
        article4.append(article.description)
        return article
    }).then(response => {
        const articleimg4 = document.querySelector('.articleimg4')
        const img = document.createElement('img')
        img.src = `${response.urlToImage}`
        img.setAttribute = ("alt", "Article Image")
        articleimg4.append(img)
        const articlelink4 = document.querySelector('.articlelink4')
        articlelink4.href = response.url
    })