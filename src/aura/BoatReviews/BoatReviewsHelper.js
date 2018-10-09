/**
 * Created by liyuanyan on 3/7/18.
 */
({
    onInit : function(component, event) {
        var action = component.get("c.getAll");
            action.setParams({ boatId : component.get("v.boat").Id });

               action.setCallback(this, function(response) {
                   var state = response.getState();
                   if (state === "SUCCESS") {
                       var boatreviews = response.getReturnValue();
                       component.set("v.boatReviews", boatreviews);

                       if (boatreviews.length == 0) {
                             console.log("length is 0");
                       } else {
                             console.log("length is not 0");
                       }
                   } else if (state === "INCOMPLETE") {
                                    // do something
                   } else if (state === "ERROR") {
                                      var errors = response.getError();
                                      if (errors) {
                                          if (errors[0] && errors[0].message) {
                                              console.log("Error message: " +
                                                       errors[0].message);
                                          }
                                      } else {
                                          console.log("Unknown error");
                                      }
                                  }
               });
               $A.enqueueAction(action);
              //you always can not just get the list of objects and give it index to get the attribute
               console.log("%%%%%", component.get("v.boatReviews")[0]);
    }
})