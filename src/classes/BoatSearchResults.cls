/**
 * Created by liyuanyan on 2/8/18.
 */

public with sharing class BoatSearchResults {
    @AuraEnabled 
    public static List<Boat__c> getBoats(String boatTypeId) {
        System.debug('&&&&&&&');
        List<Boat__c> boatList = new List<Boat__c>();
        if(String.isBlank(boatTypeId)){
            boatList = [SELECT Id,BoatType__c, Name,Picture__c, Geolocation__Latitude__s,Geolocation__Longitude__s From Boat__c];
            System.debug('&&&&&&&'+ boatList);
        }else{
             boatList = [SELECT Id,BoatType__c, Name,Picture__c, Geolocation__Latitude__s,Geolocation__Longitude__s From Boat__c where BoatType__c =: boatTypeId ];
        System.debug('&&&&&&&'+ boatList);
        }
        return boatList;
    }
}