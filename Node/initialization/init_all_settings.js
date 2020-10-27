//Initialize, populate and output the configuration values to be used throughout the project.


  class init_all_settings {
    constructor() {
  
    }
    initialize_all_settings() {
        try {
            if (process.env.ENVIRONMENT !== 'production') {   
                require('dotenv').config();
                global.CONFIG['QUEUE_RABBIT_PUBLISHER'] = process.env.QUEUE_RABBIT_PUBLISHER;
                global.CONFIG['QUEUE_RABBIT_CONSUMER'] = process.env.QUEUE_RABBIT_CONSUMER;
                global.CONFIG['LOGF_BUSINESS_PROCESS_NAME'] = process.env.LOGF_BUSINESS_PROCESS_NAME;
                global.CONFIG['MAX_RETRY_NUMBER'] = process.env.MAX_RETRY_NUMBER;
                global.CONFIG['LOGMESSAGE_GET_TRANSACTION_DATA'] = process.env.LOGMESSAGE_GET_TRANSACTION_DATA;
                global.CONFIG['LOGMESSAGE_GET_TRANSACTION_DATA_ERROR'] = process.env.LOGMESSAGE_GET_TRANSACTION_DATA_ERROR;
                global.CONFIG['LOGMESSAGE_SUCCESS'] = process.env.LOGMESSAGE_SUCCESS;
                global.CONFIG['LOGMESSAGE_BUSINESS_RULE_EXCEPTION'] = process.env.LOGMESSAGE_BUSINESS_RULE_EXCEPTION;
                global.CONFIG['LOGMESSAGE_APPLICATION_EXCEPTION'] = process.env.LOGMESSAGE_APPLICATION_EXCEPTION;
                global.CONFIG['RABBIT_CONNECTION'] = process.env.RABBIT_CONNECTION;
                global.CONFIG['QUEUE_RABBIT_PUBLISHER'] = process.env.QUEUE_RABBIT_PUBLISHER;
            }
            else {
                //Replace this dictionary with an external API call in a production environment
                global.EXTERNAL_SETTINGS_API= process.env.EXTERNAL_SETTINGS_API;
                
                var EXTERNAL_CONFIG = {
                  QUEUE_RABBIT_PUBLISHER: 'queue_test_microbot',
                  QUEUE_RABBIT_CONSUMER: 'queue_test_microbot',
                  LOGF_BUSINESS_PROCESS_NAME: 'framework',
                  MAX_RETRY_NUMBER: '2',
                  LOGMESSAGE_GET_TRANSACTION_DATA: 'Exception calling transaction number',
                  LOGMESSAGE_GET_TRANSACTION_DATA_ERROR: 'Error getting transaction number',
                  LOGMESSAGE_SUCCESS: 'Transaction Successful',
                  LOGMESSAGE_BUSINESS_RULE_EXCEPTION: 'Business Rule Exception ',
                  LOGMESSAGE_APPLICATION_EXCEPTION: 'System Exception ',
                  RABBIT_CONNECTION: 'amqp://localhost'
                }
                for(var key in EXTERNAL_CONFIG) {
                  try {
                    global.CONFIG[key] = EXTERNAL_CONFIG[key];
                  }
                  catch (e) {
                  }
                  finally {
                  }
                }
                
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