const CloudantModel = require('./cloudant');

class NewsModel extends CloudantModel {

    constructor() {
        super();
        this.useCollection("news-app");
    }

    findNewsByTitle(title) {
        const selector = {
            selector: {
                title: title
            }
        }
        return this.findDocument(selector);
    }

    insertNews(news, cbOk){
        return this.insertDocument(news, cbOk);
    }

    deleteNews(news){
        return this.deleteDocument(news);
    }

    async getNews(){
        return this.getList(result => {
            console.log(result);
        });
    }
}

module.exports = new NewsModel();