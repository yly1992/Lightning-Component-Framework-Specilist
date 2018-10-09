/**
 * Created by liyuanyan on 2/17/18.
 */
({
    onBoatClick : function(component, event, helper) {
        
        var boatSelectEvent = component.getEvent("boatselect");
        var boatId = component.get("v.boat").Id;
        boatSelectEvent.setParams({ "boatId": boatId });
        boatSelectEvent.fire();
        console.log("BoatId send succeed");

        /*
        var boat = component.get("v.boat");
        var boatDetailEvent = $A.get("e.c:BoatSelected");
        boatDetailEvent.setParams({ "boat": boat });
        boatDetailEvent.fire();
        */
        var boat = component.get('v.boat');

        var BoatSelectedEvt = $A.get('e.c:BoatSelected');
                BoatSelectedEvt.setParams({
                    "boat" : boat
                });
         BoatSelectedEvt.fire();

        console.log("boatDetailEvent SEND succeed",boat);
		
        var latC = boat.Geolocation__Latitude__s;
        var longC = boat.Geolocation__Longitude__s;
        var label = boat.Name;
        var sObjectId;
        
        var PlotMapMarkerEvt = $A.get('e.c:PlotMapMarker');
        PlotMapMarkerEvt.setParams({
            "lat" : latC,
            "long": longC,
            "label" : label,
            "SObjectId" : boat.Id
        });
        console.log("PlotMapMarkerEvt", PlotMapMarkerEvt);
        PlotMapMarkerEvt.fire();
 

    }
})