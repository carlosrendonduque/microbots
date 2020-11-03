//End process and close all applications used.

const CoreObj = require("../core_activities/core_activities");

class end_process {
    constructor() {
  
    }
    end_process() {

      try {
            global.STATES['PROCESS_FINISHED']=  process.env.LOGMESSAGE_STATE_PROCESS_FINISHED;
            global.state=global.STATES['PROCESS_FINISHED'];
            CoreObj.save_log("Trace", global.STATES['PROCESS_FINISHED']);
            process.kill(process.pid)

            //TODO: Code to force the termination of  processes representing applications used in the business process being automated
        }
        catch (e) {

        }
        finally {

        }
    }
  }
  
  module.exports = new end_process();