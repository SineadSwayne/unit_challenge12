/**
 * Removes part of string between two sub strings
 * @param {string} text The original string
 * @param {string} start The starting string
 * @param {string} end The ending string
 * @return {string} The string in between
 * @throws (Error} If start or end not found
 */
function between(string, start, end) {
    var startAt = string.indexOf(start);
    if (startAt == -1) {
        throw new Error("No start found: " + start);
    }
    startAt += start.length;
    var endAt = string.indexOf(end, startAt);
    if (endAt == -1) {
        throw new Error("No end found: " + end);
    }
    return string.slice(startAt, endAt);
}
/**
 * Returns an area code from a phone number
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 */
function getAreaCode(phoneNum) {
    var areaCode;
    try {
        areaCode = between(phoneNum, "(", ")");
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && Number(areaCode)) {
            return areaCode;
        }
        else {
            throw new Error("Invalid area code: " + areaCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}
/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayAreaCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var areaCode = getAreaCode(phoneNum);
        outputText = "Your area code is " + areaCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}
/**
 * Returns an co code from a phone number
 * @param   {string} phoneNum The phone number
 * @returns {string} The co code
 */
function getCoCode(phoneNum) {
    var CoCode;
    try {
        CoCode = between(phoneNum, ")", "-");
        CoCode = CoCode.trim();
        if (CoCode.length == 3 && Number(CoCode)) {
            return CoCode;
        }
        else {
            throw new Error("Invalid cocode: " + CoCode);
        }
    }
    catch (error) {
        console.log(error.message);
        return undefined;
    }
}
/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayCoCode(inputId, output1Id) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var CoCode = getCoCode(phoneNum);
        outputText = "Your co code is " + CoCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(output1Id).innerHTML = outputText;
}
/**
 * Returns an area code from a phone number
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 */
function getLineCode(phoneNum) {
    var lineCode;
    try {
        LineCode = between(phoneNum, "-", "");
        LineCode = LineCode.trim();
        if (LineCode.length == 4 && Number(LineCode)) {
            return LineCode;
        }
        else {
            throw new Error("Invalid line code: " + LineCode);
        }
    }
    catch (error) {
        console.log(error.message);
        return undefined;
    }
}
/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayLineCode(inputId, output2Id) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var lineCode = getLineCode(phoneNum);
        outputText = "Your line code is " + lineCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(output2Id).innerHTML = outputText;
}

function validPhone(b) {
    var phonelength = b.length;
    var ifnumber2 = b.slice(0, 1) + b.slice(1, 2) + b.slice(2, 3) + b.slice(4, 5) + b.slice(5, 6) + b.slice(6, 7) + b.slice(8, 9) + b.slice(9, 10) + b.slice(10, 11) + b.slice(11, 12) + b.slice(12, 13) + b.slice(13, 14) + b.slice(14, 15);
    var hyphen = b.charAt(3);
    var hyphen = b.charAt(7);
    var parentheses1 = b.charAt(0);
    var parentheses2 = b.charAt(4);
    if (phonelength == 14 && ifnumber2 >= 0 && hyphen == "-" && parentheses1 == "(" && parentheses2 == ")") {
        return true
    }
    else {
        return false
    }
}

function displayPhone(inputId, output3Id) {
    var input = document.getElementById(inputId).value;
    var outputText = "";
    if (validPhone(input) == true) {
        outputText = "The number " + input + " is a valid phone number.";
    }
    else {
        outputText = "The number " + input + " is not a vaild phone number.";
    }
    document.getElementById(output3Id).innerHTML = outputText;
}
