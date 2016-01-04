package com.ggg.ws;

import javax.jws.*;
import javax.jws.soap.*;
import javax.jws.soap.SOAPBinding.*;

// Annotation required to indicate it is a web service interface
@WebService

@SOAPBinding(style = Style.RPC)

public interface SquareRootServer {
	@WebMethod
	double getSquareRoot(double input);

	@WebMethod
	String getTime();
}
