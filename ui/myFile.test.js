const { addOne } = require("./myFile");

describe("test", () => {
  it("adds one", () => {
    expect(addOne(1)).toEqual(2);
  });

  it("adds one more", () => {
    expect(addOne(2)).toEqual(3);
  });
});
