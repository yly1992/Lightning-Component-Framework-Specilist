public with sharing class ProductCalloutService {
	private static final String WALMART_URL = 'http://api.walmartlabs.com/v1/items?ids=12417832,19336123&apiKey=';
	private static final String WALMART_APIKEY = 'EWKrBiWRD2rW5wPzxxDMYZAWe';
	private static final String test = 'http://api.walmartlabs.com/v1/items?ids=12417832,19336123&apiKey=EWKrBiWRD2rW5wPzxxDMYZAWe';
	
	@future(callout=true)
	public static void runWarehouseEquipmentSync(){

		String endurl = WALMART_URL + ''+ WALMART_APIKEY + '';

		Http http = new Http();
		HttpRequest rq = new HttpRequest();
		rq.setEndpoint(test);
		rq.setMethod('GET');
System.debug('^^^^');
		HttpResponse rp = http.send(rq);

		if(rp.getStatusCode() == 200) {
			System.debug('******');
			System.debug('$$$$$'+ rp);
			
		}else{
			System.debug('%%%%'+ rp.getStatusCode());
		}
	}
}

