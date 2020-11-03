
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
            let con=0;
            data.forEach(obj => {
                con+=1;
                console.log(uniqid());
                Object.entries(obj).forEach(([key, value]) => {
                    console.log(`${key} ${value}`);
                    if (CoreObj.check_stop_signal()) {
                        
                        //TODO: Move this block to end_process function. For some reason is not working
                        EndProcessObj.end_process();
                        global.STATES['PROCESS_FINISHED']=  process.env.LOGMESSAGE_STATE_PROCESS_FINISHED;
                        global.state=global.STATES['PROCESS_FINISHED'];
                        CoreObj.save_log("Trace", global.STATES['PROCESS_FINISHED']);
                        CoreObj.save_log("Trace", process.env.LOGMESSAGE_STOP_PROCESS_BY_SIGNAL);
                        process.kill(process.pid)
                        //TODO: Same as above. Move this block to end_process function. For some reason is not working

                    };
                });
                console.log('-------------------');
            });
            CoreObj.save_log("Trace", global.STATES['DATA_LOADED']);
            global.STATES['DATA_LOADED']=process.env.LOGMESSAGE_STATE_DATA_LOADED;
        }
    }
    else {
        //TODO: Move this block to end_process function. For some reason is not working
        global.TRANSITIONS['SYSTEM_EXCEPTION'] = process.env.LOGMESSAGE_TRANSITION_SYSTEM_EXCEPTION;
        CoreObj.save_log("Trace", global.TRANSITIONS['SYSTEM_EXCEPTION']);
        global.STATES['PROCESS_FINISHED']=  process.env.LOGMESSAGE_STATE_PROCESS_FINISHED;
        global.state=global.STATES['PROCESS_FINISHED'];
        CoreObj.save_log("Trace", global.STATES['PROCESS_FINISHED']);
        EndProcessObj.end_process();
        process.kill(process.pid)
        //TODO: Same as above. Move this block to end_process function. For some reason is not working
        
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




