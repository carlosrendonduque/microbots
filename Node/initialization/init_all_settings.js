
//Initialize, populate and output the configuration values to be used throughout the project.


  class init_all_settings {
    constructor() {
  
    }
    initialize_all_settings() {
        try {

            if (EXTERNAL_SETTINGS_API="") {
                global.QUEUE_RABBIT_PUBLISHER= process.env.QUEUE_RABBIT_PUBLISHER;
                global.QUEUE_RABBIT_CONSUMER= process.env.QUEUE_RABBIT_CONSUMER; 
                global.LOGF_BUSINESS_PROCESS_NAME= process.env.LOGF_BUSINESS_PROCESS_NAME;
                global.MAX_RETRY_NUMBER= process.env.MAX_RETRY_NUMBER; 
                global.LOGMESSAGE_GET_TRANSACTION_DATA= process.env.LOGMESSAGE_GET_TRANSACTION_DATA; 
                global.LOGMESSAGE_GET_TRANSACTION_DATA_ERROR= process.env.LOGMESSAGE_GET_TRANSACTION_DATA_ERROR;
                global.LOGMESSAGE_SUCCESS= process.env.LOGMESSAGE_SUCCESS;
                global.LOGMESSAGE_BUSINESS_RULE_EXCEPTION= process.env.LOGMESSAGE_BUSINESS_RULE_EXCEPTION; 
                global.LOGMESSAGE_APPLICATION_EXCEPTION= process.env.LOGMESSAGE_APPLICATION_EXCEPTION;
                global.RABBIT_CONNECTION = process.env.RABBIT_CONNECTION; 

            }
            else {
                let fabNum = fabObj.calculateFibonacciValue(num);
                channel.assertQueue(queueName, { durable: false });
                channel.sendToQueue(queueName, Buffer.from(fabNum.toString()));
                console.log(`Queue Name is - ${queueName}`);
            }
          }
          catch (e) {
            global.state = process.env.LOGMESSAGE_APPLICATION_EXCEPTION;
            global.system_exception=e;
            // console.log(e);
          }
          finally {
          }
    }
  }
  
  module.exports = new init_all_settings();