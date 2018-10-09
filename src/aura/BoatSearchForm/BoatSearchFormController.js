({	
    doInit : function(component, event, helper) {
		var action = component.get("c.searchBoatTypeString");
        
        var createRecordEvent = $A.get("e.force:createRecord");
        
        if(createRecordEvent) {
            component.set("v.showNewButton", true);
        }
        
        action.setCallback(this, function(response){
           	var options = [];
            var state = response.getState();
            var results = response.getReturnValue();
           
            for(var i = 0; i < results.length; i++) {
                var temp = results[i].split(":");
                options.push({value: temp[1], label:temp[0]});
            }
            
            if(state == "SUCCESS") 
            {	
                component.set("v.BoatTypes" , options);
            }else {
               Console.log("$$$Error: ", state);
            }
        });
        $A.enqueueAction(action);
        
	},
    
    handleNewClick : function(component, event, helper) {
		var createRecordEvent = $A.get("e.force:createRecord");
        if(createRecordEvent)
        {
            var boatType = null;
            if(component.find("filterSelect").get("v.value")){
                boatType = component.find("filterSelect").get("v.value");
            }
            createRecordEvent.setParams({
                 "entityApiName": "Boat__c",
                "defaultFieldValues": {
                    'BoatType__c': boatType
                }
            });
            createRecordEvent.fire();
        }	
    },

    onFormSubmit: function (component, event, helper) {

            var boatTypeId = component.find("filterSelect").get("v.value");
            var submitForm = component.getEvent("formsubmit");
            submitForm.setParams({ "formData": {"boatTypeId": boatTypeId }});
            submitForm.fire();



    }
})