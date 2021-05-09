const dotenv = require('dotenv');
const CloudantSDK = require('@cloudant/cloudant');
dotenv.config();
const cloudantUrl = process.env.CLOUDANT_URL
const cloudant = new CloudantSDK(cloudantUrl);


class CloudantModel {

    collectionName;
    db;

    constructor() {

    }

    useCollection(collection) {
        this.collectionName = collection;
        this.db = cloudant.db.use(this.collectionName);
    }

    insertDocument(document, cbOk){
        return this.db.insert(document, cbOk);
    }

    deleteDocument(document){
        console.log(document);
        return this.db.destroy(document._id, document._rev);
    }

    async getList(cbOk){
        let documents = new Array();
        let entries = await this.db.list({include_docs:true});
            for(let entry of entries.rows){
                console.log(entry);
                documents.push( entry.doc );
            }
        return documents;
    }

    findDocument(filter){
        return this.db.find(filter);
    }

}

module.exports = CloudantModel;
