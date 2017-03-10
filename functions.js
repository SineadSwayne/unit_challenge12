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
 * Returns whether a phone number is valid or not.
 * @param   {string} b; The original string from the user.
 * @returns {string} A signal that will allow the following displayValidPhone to display to the user if the number is valid or not (true).
 * @throws (Error} If the phone number inputted by user is or is not not valid.
 */
function validPhone(b) {
    try {
        var phonelength = b.length;
        var ifnumber2 = b.slice(1, 2) + b.slice(2, 3) + b.slice(3, 4) + b.slice(6, 7) + b.slice(7, 8) + b.slice(8, 9) + b.slice(10, 11) + b.slice(11, 12) + b.slice(12, 13) + b.slice(13, 14) + b.slice(14, 15);
        var hyphen = b.charAt(9);
        var par1 = b.charAt(0);
        var par2 = b.charAt(4);
        if (phonelength == 14 && ifnumber2 >= 0 && hyphen == "-" && par1 == "(" && par2 == ")") {
            return true;
        }
        else {
            throw new Error("Invalid phone number: " + b);
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
}

/**
 * Displays if the the valid phone from inputted phone number is valid or not
 * @param {string} inputId; The original input.
 * @returns {string} outputId; Displays valid phone or an error message.
 */
function displayValidPhone(inputId, outputId) {
    var outputText = ""
    var phoneNum = document.getElementById(inputId).value;
    try {
        if (validPhone(phoneNum) == true) {
            outputText = "Your phone number is valid.";
        }
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
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
 * @return {string} outputId The element id of message div
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
        throw new Error("Invalid phone number: " + error.message);
    }
}


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
 * Returns the line code from a phone number
 * @param   {string} phoneNum The phone number
 * @returns {string} The line code
 */
function getLineCode(phoneNum) {
    var lineCode;
    try {
        lineCode = phoneNum.slice(10, 15);
        if (lineCode.length == 4 && Number(lineCode)) {
            return lineCode;
        }
        else {
            throw new Error("Invalid line code: " + lineCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
 * Displays the line code from an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @returns {string} output2Id; Displays the line code to user
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
