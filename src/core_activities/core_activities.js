
//Save log to trace all the steps of the process of each robot
const EndProcessObj = require("../end_process/end_process");

class core_activities {
  constructor() {

  }

  message(LogLevel, Message) {
    return new Promise(resolve => {
      resolve = 'LogLevel: ' + LogLevel + ' / ' + ' Message: ' + Message
      console.log(resolve);
    });
  }

  async save_log(LogLevel, Message) {

    try {

      //TODO: Implement save log logic in the backend and the calling here
      // let Result = await console.log('LogLevel: ' + LogLevel + ' / ' + ' Message: ' + Message).then(result)
      //let result = await this.message(LogLevel, Message);
      let result = await this.message(LogLevel, Message);

      return result;

    }
    catch (e) {
      console.log(e);
    }
    finally {

    }
  }
  check_stop_signal() {

    try {

      //TODO: Implement the check stop funcionality
      let ShouldStop = false;

      if (ShouldStop) {
        let LogLevel = "Info"
        console.log('LogLevel: ' + LogLevel + ' / ' + ' Message: ' + process.env.LOGMESSAGE_STOP_PROCESS_REQUESTED)
        return ShouldStop;
      }
      else {

      }

    }
    catch (e) {
      console.log(e);
    }
    finally {

    }
  }
}

module.exports = new core_activities();
