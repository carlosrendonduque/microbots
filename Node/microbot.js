
require('dotenv').config();

const fetch = require('node-fetch');
const InitObj = require("./initialization/initialization");
const LoadDataObj = require("./get_transaction_data/load_transaction_data");
const LogObj = require("./log/save_log");

//Pre-initialization
global.CONFIG = []; // create an empty CONFIG dictionary when the bot is starting

//initialization
//Read configuration file and initialize applications used in the process.
let Transition = InitObj.initialize();
transitionToGetData(Transition)
async function transitionToGetData(Transition) {
    if (Transition == 'Successful') {
        console.log("Successful")
        let body = await LoadDataObj.load_transaction_data();
        if (body) {
            console.log(body);
        }
    }
    else {
        console.log("End Process")
        //terminetodoelchiste()
    }
}





//get_transaction_data
//Get the transactions to be processed.

//process_transaction
//Process a single transaction. 
//The result of the processing can be: 1) Success, 2) Business Exception, 3) System Exception. 
//In the case of a system exception, the transaction can be automatically retried.

//end_process
//End process and close all applications used.





