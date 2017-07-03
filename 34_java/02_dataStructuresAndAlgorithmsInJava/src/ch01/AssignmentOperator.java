package ch01;

public class AssignmentOperator {
	/**
	 * Notes:
	 * - The standard assignment operator in Java is “=”
	 */

	public static void main(String[] args) {
		int anInt;
		int anotherInt;

		anInt = anotherInt = 6; // works because ’=’ operators are evaluated right-to-left
		System.out.println(anInt == anotherInt); // true
	}
}
