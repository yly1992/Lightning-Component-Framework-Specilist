/**
 * Created by liyuanyan on 2/10/18.
 */
({
    doSearch: function (component, event, helper) {
            var params = event.getParam("arguments");
            component.set("v.boatTypeId", params.boatTypeId);
            //console.log(params.boatTypeId);
            helper.onSearch(component);
        },

    onBoatSelect : function(component, event, helper){
         var boatId = event.getParam("boatId");

         //console.log("$$$event receive succeed",boatId);
         component.set("v.selectedBoatId", boatId);
    }
})