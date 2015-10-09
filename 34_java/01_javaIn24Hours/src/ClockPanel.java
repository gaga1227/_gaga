import javax.swing.*;
import java.util.*;

public class ClockPanel extends JPanel {

	//constructor
	public ClockPanel() {
		super();

		//get current time
		String currentTime = getTime();

		//add UI comps
		JLabel time = new JLabel("Time: ");
		JLabel current = new JLabel(currentTime);
		add(time);
		add(current);
	}

	//methods
	final String getTime() {
		String time;

		//get day and time
		Calendar now = Calendar.getInstance();
		int hour = now.get(Calendar.HOUR_OF_DAY);
		int minute = now.get(Calendar.MINUTE);
		int month = now.get(Calendar.MONTH) + 1; //starts from 0
		int day = now.get(Calendar.DAY_OF_MONTH);
		int year = now.get(Calendar.YEAR);


		//month message
		String monthName = "";
		switch(month) {
			case 1:
				monthName = "Jan";
				break;
			case 2:
				monthName = "Feb";
				break;
			case 3:
				monthName = "Mar";
				break;
			case 4:
				monthName = "Apr";
				break;
			case 5:
				monthName = "May";
				break;
			case 6:
				monthName = "Jun";
				break;
			case 7:
				monthName = "Jul";
				break;
			case 8:
				monthName = "Aug";
				break;
			case 9:
				monthName = "Sep";
				break;
			case 10:
				monthName = "Oct";
				break;
			case 11:
				monthName = "Nov";
				break;
			case 12:
				monthName = "Dec";
		}

		//prep time string
		time = monthName + " " + day + ", " + year + " " + hour + ":" + minute;
		return time;
	}
}
