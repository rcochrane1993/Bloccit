const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/ads/";
const sequelize = require("../../src/db/models/index").sequelize;
const Ad = require("../../src/db/models").Ad;

describe("routes : ads", () => {

    beforeEach((done) => {
        this.ad;
        sequelize.sync({force: true}).then((res) => {
  
            Ad.create({
                productName: "Bloc",
                description: "Become a developer in 2019!"
            })
            .then((ad) => {
                this.ad = ad;
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });
  
        });
  
    });

    it("should return a status code 200 and all topics", (done) => {

        request.get(base, (err, res, body) => {
            expect(res.statusCode).toBe(200);
            expect(err).toBeNull();
            expect(body).toContain("Ads");
            expect(body).toContain("Bloc");
            done();
        });
    });;
});