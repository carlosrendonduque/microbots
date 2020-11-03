//Process a single transaction. 
//The result of the processing can be: 1) Success, 2) Business Exception, 3) System Exception. 
//In the case of a system exception, the transaction can be automatically retried.

const CoreObj = require("../core_activities/core_activities");
const ProcessObj = require("./process");

class process_transaction {
    constructor() {
  
    }
    process_transaction(transaction_identifier, obj) {

      try {

          global.TRANSITIONS['NEW_TRANSACTION']= process.env.LOGMESSAGE_TRANSITION_NEW_TRANSACTION
          CoreObj.save_log("Trace", global.TRANSITIONS['NEW_TRANSACTION'] + ': ' + transaction_identifier)
          CoreObj.save_log("Trace", process.env.LOGMESSAGE_STATE_TRANSACTION_IN_PROGRESS + ': ' + transaction_identifier)
          CoreObj.save_log("Trace", process.env.LOGMESSAGE_STATE_TRANSACTION_PROCESSED + ': ' + transaction_identifier)
        }
        catch (e) {

        }
        finally {

        }
    }
  }
  
  module.exports = new process_transaction();
  