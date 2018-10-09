public class BoatFormController {
    @AuraEnabled
    public static List<BoatType__c> searchBoatType()
    {
        List<BoatType__c> boatTypes = [SELECT Name FROM BoatType__c];
        
        return boatTypes;
    }
    
    @AuraEnabled
    public static List<String> searchBoatTypeString()
    {
        List<BoatType__c> boatTypes = [SELECT Id, Name FROM BoatType__c];
        List<String> results = new List<String>();
        
        for(BoatType__c bt : boatTypes){
            results.add(bt.Name + ':' + bt.Id);
        }
        
        return results;
    }
    // new commit changes here 1
}