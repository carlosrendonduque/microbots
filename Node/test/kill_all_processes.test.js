const expect = require('chai').expect;
const KillAllObj = require("../end_process/kill_all_processes");


describe('kill_all_processes.js tests', () => {
    describe('kill_all_processes.kill_all_processes() Test', () => {

        
        it('Validate kill all processes', () => {
            require('dotenv').config();
            global.LOG_PROCESS=[];
            global.LOG_PROCESS['KILLING_PROCESSES']="";
            KillAllObj.kill_all_processes();     
            expect(process.env.LOGMESSAGE_KILLING_PROCESSES).to.equal(global.LOG_PROCESS['KILLING_PROCESSES']);
        });

        
    });

});