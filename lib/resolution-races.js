"use strict";

var assert = require("assert");

var adapter = require("./adapters/q");
var pending = adapter.pending;

describe("Resolution races", function () {
    it("does not throw when fulfilling twice", function () {
        var tuple = pending();

        tuple.fulfill();
        assert.doesNotThrow(function () {
            tuple.fulfill();
        });
    });

    it("does not throw when rejecting twice", function () {
        var tuple = pending();

        tuple.reject();
        assert.doesNotThrow(function () {
            tuple.reject();
        });
    });

    it("does not throw when fulfilling, then rejecting", function () {
        var tuple = pending();

        tuple.fulfill();
        assert.doesNotThrow(function () {
            tuple.reject();
        });
    });

    it("does not throw when rejecting, then fulfilling", function () {
        var tuple = pending();

        tuple.reject();
        assert.doesNotThrow(function () {
            tuple.fulfill();
        });
    });
});