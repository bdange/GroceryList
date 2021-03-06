const request = require("request");
const server = require("../../server");
const base = "http://localhost:3000/items/";

describe("routes : items", () => {
  describe("GET /", () => {
    it("should return a status code 200 in the body of the response", done => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });
  });
});
