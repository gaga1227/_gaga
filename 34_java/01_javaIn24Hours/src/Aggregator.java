import nu.xom.*;
import java.io.IOException;

public class Aggregator {
	// vars
	public String[] title = new String[15];
	public String[] link = new String[15];
	public int count = 0;

	/**
	 * Constructor
	 * @param rssUrl
	 */
	public Aggregator(String rssUrl) {
		try {
			// get XML doc from URL
			Builder builder = new Builder();
			Document doc = builder.build(rssUrl);

			// find target parent element
			Element root = doc.getRootElement();
			Element channel = root.getFirstChildElement("channel");

			// start populating arrays if parent element found
			if (channel != null) {
				Elements items = channel.getChildElements("item");
				for (int current = 0; current < items.size(); current ++) {
					// only do first 15 if available
					if (count > 15) {
						break;
					}

					// populate element info to arrays
					Element item = items.get(current);
					Element titleElement = item.getFirstChildElement("title");
					Element linkElement = item.getFirstChildElement("link");
					title[current] = titleElement.getValue();
					link[current] = linkElement.getValue();

					// update populated items count
					count ++;
				}
			}
		}
		catch (IOException ioExp) {
			System.out.println("IO error: " + ioExp.getMessage());
			ioExp.printStackTrace();
		}
		catch (ParsingException parseExp) {
			System.out.println("XML error: " + parseExp.getMessage());
			parseExp.printStackTrace();
		}
	}

	/**
	 * Print content list
	 */
	public void listItems() {
		for (int i = 0; i < count; i++) {
			if (title[i] != null) {
				System.out.println("\n" + (i + 1) + ". " + title[i]);
				System.out.println(link[i]);
			}
		}
	}

	/**
	 * App Main
	 * @param arguments
	 */
	public static void main(String[] arguments) {
		// prep url param
		String param;
		if (arguments.length > 0) {
			param = arguments[0];
		} else {
			param = "http://feeds.drudge.com/retort";
		}

		// init class instance with param
		Aggregator aggie = new Aggregator(param);
		aggie.listItems();
	}
}
