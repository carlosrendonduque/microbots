//initialization
//Read configuration file and initialize applications used in the process.

const InitAllSetObj = require("./init_all_settings");
const KillAllObj = require("../end_process/kill_all_processes");
const InitAllAppSetObj = require("./init_all_applications");

const LogObj = require("../log/save_log");

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
          LogObj.save_log("Trace","Automation Started...")
          InitAllSetObj.initialize_all_settings() 
          KillAllObj.kill_all_processes() 
          InitAllAppSetObj.init_all_applications()
          
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

