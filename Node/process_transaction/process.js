//Invoke major steps of the business process, which are usually implemented by multiple subworkflows. 
//If a BusinessRuleException is thrown, the transaction is skipped. If another kind of exception occurs, the current transaction can be retried. 
