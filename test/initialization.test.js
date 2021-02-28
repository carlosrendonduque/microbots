const expect = require('chai').expect;

const initObj = require('../initialization/initialization');
const InitAllSetObj = require("../initialization/init_all_settings");
const KillAllObj = require("../end_process/kill_all_processes");
const InitAllAppSetObj = require("../initialization/init_all_applications");


describe('initialization.js tests', () => {
  describe('initialization.initialize() Test', () => {
    it('Validate first running', () => {
      require('dotenv').config();
      global.CONFIG = [];
      initObj.initialize();
      expect(process.env.LOGMESSAGE_AUTOMATION_STARTED).to.equal(global.LOG_PROCESS['AUTOMATION_STARTED']);
    });
  });

});