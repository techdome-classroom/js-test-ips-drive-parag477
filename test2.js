const assert = require("assert");
const { longestSubstring } = require("./program2");

describe("Test cases for longestSubstring function", function () {

    it("Returns 3 for 'abcabcbb'", function () {
        const result = longestSubstring("abcabcbb");
        assert.equal(result, 3);
    });

    it("Returns 1 for 'bbbbb'", function () {
        const result = longestSubstring("bbbbb");
        assert.equal(result, 1);
    });

    it("Returns 3 for 'pwwkew'", function () {
        const result = longestSubstring("pwwkew");
        assert.equal(result, 3);
    });

    it("Returns 0 for an empty string", function () {
        const result = longestSubstring("");
        assert.equal(result, 0);
    });

    it("Returns 1 for a string with one character", function () {
        const result = longestSubstring("a");
        assert.equal(result, 1);
    });

});


