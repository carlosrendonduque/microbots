//initialization
//Read configuration file and initialize applications used in the process.



const initAllSetObj = require('./init_all_settings');
const KillAllProObj = require('../end_process/kill_all_processes');
const initAllAppObj = require('./init_all_applications');
const savelogObj = require('../log/save_log');

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
        if (global.CONFIG = []){
          require('dotenv').config();
          global.LOG_PROCESS=[];
          global.LOG_PROCESS['AUTOMATION_STARTED']="";
          global.LOG_PROCESS['KILLING_PROCESSES']="";
          global.LOG_PROCESS['OPENING_APPLICATIONS']="";
          global.LOG_PROCESS['LOADING_TRANSACTION_DATA']="";

          global.LOG_PROCESS['AUTOMATION_STARTED'] = process.env.LOGMESSAGE_AUTOMATION_STARTED;
          savelogObj.save_log("Trace", global.LOG_PROCESS['AUTOMATION_STARTED']);
          
          initAllSetObj.initialize_all_settings() 
          KillAllProObj.kill_all_processes() 
          initAllAppObj.init_all_applications()
          
        }
        else
        {
          
        }
        //throw "thrown message";
        global.state="Successful"
      }
      catch (e) {
        global.state = process.env.LOGMESSAGE_APPLICATION_EXCEPTION;
        global.system_exception=e;
        // console.log(e);
      }
      finally {
        return (global.state);
        //console.log("entering and leaving the finally block");
      }
  }
}

module.exports = new initialization();