import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;
import java.util.Properties;

public class Configurator {

	/**
	 * Constructor
	 */
	public Configurator() {
		try {
			// load the properties file
			File configFile = new File("program.properties");
			FileInputStream inStream = new FileInputStream(configFile);

			// create new config object and load from file
			Properties config = new Properties();
			config.load(inStream);

			// add runtime property to config
			Date current = new Date();
			config.setProperty("runtime", current.toString());

			// write updated config to file
			FileOutputStream outStream = new FileOutputStream(configFile);
			config.store(outStream, "A string comment: Properties settings");

			// finish reading
			inStream.close();

			// log
			config.list(System.out);
		}
		catch (IOException e) {
			System.out.println("IO Error" + e.getMessage());
		}
	}

	/**
	 * App Main
	 * @param arguments
	 */
	public static void main(String[] arguments) {
		// create new class instance
		Configurator con = new Configurator();
	}
}
