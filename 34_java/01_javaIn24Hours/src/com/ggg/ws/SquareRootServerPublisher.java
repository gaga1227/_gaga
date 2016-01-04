package com.ggg.ws;

import javax.xml.ws.*;

public class SquareRootServerPublisher {
	public static void main(String[] arguments) {
		// create implementation instance
		SquareRootServerImpl srsi = new SquareRootServerImpl();
		// and publish it to address
		Endpoint.publish(
			"http://127.0.0.1:5335/service",
			srsi
		);
	}
}
