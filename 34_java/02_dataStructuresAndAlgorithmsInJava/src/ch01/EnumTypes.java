package ch01;

public class EnumTypes {
	public enum Day {
		// definitions
		MON(1, "Monday"),
		TUE(2, "Tuesday"),
		WED(3, "Wednesday"),
		THU(4, "Thursday"),
		FRI(5, "Friday"),
		SAT(6, "Saturday"),
		SUN(7, "Sunday");

		// fields
		private final int dayIndex;
		private final String displayName;

		// constructor
		Day(int dayIndex, String displayName) {
			this.dayIndex = dayIndex;
			this.displayName = displayName;
		}
	}

	public static void main(String[] args) {
		Day mon = Day.MON;
		System.out.println(mon.dayIndex + ": " + mon.displayName);
	}
}
