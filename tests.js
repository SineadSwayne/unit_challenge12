QUnit.test("Test the getAreaCode function.", function (assert) {
    var num = "(415) 234-5678";
    var result = getAreaCode(num);
    assert.deepEqual(result, "415", "Valid area code test passed.");
});

QUnit.test( "Errors thrown for getAreaCode", function( assert ) {
    assert.throws( function() {
        getAreCode("(415) 234-5678");
    }, "Missing '('. An error should have been thrown." );

    assert.throws( function() {
        getAreCode("(415 444-5555");
    }, "Missing ')'. An error should have been thrown." );
});


QUnit.test("Test the getCoCode function.", function (assert) {
    var num = "(415) 234-5678";
    var result = getAreaCode(num);
    assert.deepEqual(result, "234", "Valid co code test passed.");
});

QUnit.test("Test the getLineCode function.", function (assert) {
    var num = "(415) 234-5678";
    var result = getLineCode(num);
    assert.deepEqual(result, "5678", "Valid line code test passed.");
});
