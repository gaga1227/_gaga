import nu.xom.*;
import java.io.IOException;

public class WeatherStation {

	// vars
	int[] highTemp = new int[6];
	int[] lowTemp = new int[6];
	String[] conditions = new String[6];

	String requestURL = "http://tinyurl.com/rd4r72";

	/**
	 * Constructor
	 */
	public WeatherStation() throws ParsingException, IOException {
		// get the XML document with XOM classes
		Builder builder = new Builder();
		Document doc = builder.build(requestURL);

		// get the root element, <forecast>
		Element root = doc.getRootElement();
		// get the <simpleforecast> element
		Element simple = root.getFirstChildElement("simpleforecast");
		// get the <forecastday> elements
		Elements days = simple.getChildElements("forecastday");

		//
		for (int current = 0; current < days.size(); current++) {
			// get elements
			Element day = days.get(current);
			Element high = day.getFirstChildElement("high");
			Element highF = high.getFirstChildElement("fahrenheit");
			Element low = day.getFirstChildElement("low");
			Element lowF = low.getFirstChildElement("fahrenheit");
			Element icon = day.getFirstChildElement("icon");

			// store values in object variables
			highTemp[current] = -1;
			lowTemp[current] = -1;

			try {
				highTemp[current] = Integer.parseInt(highF.getValue());
				lowTemp[current] = Integer.parseInt(lowF.getValue());
			} catch(NumberFormatException exp) {
				// nothing
			}
			conditions[current] = icon.getValue();
		}
	}

	/**
	 * output result
	 */
	public void display() {
		for (int i = 0; i < conditions.length; i++) {
			System.out.println("Period " + i);
			System.out.println("\tConditions: " + conditions[i]);
			System.out.println("\tHigh: " + highTemp[i]);
			System.out.println("\tLow: " + lowTemp[i]);
		}
	}

	/**
	 * APP Main
	 * @param arguments
	 */
	public static void main(String[] arguments) {
		try {
			WeatherStation station = new WeatherStation();
			station.display();
		}
		catch (Exception exp) {
			System.out.println("Error: " + exp.getMessage());
		}
	}
}


