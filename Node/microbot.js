const InitObj = require("./initialization/initialization");

//initialization
//Read configuration file and initialize applications used in the process.

let InitResult = InitObj.initialize()

console.log(InitResult)
console.log(global.system_exception)
console.log(process.env.LOGMESSAGE_APPLICATION_EXCEPTION)

//get_transaction_data
//Get the transactions to be processed.

//process_transaction
//Process a single transaction. 
//The result of the processing can be: 1) Success, 2) Business Exception, 3) System Exception. 
//In the case of a system exception, the transaction can be automatically retried.

//end_process
//End process and close all applications used.