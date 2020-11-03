//Use the Kill Process activity to force the termination of  processes representing applications used in the business process being automated.
//Note that killing processes might have undesirable outcomes, such as losing unsaved changes to files.
const CoreObj = require("../core_activities/core_activities");

class kill_all_processes {
    constructor() {
  
    }
    kill_all_processes() {

      try {

          global.LOG_PROCESS['KILLING_PROCESSES'] = process.env.LOGMESSAGE_KILLING_PROCESSES;
          //TODO: Code to force the termination of  processes representing applications used in the business process being automated
          CoreObj.save_log("Trace", global.LOG_PROCESS['KILLING_PROCESSES']);
        }
        catch (e) {

        }
        finally {

        }
    }
  }
  
  module.exports = new kill_all_processes();
  