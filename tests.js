QUnit.test("Test the validPhone.", function (assert) {
    var num = "(415) 234-5678";
    var result = validPhone(num);
    assert.deepEqual(result, true, "Valid validPhone test passed.");
});
QUnit.test("Errors thrown for validPhone", function(assert) {
    assert.throws(function () {
        getAreaCode("415)x44-5555");
    }, "Missing '('. An error should have been thrown.");
    assert.throws(function () {
        getAreaCode("(415 4244-5555");
    }, "Missing ')'. An error should have been thrown.");
});

QUnit.test("Test the getAreaCode function.", function (assert) {
    var num = "(415) 234-5678";
    var result = displayPhone(inputId, output3Id);
    assert.deepEqual(result, "415", "Valid area code test passed.");
});

QUnit.test("Errors thrown for getAreaCode", function (assert) {
    assert.throws(function () {
        getAreaCode("415)444-5555");
    }, "Missing '('. An error should have been thrown.");
    assert.throws(function () {
        getAreaCode("(415 444-5555");
    }, "Missing ')'. An error should have been thrown.");
});


QUnit.test("Test the getLineCode function.", function (assert) {
    var num = "(415) 234-5678";
    var result = getLineCode(num);
    assert.deepEqual(result, "5678", "Valid line code test passed.");
});

QUnit.test("Errors thrown for getLineCode", function (assert) {
    assert.throws(function () {
        getAreaCode("415)444-5b55");
    }, "Missing '('. An error should have been thrown.");
    assert.throws(function () {
        getAreaCode("(415 444-55");
    }, "Missing ')'. An error should have been thrown.");
});

QUnit.test("Test the getCoCode.", function (assert) {
    var num = "(415) 234-5678";
    var result = getCoCode(num);
    assert.deepEqual(result, "234", "Valid co code test passed.");
});
QUnit.test("Errors thrown for getCoCode", function (assert) {
    assert.throws(function () {
        getAreaCode("415)x44-5555");
    }, "Missing '('. An error should have been thrown.");
    assert.throws(function () {
        getAreaCode("(415 4244-5555");
    }, "Missing ')'. An error should have been thrown.");
});
