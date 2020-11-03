
//Save log to trace all the steps of the process of each robot

class core_activities {
    constructor() {
  
    }
    save_log(LogLevel, Message) {

      try {

          //TODO: Implement save log logic in the backend and the calling here
            console.log('LogLevel: ' + LogLevel + ' / ' + ' Message: ' + Message)
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
            let ShouldStop=true;
            if (ShouldStop) {
                let LogLevel="Info"
                console.log('LogLevel: ' + LogLevel + ' / ' + ' Message: ' + process.env.LOGMESSAGE_STOP_PROCESS_REQUESTED)
            } 
            else{

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
  