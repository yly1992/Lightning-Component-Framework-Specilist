/**
 * Created by liyuanyan on 3/7/18.
 */
({
    doInit : function(cmp, evt, helper) {
        helper.onInit(cmp, evt);
    },
    onUserInfoClick : function(cmp, evt, hlp) {
        // Use event.currentTarget.GetAttribute("xxxxxxxx") function to get the Attribute in the event
        /* This is how we get record Id and navigate to the record
        First create an event sencond using data-userId attribute garb the recordId, using currentTarget.getAttribute method
        */
        var userId = evt.currentTarget.getAttribute("data-userid");
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
                "recordId" : userId,
            });
        navEvt.fire();
    }
})