const { newsModel } = require('../models/');

class NewsController {

    getNews(req, res) {
        console.log('newsController');
        if (req.query.title) {
            newsModel.findNewsByTitle(req.query.title).then(result => {
                res.send(result);
            }).catch(err => {
                console.log("News not found");
                res.send("News not found").status(404);
            });
        } else {
            newsModel.getNews().then(result => {
                res.send(result);
            });
        }
    }

    saveNews(req, res) {
        console.log('saving news');
        newsModel.insertNews(req.body.news, () => {
            console.log(true);
            res.status(200).send("News Saved!");
        });
    }

    deleteNews(req, res) {
        console.log('deleting news');
        newsModel.findNewsByTitle(req.query.title).then(result => {
            console.log(result);
            if (result.docs.length > 0) {
                newsModel.deleteNews(result.docs[0]).then(result => {
                    console.log(result);
                    res.send("news deleted").status(200);
                }).catch(err => {
                    console.log(err);
                    res.send("Couldn't Delete News").status(400);
                });
            }
        }).catch(err => {
            console.log(err);
            res.status(404).send("News Not Found");
        })
    }

}

module.exports = new NewsController();