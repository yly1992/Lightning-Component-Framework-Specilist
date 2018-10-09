/**
 * Created by liyuanyan on 3/5/18.
 */

public with sharing class BoatReviews {
    @AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId){
        system.debug('boatId = ' + boatId);
        // This Id should not be the boat TYPE ID should be a baot Id
        List<BoatReview__c> result = [SELECT Id, Name, Comment__c, Rating__c, LastModifiedDate, CreatedDate, CreatedBy.Name, CreatedBy.SmallPhotoUrl, CreatedBy.CompanyName
         FROM BoatReview__c WHERE Boat__c =: boatId];
        System.debug('xxxx =' + result);
        return result;

    }
}