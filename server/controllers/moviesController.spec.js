const moviesController = require("./moviesController.js");

describe("MovieController", () => {
  let controller = moviesController;

  const requestMock = {
    query: {},
    params: {
      id: "633b907da51a940622ff8723",
    },
    body: {},
  };

  const statusResponseMock = {
    send: jest.fn((y) => y),
  };

  const responseMock = {
    status: jest.fn((x) => statusResponseMock),
    send: jest.fn((x) => x),
  };

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("read movies", () => {
    it("should return a 200 status when get movies", () => {
      const handleController = moviesController.list({}, {});

      expect(handleController).toBeDefined();
    });
  });
});
