package ch01;

public class StaticModifier {
	public StaticModifier() {

	}

	/**
	 * Notes:
	 * - When a variable of a class is declared as static, its value is associated with the class as a whole, rather than with each individual instance of that class.
	 * - Static variables are used to store “global” information about a class.
	 * - Static methods can be useful for providing utility behaviors related to a class that need not rely on the state of any particular instance of that class
	 */

	private static int count = 0;

	public static int getCount() {
		return count;
	}

	public static void setCount(final int newCount) {
		count = newCount;
	}
}
