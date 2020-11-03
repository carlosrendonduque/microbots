// Open applications used in the process and do necessary initialization procedures (e.g., login).
const CoreObj = require("../core_activities/core_activities");

class init_all_applications {
  constructor() {

  }
  init_all_applications() {

    try {
      global.LOG_PROCESS['OPENING_APPLICATIONS'] = process.env.LOGMESSAGE_OPENING_APPLICATIONS;
      //TODO: Code to open applications used in the business process being automated
      CoreObj.save_log("Trace", global.LOG_PROCESS['OPENING_APPLICATIONS'])

    }
    catch (e) {

    }
    finally {

    }
  }
}

module.exports = new init_all_applications();
