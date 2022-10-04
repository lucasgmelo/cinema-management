const ticketsController = require("./ticketsController.js");

describe("MovieController", () => {
  let controller = ticketsController;

  const requestMock = {
    query: {},
    param: {},
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

  describe("create", () => {
    it("should return a 200 status", () => {
      const handleController = ticketsController.list({}, {});

      expect(handleController).toBeDefined();
    });
  });
});
