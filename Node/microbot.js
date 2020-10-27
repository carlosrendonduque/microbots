require('dotenv').config();

const InitObj = require("./initialization/initialization");


//Pre-initialization
global.CONFIG = []; // create an empty CONFIG dictionary when the bot is starting

//initialization
//Read configuration file and initialize applications used in the process.
let Result = InitObj.initialize()

console.log(global.CONFIG.MAX_RETRY_NUMBER)


//get_transaction_data
//Get the transactions to be processed.

//process_transaction
//Process a single transaction. 
//The result of the processing can be: 1) Success, 2) Business Exception, 3) System Exception. 
//In the case of a system exception, the transaction can be automatically retried.

//end_process
//End process and close all applications used.