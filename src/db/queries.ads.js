const Ad = require("./models").Ad;

module.exports = {

    getAllAds(callback){
        return Ad.all()

        .then((ads) => {
            callback(null, ads);
        })
        .catch((err) => {
            callback(err);
        })
    },
    addTopic(newAd, callback){
      return Ad.create({
        productName: newAd.productName,
        description: newAd.description
      })
      .then((ad) => {
        callback(null, ad);
      })
      .catch((err) => {
        callback(err);
      })
    }
}