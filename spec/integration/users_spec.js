const request = require("request");
const server = require("../../server");
const base = "http://localhost:3000/users/";
const User = require("../../models/user");

describe("routes : users", () => {
  describe("POST /", () => {
    it("should create a new user with valid values", done => {
      const options = {
        url: base,
        form: {
          email: "user@example.com",
          password: "123456789"
        }
      };

      request.post(options, (err, res, body) => {
        User.findOne({ where: { email: "user@example.com" } })
          .then(user => {
            expect(user.email).toBe("user@example.com");
            expect(user.id).toBe(1);
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
      });
    });
  });

  it("should not create a new user with invalid attributes and redirect", done => {
    request.post(
      {
        url: base,
        form: {
          email: "no",
          password: "123456789"
        }
      },
      (err, res, body) => {
        User.findOne({ where: { email: "no" } })
          .then(user => {
            expect(user).toBeNull();
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
      }
    );
  });
});
