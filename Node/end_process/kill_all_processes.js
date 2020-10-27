//Use the Kill Process activity to force the termination of  processes representing applications used in the business process being automated.
//Note that killing processes might have undesirable outcomes, such as losing unsaved changes to files.
const LogObj = require("../log/save_log");

class kill_all_processes {
    constructor() {
  
    }
    kill_all_processes() {

      try {
          //TODO: Code to force the termination of  processes representing applications used in the business process being automated
          LogObj.save_log("Trace","Killing processes...")
        }
        catch (e) {

        }
        finally {

        }
    }
  }
  
  module.exports = new kill_all_processes();
  