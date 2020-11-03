const expect = require('chai').expect;
const microbot = require('../microbot');

describe('microbot.js tests', () => {
  describe('microbot.initialize_microbot() Test', () => {
    it('Validate bot initialization testing environment succfessul', () => {
      require('dotenv').config();
      process.env.MICROBOT_ENVIRONMENT = 'test';
      global.CONFIG = [];
      global.LOG_PROCESS = [];
      microbot.initialize_microbot();
      expect(global.CONFIG['MAX_RETRY_NUMBER']).to.equal("0");
      expect(process.env.LOGMESSAGE_AUTOMATION_STARTED).to.equal(global.LOG_PROCESS['AUTOMATION_STARTED']);
      expect(process.env.LOGMESSAGE_KILLING_PROCESSES).to.equal(global.LOG_PROCESS['KILLING_PROCESSES']);
      expect(process.env.LOGMESSAGE_OPENING_APPLICATIONS).to.equal(global.LOG_PROCESS['OPENING_APPLICATIONS']);
      expect("Successful Initialization").to.equal(global.transition);
    });
  });
});