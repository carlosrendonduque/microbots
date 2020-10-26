const math = require("mathjs");

class Operation {
    constructor() {

    }

    calculateValue(expression1, expression2, expression3,expression4, expression5, expression6, 
                   expression7, expression8, expression9,expression10,
                        scope_expression) {
        var result=0;
        var result1=0;
        var result2=0;
        var result3=0;
        var result4=0;
        var result5=0;
        var result6=0;
        var result7=0;
        var result8=0;
        var result9=0;
        var result10=0;
        
        const code1 = math.compile(expression1);       // compile an expression
        const code2 = math.compile(expression2);       // compile an expression
        const code3 = math.compile(expression3);       // compile an expression
        const code4 = math.compile(expression4);       // compile an expression
        const code5 = math.compile(expression5);       // compile an expression
        const code6 = math.compile(expression6);       // compile an expression
        const code7 = math.compile(expression7);       // compile an expression
        const code8 = math.compile(expression8);       // compile an expression
        const code9 = math.compile(expression9);       // compile an expression
        const code10 = math.compile(expression10);       // compile an expression
        
        result1 = code1.evaluate(scope_expression); // evaluate the code with an optional scope
        result2 = code2.evaluate(scope_expression); // evaluate the code with an optional scope
        result3 = code3.evaluate(scope_expression); // evaluate the code with an optional scope
        result4 = code4.evaluate(scope_expression); // evaluate the code with an optional scope
        result5 = code5.evaluate(scope_expression); // evaluate the code with an optional scope
        result6 = code6.evaluate(scope_expression); // evaluate the code with an optional scope
        result7 = code7.evaluate(scope_expression); // evaluate the code with an optional scope
        result8 = code8.evaluate(scope_expression); // evaluate the code with an optional scope
        result9 = code9.evaluate(scope_expression); // evaluate the code with an optional scope
        result10 = code10.evaluate(scope_expression); // evaluate the code with an optional scope
        
        result = result1 + result2 + result3 + result4 + result5 + result6 +  result7 + result8 + result9 + result10;        
        return (result);

    }

}

module.exports = new Operation();