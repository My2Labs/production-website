// newsapi.org api key: 1c411d3d57cf491aa3ed44f63fba5842
// GET https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=1c411d3d57cf491aa3ed44f63fba5842
//PARNELL HELPED ME WITH REFACTORING, AND HE DESERVES A MEDAL!

const newsApiUrl = 'https://sharron-news-api-proxy.herokuapp.com/'
const spinner = document.querySelector('.spinner')

function fetchArticle(url, index) {
    fetch(url)
        .then(parseJson)
        .then(response => {
            const articleHeader = document.querySelector(`.articleheader${index}`)
            const articleTitle = document.querySelector(`.article${index}`)
            const article = response.articles[index]
            articleHeader.append(article.title)
            articleTitle.append(article.description)
            return article
        }).then(response => {
            const articleImg = document.querySelector(`.articleimg${index}`)
            const img = document.createElement('img')
            img.src = `${response.urlToImage}`
            img.setAttribute = ("alt", "Lead Image for ${article.title} article")
            articleImg.append(img)
            const articleLink = document.querySelector(`.articlelink${index}`)
            articleLink.href = response.url
            spinner.classList.add('hidden')
        })
}

function parseJson(response) {
    return response.json()
}

fetchArticle(newsApiUrl, 1)
fetchArticle(newsApiUrl, 2)
fetchArticle(newsApiUrl, 3)
fetchArticle(newsApiUrl, 4)