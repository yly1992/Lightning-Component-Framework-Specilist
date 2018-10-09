/**
 * Created by liyuanyan on 2/18/18.
 */
({
    onBoatSelected : function(component, event, helper) {
      var boatSelected = event.getParam("boat");
      component.set("v.boat", boatSelected);
      component.set("v.id",boatSelected.Id);
      console.log("Boat  Id", component.get("v.id"));
      var service = component.find("service");
      service.reloadRecord() ;
    },
    onRecordUpdated : function(component, event, helper) {
        if( component.find("BoatR")){
           component.find("BoatR").refresh();
        }
    },

    onBoatReviewAdded : function(component, event, helper) {
        console.log("receive the BoatReviewAdded event");
        if( component.find("BoatR")){
                    component.find("BoatR").refresh();
                }
        component.set("v.selectedTabId", "boatreviewtab");
      
    }
})