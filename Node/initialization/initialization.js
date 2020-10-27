//initialization
//Read configuration file and initialize applications used in the process.

//const InitAllSetObj = require("init_all_settings");


class initialization {
  constructor() {

  }
  initialize() {
      var state = "";
      //Try initializing settings and applications
      try {
          //Load configurations and open applications
          //If first run, read configuration
          //let InitResult = InitObj.initialize()  
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

