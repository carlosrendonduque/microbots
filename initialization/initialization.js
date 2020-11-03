//initialization
//Read configuration file and initialize applications used in the process.



const initAllSetObj = require('./init_all_settings');
const KillAllProObj = require('../end_process/kill_all_processes');
const initAllAppObj = require('./init_all_applications');
const CoreObj = require("../core_activities/core_activities");

//initialization
//Read configuration file and initialize applications used in the process.


class initialization {
  constructor() {

  }
  initialize() {

    var state = "";
    //Try initializing settings and applications
    try {
      //Load configurations and open applications
      //If first run, read configuration
      if (global.CONFIG = []) {
        require('dotenv').config();
        global.LOG_PROCESS = [];
        global.LOG_PROCESS['AUTOMATION_STARTED'] = "";
        global.LOG_PROCESS['KILLING_PROCESSES'] = "";
        global.LOG_PROCESS['OPENING_APPLICATIONS'] = "";
        global.LOG_PROCESS['CLOSING_APPLICATIONS'] = "";
        global.LOG_PROCESS['LOADING_TRANSACTION_DATA'] = "";

        global.TRANSITIONS = [];
        global.TRANSITIONS['SUCCESSFUL'] = "";
        global.TRANSITIONS['NEW_TRANSACTION'] = "";
        global.TRANSITIONS['BUSINESS_EXCEPTION'] = "";
        global.TRANSITIONS['SYSTEM_EXCEPTION'] = "";
        global.TRANSITIONS['SUCCESS'] = "";
        global.TRANSITIONS['NO_DATA'] = "";

        global.STATES = [];
        global.STATES['PROCESS_INITIALIZED'] = "";
        global.STATES['DATA_LOADED'] = "";
        global.STATES['TRANSACTION_PROCESSED'] = "";
        global.STATES['PROCESS_FINISHED'] = "";

        // process.env.LOGMESSAGE_STATE_TRANSACTION_PROCESSED="Transaction Processed";
        // process.env.LOGMESSAGE_STATE_PROCESS_FINISHED="Process Finished";
        // process.env.LOGMESSAGE_STATE_TRANSACTION_IN_PROGRESS="Transaction in Progress";
        // process.env.LOGMESSAGE_TRANSITION_SUCCESSFUL="Successful"
        // process.env.LOGMESSAGE_TRANSITION_NEW_TRANSACTION="New Transaction"
        // process.env.LOGMESSAGE_TRANSITION_BUSINESS_EXCEPTION="Business Exception"
        // process.env.LOGMESSAGE_TRANSITION_SYSTEM_EXCEPTION="System Exception"
        // process.env.LOGMESSAGE_TRANSITION_SUCCESS="Success"
        // process.env.LOGMESSAGE_TRANSITION_NO_DATA="No Data"

        global.LOG_PROCESS['AUTOMATION_STARTED'] = process.env.LOGMESSAGE_AUTOMATION_STARTED;
        CoreObj.save_log("Trace", global.LOG_PROCESS['AUTOMATION_STARTED']);

        initAllSetObj.initialize_all_settings()
        KillAllProObj.kill_all_processes()


      }
      else {

      }
      //throw "thrown message";
      initAllAppObj.init_all_applications()

      global.STATES['PROCESS_INITIALIZED'] = process.env.LOGMESSAGE_STATE_PROCESS_INITIALIZED;
      CoreObj.save_log("Trace", global.STATES['PROCESS_INITIALIZED']);
      global.state = global.STATES['PROCESS_INITIALIZED'];

      global.TRANSITIONS['SUCCESSFUL'] = process.env.LOGMESSAGE_TRANSITION_SUCCESSFUL;
      CoreObj.save_log("Trace", global.TRANSITIONS['SUCCESSFUL']);
      global.transition = global.TRANSITIONS['SUCCESSFUL'];
    }
    catch (e) {
      global.TRANSITIONS['SYSTEM_EXCEPTION'] = process.env.LOGMESSAGE_TRANSITION_SYSTEM_EXCEPTION;
      global.STATES['PROCESS_FINISHED'] = process.env.LOGMESSAGE_STATE_PROCESS_FINISHED;
      global.state = global.STATES['PROCESS_FINISHED'];

      CoreObj.save_log("Trace", global.TRANSITIONS['SYSTEM_EXCEPTION']);
      CoreObj.save_log("Trace", global.STATES['PROCESS_FINISHED']);
      global.system_exception = e;
      // console.log(e);
    }
    finally {
      return (global.transition);
      //console.log("entering and leaving the finally block");
    }
  }
}

module.exports = new initialization();