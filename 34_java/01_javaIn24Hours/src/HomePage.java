import java.net.*;

public class HomePage {
	String owner;
	URL address;
	String category = "none";

	public HomePage(String inOwner, String inAddress) throws MalformedURLException {
		owner = inOwner;
		address = new URL(inAddress);
	}

	public HomePage(String inOwner, String inAddress, String inCategory) throws MalformedURLException {
		this(inOwner, inAddress);
		category = inCategory;
	}
}