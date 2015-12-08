import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;
import java.util.Properties;

public class PropertyFileCreator {

	/**
	 * Constructor
	 */
	public PropertyFileCreator() {
		// create properties
		Properties props = new Properties();
		props.setProperty("username", "rcade");
		props.setProperty("browser", "Firefox");
		props.setProperty("showEmail", "no");

		// save to file
		try {
			// create file and IO stream
			File propFile = new File("properties.xml");
			FileOutputStream propStream = new FileOutputStream(propFile);
			// save properties to file with date comment
			Date now  = new Date();
			props.storeToXML(propStream, "Created on " + now);
		}
		catch (IOException exp) {
			System.out.println("Error: " + exp.getMessage());
		}
	}

	/**
	 * APP Main
	 * @param arguments
	 */
	public static void main(String[] arguments) {
		PropertyFileCreator pfc = new PropertyFileCreator();
	}
}
