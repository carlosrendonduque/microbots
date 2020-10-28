
//Save log to trace all the steps of the process of each robot

class save_log {
    constructor() {
  
    }
    save_log(LogLevel, Message) {

      try {
          //global.LogLevel = LogLevel;
          //global.LogMessage = Message;
          //TODO: Implement save log logic in the backend and the calling here
            console.log('LogLevel: ' + LogLevel + ' / ' + ' Message: ' + Message)
        }
        catch (e) {
          console.log(e);
        }
        finally {

        }
    }
  }
  
  module.exports = new save_log();
  