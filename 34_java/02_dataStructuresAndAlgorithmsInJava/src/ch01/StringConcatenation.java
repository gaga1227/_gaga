package ch01;

public class StringConcatenation {
	/**
	 * Notes:
	 * - With strings, the (+) operator performs concatenation
	 * - Java converts non-string values into strings when they are involved in a string concatenation
	 */

	public static void main(String[] args) {
		String aString = "johnny " + "walker " + 1;
		System.out.println(aString);
	}
}
