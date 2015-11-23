import java.io.File;
import java.io.FileInputStream;

public class ID3Reader {
	/**
	 * Main
	 * @param arguments - input of filename
	 */
	public static void main (String[] arguments) {

		// vars
		int ID3Bytes = 128;
		String param1 = arguments[0];

		// start IO operation
		try {
			// create file and stream objects
			File song = new File(param1);
			FileInputStream fileStream = new FileInputStream(song);

			// get file size and bytes to read
			int size = (int)song.length();
			fileStream.skip(size - ID3Bytes);
			byte[] last128 = new byte[ID3Bytes];

			// read file bytes
			fileStream.read(last128);

			// get ID3 info from bytes to String
			String id3 = new String(last128);

			// check if is TAG info
			String tag = id3.substring(0, 3);
			if (tag.equals("TAG")) {
				System.out.println("Title: " + id3.substring(3, 32));
				System.out.println("Artist: " + id3.substring(33, 62));
				System.out.println("Album: " + id3.substring(63, 91));
				System.out.println("Year: " + id3.substring(93, 97));
			} else {
				System.out.println(param1 + " does not contain ID3 info.");
			}

			// close IO stream
			fileStream.close();
		}
		catch (Exception e) {
			System.out.println("Error — " + e.toString());
		}
	}
}
