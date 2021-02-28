const expect = require('chai').expect;
const InitAllAppObj = require("../initialization/init_all_applications");


describe('init_all_applications.js tests', () => {
  describe('init_all_applications.init_all_applications() Test', () => {

    it('Validate init all applications', () => {
      require('dotenv').config();
      global.LOG_PROCESS = [];
      global.LOG_PROCESS['OPENING_APPLICATIONS'] = "";
      InitAllAppObj.init_all_applications();
      expect(process.env.LOGMESSAGE_OPENING_APPLICATIONS).to.equal(global.LOG_PROCESS['OPENING_APPLICATIONS']);
    });

  });

});