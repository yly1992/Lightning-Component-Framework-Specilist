/**
 * Created by liyuanyan on 2/11/18.
 */
({    onSearch: function (component) {
       var action = component.get("c.getBoats");
       action.setParams({ boatTypeId : component.get("v.boatTypeId") });
       action.setCallback(this, function(response) {
           var state = response.getState();
           if (state === "SUCCESS") {
               var boats = response.getReturnValue();
               component.set("v.boats", boats);

               if (boats.length == 0) {
                   component.set("v.errorMessage", true);
               } else {
                   component.set("v.errorMessage", false);
               }
           }
       });
       $A.enqueueAction(action);
       // you always can not just get the list of objects and give it index to get the attribute
       console.log("xxxxxxxx", component.get("v.boats")[0]);
   }
})