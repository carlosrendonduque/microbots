//initialization
//Read configuration file and initialize applications used in the process.

const InitAllSetObj = require("./init_all_settings");
const KillAllObj = require("../end_process/kill_all_processes");

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
          let Result = InitAllSetObj.initialize_all_settings() 
          KillAllObj.kill_all_processes() 
        }
        else
        {
          
        }
        //throw "thrown message";
        global.state="Succefssul"
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

