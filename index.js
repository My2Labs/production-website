// newsapi.org api key: 1c411d3d57cf491aa3ed44f63fba5842
//GET https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=1c411d3d57cf491aa3ed44f63fba5842

const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=1c411d3d57cf491aa3ed44f63fba5842`

fetch(newsApiUrl)
    .then(response => response.json())
    .then(response => {
        const flexheader1 = document.querySelector(".flexheader1")
        const flexarticle1 = document.querySelector(".flexarticle1")
        const article = response.articles[0]
        flexheader1.append(article.title)
        flexarticle1.append(article.description)
        return article
    }).then(response => {
        const fleximg1 = document.querySelector(".fleximg1")
        const img = document.createElement("img")
        img.src = "https://scx2.b-cdn.net/gfx/news/hires/2022/scientists-have-spotte.jpg";
        fleximg1.append(img)
        return img.src
    }).then(response => {
        const flexlink1 = document.querySelector(".flexlink1")
        flexlink1.href = ` https://phys.org/news/2022-04-scientists-farthest-galaxy.html`
        flexlink1.append(flexlink1)
    })

fetch(newsApiUrl)
    .then(response => response.json())
    .then(response => {
        const flexheader2 = document.querySelector(".flexheader2")
        const flexarticle2 = document.querySelector(".flexarticle2")
        const article = response.articles[1]
        flexheader2.append(article.title)
        flexarticle2.append(article.description)
        return article
    }).then(response => {
        const fleximg2 = document.querySelector(".fleximg2")
        const img = document.createElement("img")
        img.src = "https://scitechdaily.com/images/Ultra-Hot-Jupiter-Sized-Exoplanet-Illustration-scaled.jpg";
        fleximg2.append(img)
        return img.src
    }).then(response => {
        const flexlink2 = document.querySelector(".flexlink2")
        flexlink2.href = `https://scitechdaily.com/raining-vaporized-rock-hubble-probes-bizarre-weather-conditions-on-sizzling-worlds/`
        flexlink2.append(flexlink2)
    })


fetch(newsApiUrl)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        const flexheader3 = document.querySelector(".flexheader3")
        const flexarticle3 = document.querySelector(".flexarticle3")
        const article = response.articles[5]
        flexheader3.append(article.title)
        flexarticle3.append(article.description)
        return article
    }).then(response => {
        const fleximg3 = document.querySelector(".fleximg3")
        const img = document.createElement("img")
        img.src = "https://cdn.cnn.com/cnnnext/dam/assets/220406144219-asteroid-2022-gn1-super-tease.jpg";
        fleximg3.append(img)
        return img.src
    }).then(response => {
        const flexlink3 = document.querySelector(".flexlink3")
        flexlink3.href = `https://www.cnn.com/2022/04/06/world/asteroid-2022-gn1-flyby-scn/index.html`
        flexlink3.append(flexlink3)
    })


fetch(newsApiUrl)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        const flexheader4 = document.querySelector(".flexheader4")
        const flexarticle4 = document.querySelector(".flexarticle4")
        const article = response.articles[6]
        flexheader4.append(article.title)
        flexarticle4.append(article.description)
        return article
    }).then(response => {
        const fleximg4 = document.querySelector(".fleximg4")
        const img = document.createElement("img")
        img.src = "https://ichef.bbci.co.uk/news/1024/branded_news/14651/production/_124073538_tanis-1.jpg";
        fleximg4.append(img)
        return img.src
    }).then(response => {
        const flexlink4 = document.querySelector(".flexlink4")
        flexlink4.href = ` https://www.bbc.com/news/science-environment-61013740`
        flexlink4.append(flexlink4)
    })