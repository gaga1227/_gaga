package com.ggg.ws;

import java.util.*;
import javax.jws.*;

// define endpoint interface
@WebService(endpointInterface = "com.ggg.ws.SquareRootServer")

public class SquareRootServerImpl implements SquareRootServer {

	@Override
	public double getSquareRoot(double input) {
		return Math.sqrt(input);
	}

	@Override
	public String getTime() {
		return new Date().toString();
	}
}
