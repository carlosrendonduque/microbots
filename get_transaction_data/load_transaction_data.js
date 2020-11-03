
//Get all transaction items from a specified source (e.g., queues, spreadsheets, databases, mailboxes, web APIs or any other)

const fetch = require('node-fetch');
const CoreObj = require("../core_activities/core_activities");


class load_transaction_data {
  constructor() {

  }

  async load_transaction_data() {

    try {
      CoreObj.save_log("Trace", "Loading transaction data...")
      //TODO: Code to load transactions to be used in the business process being automated
      //An example with fake information is provided, please change the code below 
      const data = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
        //const data = await fetch('https://jsonplaceholder.typicode.com/users')
        //const data = await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())

      return data
    }
    catch (e) {
      global.state = process.env.LOGMESSAGE_TRANSITION_SYSTEM_EXCEPTION;
      global.system_exception = e;
      // console.log(e);
    }
    finally {

    }
  }
}

module.exports = new load_transaction_data();

