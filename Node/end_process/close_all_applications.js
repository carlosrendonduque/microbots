//Do the necessary procedures for ending the process (e.g., logout) and close the used applications.

const CoreObj = require("../core_activities/core_activities");

class close_all_applications {
    constructor() {
  
    }



    async close_all_applications() {

      try {

          global.LOG_PROCESS['CLOSING_APPLICATIONS']= process.env.LOGMESSAGE_CLOSING_APPLICATIONS;
          //TODO: Code to close the used applications.
          const result = await CoreObj.save_log("Trace", global.LOG_PROCESS['CLOSING_APPLICATIONS']);
          return result;
        }
        catch (e) {

        }
        finally {

        }
    }
  }
  
  module.exports = new close_all_applications();
  