//End process and close all applications used.

const CoreObj = require("../core_activities/core_activities");
const CloseAllAppsObj = require("./close_all_applications");
const KillAllProcsObj = require("./kill_all_processes");

class end_process {
  constructor() {

  }


  async end_process() {

    try {
      //await sleep(1000);

      const result = await CloseAllAppsObj.close_all_applications();
      //  await new Promise(resolve => setTimeout(resolve, 1000));
      return result;
      //global.STATES['PROCESS_FINISHED']=  process.env.LOGMESSAGE_STATE_PROCESS_FINISHED;
      //global.state=global.STATES['PROCESS_FINISHED'];
      //CoreObj.save_log("Trace", global.STATES['PROCESS_FINISHED']);

      //process.abort();
      //process.exit()
      //process.kill(process.id)

      //TODO: Code to force the termination of  processes representing applications used in the business process being automated
    }
    catch (e) {
      //Failed to close applications so we need to kill all processes
      const result = await KillAllProcsObj.kill_all_processes();
      return result;
    }
    finally {
      return "result";
    }
  }
}

module.exports = new end_process();