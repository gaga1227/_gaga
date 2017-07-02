package ch01;

public class StringBuilderClass {
	/**
	 * Notes:
	 * - In order to support more efficient editing of character strings, Java provides a StringBuilder class, which is effectively a mutable version of a string
	 */

	public static void main(String args[]) {
		StringBuilder mutableString = new StringBuilder("initial");
		mutableString.append(" value");

		System.out.println(mutableString.toString());
	}
}
