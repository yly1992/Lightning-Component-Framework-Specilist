({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    onPlotMapMarker: function(component, event) {
        var lat = event.getParam("lat");
		var long = event.getParam("long");
        var label = event.getParam("label");
        component.set("v.location", {'lat' : lat, 'long' : long, 'label' : label});
    }
})