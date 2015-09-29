import java.util.Calendar;

public class Clock {
	public static void main(String[] args) {

		//get day and time
		Calendar now = Calendar.getInstance();
		int hour = now.get(Calendar.HOUR_OF_DAY);
		int minute = now.get(Calendar.MINUTE);
		int month = now.get(Calendar.MONTH) + 1; //starts from 0
		int day = now.get(Calendar.DAY_OF_MONTH);
		int year = now.get(Calendar.YEAR);

		//display greeting
		if (hour < 12) {
			System.out.println("Good morning!");
		} else if (hour < 17) {
			System.out.println("Good afternoon!");
		} else {
			System.out.println("Good evening!");
		}

		//minute message
		System.out.print("It's");
		if (minute != 0) {
			System.out.print(" " + minute + " ");
			System.out.print( (minute != 1) ? "minutes" : "minute");
			System.out.print(" past");
		}

		//hour message
		System.out.print(" ");
		System.out.print( (hour > 12) ? (hour - 12) : hour );
		System.out.print(" o'clock on ");

		//month message
		switch(month) {
			case 1:
				System.out.print("Jan");
				break;
			case 2:
				System.out.print("Feb");
				break;
			case 3:
				System.out.print("Mar");
				break;
			case 4:
				System.out.print("Apr");
				break;
			case 5:
				System.out.print("May");
				break;
			case 6:
				System.out.print("Jun");
				break;
			case 7:
				System.out.print("Jul");
				break;
			case 8:
				System.out.print("Aug");
				break;
			case 9:
				System.out.print("Sep");
				break;
			case 10:
				System.out.print("Oct");
				break;
			case 11:
				System.out.print("Nov");
				break;
			case 12:
				System.out.print("Dec");
		}

		//date and year
		System.out.println(" " + day + ", " + year + ".");
	}
}
