const Ad = require("./models").Ad;

module.exports = {

    getAllAds(callback){
        return Ad.all()

        .then((adss) => {
            callback(null, ads);
        })
        .catch((err) => {
            callback(err);
        })
    }
}