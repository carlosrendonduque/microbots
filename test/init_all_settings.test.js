const expect = require('chai').expect;
const init_all_settings = require('../initialization/init_all_settings');
global.CONFIG = []; // create an empty CONFIG dictionary when the bot is starting

describe('init_all_settings.js tests', () => {
    describe('init_all_settings.initialize_all_settings() Test', () => {

        
        it('Validate production environment', () => {
            process.env.MICROBOT_ENVIRONMENT = 'production';
            init_all_settings.initialize_all_settings();     
            
            expect(global.CONFIG['QUEUE_RABBIT_PUBLISHER']).to.equal("queue_test_microbot");
            expect(global.CONFIG['QUEUE_RABBIT_CONSUMER']).to.equal("queue_test_microbot");
            expect(global.CONFIG['LOGF_BUSINESS_PROCESS_NAME']).to.equal("framework");
            expect(global.CONFIG['MAX_RETRY_NUMBER']).to.equal("2");
            expect(global.CONFIG['LOGMESSAGE_GET_TRANSACTION_DATA']).to.equal("Exception calling transaction number:");
            expect(global.CONFIG['LOGMESSAGE_GET_TRANSACTION_DATA_ERROR']).to.equal("Error getting transaction number:");
            expect(global.CONFIG['LOGMESSAGE_SUCCESS']).to.equal("Transaction Successful");
            expect(global.CONFIG['LOGMESSAGE_BUSINESS_RULE_EXCEPTION']).to.equal("Business Rule Exception");
            expect(global.CONFIG['LOGMESSAGE_APPLICATION_EXCEPTION']).to.equal("System Exception");
            expect(global.CONFIG['RABBIT_CONNECTION']).to.equal("amqp://localhost");
            expect(global.CONFIG['ORCHESTRATOR_QUEUE_NAME']).to.equal("orchestrator_queue_name");
            expect(global.CONFIG['EXTERNAL_SETTINGS_API']).to.equal("http://localhost");
        });
        it('Validate test environment', () => {
            process.env.MICROBOT_ENVIRONMENT = 'test';
            init_all_settings.initialize_all_settings();     
            
            expect(global.CONFIG['QUEUE_RABBIT_PUBLISHER']).to.equal("queue_test_microbot");
            expect(global.CONFIG['QUEUE_RABBIT_CONSUMER']).to.equal("queue_test_microbot");
            expect(global.CONFIG['LOGF_BUSINESS_PROCESS_NAME']).to.equal("framework");
            expect(global.CONFIG['MAX_RETRY_NUMBER']).to.equal("0");
            expect(global.CONFIG['LOGMESSAGE_GET_TRANSACTION_DATA']).to.equal("Exception calling transaction number:");
            expect(global.CONFIG['LOGMESSAGE_GET_TRANSACTION_DATA_ERROR']).to.equal("Error getting transaction number:");
            expect(global.CONFIG['LOGMESSAGE_SUCCESS']).to.equal("Transaction Successful");
            expect(global.CONFIG['LOGMESSAGE_BUSINESS_RULE_EXCEPTION']).to.equal("Business Rule Exception");
            expect(global.CONFIG['LOGMESSAGE_APPLICATION_EXCEPTION']).to.equal("System Exception");
            expect(global.CONFIG['RABBIT_CONNECTION']).to.equal("amqp://localhost");
            expect(global.CONFIG['ORCHESTRATOR_QUEUE_NAME']).to.equal("orchestrator_queue_name");
            expect(global.CONFIG['EXTERNAL_SETTINGS_API']).to.equal("http://localhost");
        });
        
        // it('should throw an error',   () => {
        //     try {
        //         global.state="";
        //         process.env.MICROBOT_ENVIRONMENT = 'test';
        //         init_all_settings.initialize_all_settings();     
        //         //throw "error"
        //     } catch (error) {
        //         expect(global.state).to.equal(process.env.LOGMESSAGE_APPLICATION_EXCEPTION);
        //         expect(error).to.equal(global.system_exception);
        //     }
        // });
        
    });

});

