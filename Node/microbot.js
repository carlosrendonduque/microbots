
require('dotenv').config();
var uniqid = require('uniqid');

const fetch = require('node-fetch');
const InitObj = require("./initialization/initialization");
const LoadDataObj = require("./get_transaction_data/load_transaction_data");
const GetDataObj = require("./get_transaction_data/get_transaction_data");
const EndProcessObj = require("./end_process/end_process");

const CoreObj = require("./core_activities/core_activities");

const microbot = {};

//Pre-initialization
global.CONFIG = []; // create an empty CONFIG dictionary when the bot is starting

//initialization
//Read configuration file and initialize applications used in the process.
let transition = "";

microbot.initialize_microbot = () => {
    transition = InitObj.initialize()
  
};


let data={};

async function transition_to_get_data(transition) {

    if (transition == process.env.LOGMESSAGE_TRANSITION_SUCCESSFUL) {
    //if (transition == "Salga") {
        data = await LoadDataObj.load_transaction_data();
        if (data) {
            //console.log(body);
            
            //console.log(data);
            //return body;
            data.forEach(obj => {
                console.log(uniqid());
                Object.entries(obj).forEach(([key, value]) => {
                    console.log(`${key} ${value}`);
                });
                console.log('-------------------');
            });
            CoreObj.save_log("Trace", global.STATES['DATA_LOADED']);
            global.STATES['DATA_LOADED']=process.env.LOGMESSAGE_STATE_DATA_LOADED;
        }
    }
    else {
        global.TRANSITIONS['SYSTEM_EXCEPTION'] = process.env.LOGMESSAGE_TRANSITION_SYSTEM_EXCEPTION;
        CoreObj.save_log("Trace", global.TRANSITIONS['SYSTEM_EXCEPTION']);
        EndProcessObj.end_process();
        //terminetodoelchiste()
    }
}

microbot.initialize_microbot();
transition_to_get_data(transition);

//get_transaction_data
//Get the transactions to be processed.

//process_transaction
//Process a single transaction. 
//The result of the processing can be: 1) Success, 2) Business Exception, 3) System Exception. 
//In the case of a system exception, the transaction can be automatically retried.

//end_process
//End process and close all applications used.


module.exports = microbot;




