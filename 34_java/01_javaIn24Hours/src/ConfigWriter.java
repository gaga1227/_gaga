import com.oracle.tools.packager.Log;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class ConfigWriter {

	// vars
	String newline = System.getProperty("line.separator");

	/**
	 * Constructor
	 */
	public ConfigWriter() {
		try {
			// create new file and its file stream
			File file = new File("program.properties");
			FileOutputStream fileStream = new FileOutputStream(file);
			// call method to write data to file
			this.write(fileStream, "username=max");
			this.write(fileStream, "score=12550");
			this.write(fileStream, "level=5");
		}
		catch (IOException e) {
			System.out.println("Could not write file");
		}
	}

	/**
	 * write data to a file output stream
	 * @param stream file output stream
	 * @param output data to write
	 * @throws IOException file output exception
	 */
	private void write(FileOutputStream stream, String output) throws IOException {
		// prep output and convert to bytes[]
		output = output + newline;
		byte[] data = output.getBytes();
		// write data to file stream
		stream.write(data, 0, data.length);

		System.out.println(output);
	}

	/**
	 * App Main
	 * @param arguments
	 */
	public static void main(String[] arguments) {
		// init new class instance
		ConfigWriter cw = new ConfigWriter();
	}
}
