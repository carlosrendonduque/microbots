// Open applications used in the process and do necessary initialization procedures (e.g., login).
const LogObj = require("../log/save_log");

class init_all_applications {
    constructor() {
  
    }
    init_all_applications() {

      try {
          //TODO: Code to open applications used in the business process being automated
          LogObj.save_log("Trace","Opening applications...")
          
        }
        catch (e) {

        }
        finally {

        }
    }
  }
  
  module.exports = new init_all_applications();
  