const mathasynctry = {};
// math.add = (num1, num2) => num1 + num2;
mathasynctry.add = async (num1, num2) => {
    try {
        if(num1 && num2) {
            const result = await num1 + num2;
            return result;
        } else {
            throw 'missing arg';
        }
    } catch (err) {
        throw err;
    }
};

// math.multiply = (num1, num2) => num1 * num2;
mathasynctry.multiply = async (num1, num2) => {
    try {
        if(num1 && num2) {
            const result = await num1 * num2;
            return result;
        } else {
            throw 'missing arg';
        }
    } catch (err) {
        throw err;
    }
};


module.exports = mathasynctry;