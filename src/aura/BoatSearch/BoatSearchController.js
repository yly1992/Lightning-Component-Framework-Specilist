/**
 * Created by liyuanyan on 2/11/18.
 */
({

     onFormSubmit : function(component, event, helper) {

     var formData = event.getParam("formData");
     console.log("event receive succeed",formData.boatTypeId);
     var searchResultsCmp = component.find("searchResultsCmp");

     searchResultsCmp.search(formData.boatTypeId);


     }



/*
     onFormSubmit : function(cmp, evt, hlp) {

             var formData = evt.getParam("formData");
            console.log("#####",formData.boatTypeId);
            var btId = formData.boatTypeId + "";
            var action = cmp.get("c.getBoats");

             action.setParams(
                {
                    "boatTypeId" : formData.boatTypeId
                }
            );
             console.log("$$$$$ here");


            action.setCallback(this, function(response) {

                var state = response.getState();
                var results = response.getReturnValue();
                console.log("boats&&&&&&+", results);

                if (state === "SUCCESS") {
                  cmp.set("v.boats", results);

                }
                else {
                 console.log("Failed with state: " + state);
                }
            });

            $A.enqueueAction(action);
        }


       onFormSubmit: function (component, event, helper) {
              var formData = event.getParam("formData");
             console.log("#####",formData.boatTypeId);
              var searchResultsCmp = component.find("searchResultsCmp");
              searchResultsCmp.search(formData.boatTypeId);
          }
          */
})