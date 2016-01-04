package com.ggg.ws;

import java.net.*;
import javax.xml.namespace.*;
import javax.xml.ws.*;

public class SquareRootClient {
	public static void main(String[] arguments) throws Exception {
		// create web service instance
		URL url = new URL("http://127.0.0.1:5335/service?wsdl");
		QName qname = new QName(
			"http://ws.ggg.com/",
			"SquareRootServerImplService"
		);
		Service service = Service.create(url, qname);
		SquareRootServer srs = service.getPort(SquareRootServer.class);

		// call service methods
		System.out.println(srs.getTime());
		System.out.println(srs.getSquareRoot(625D));
	}
}
