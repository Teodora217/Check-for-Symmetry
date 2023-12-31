const { expect } = require("chai");
const isSymmetric = require("./symmetric.js");

describe("Symmetric Checker", () => {
  it("return true for symmetric array", () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });
  it("returns false for non-symmetric array", () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });
  it("returns false from non-array", () => {
    expect(isSymmetric(5)).to.be.false;
  });
  it("returns false for type-different symmetric array", () => {
    expect(isSymmetric([1, 2, "1"])).to.be.false;
  });
  it("return true for symmetric array with odd number of elements", () => {
    expect(isSymmetric([1, 2, 1])).to.be.true;
  });
  it("return true for symmetric array with strings", () => {
    expect(isSymmetric(["a", "b", "b", "a"])).to.be.true;
  });
  it("return false for non-symmetric array with strings", () => {
    expect(isSymmetric(["a", "b", "c"])).to.be.false;
  });
  it("return false for strings parameter", () => {
    expect(isSymmetric(["abba"])).to.be.true;
  });
});
