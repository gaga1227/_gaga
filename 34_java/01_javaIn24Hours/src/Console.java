import java.io.BufferedInputStream;
import java.io.IOException;

public class Console {
	// static method
	public static String readLine() {
		// create new string buffer
		StringBuffer response = new StringBuffer();

		try {
			// create stream
			BufferedInputStream bufferedStream = new BufferedInputStream(System.in);

			// read from input stream and add to response
			int in = 0;
			char inChar;
			do {
				in = bufferedStream.read();
				inChar = (char)in;
				if (in != -1) {
					response.append(inChar);
				}
			}
			while ((in != -1) & (inChar != '\n'));

			// close stream
			bufferedStream.close();

			return response.toString();
		}
		catch (IOException e) {
			System.out.println("Exception: " + e.getMessage());

			return null;
		}
	}

	/**
	 * Main
	 * @param arguments
	 */
	public static void main(String[] arguments) {
		System.out.print("You are standing at the end of the road ");
		System.out.print("before a small brick building. Around you ");
		System.out.print("is a forest. A small stream flows out of ");
		System.out.println("the building and down a gully.\n");
		System.out.print("> ");

		// call class static function
		String input = Console.readLine();

		// output
		if (input.startsWith("test")) {
			System.out.println("Got it: " + input);
		} else {
			System.out.println("That's not a verb I recognize.");
		}
	}
}
