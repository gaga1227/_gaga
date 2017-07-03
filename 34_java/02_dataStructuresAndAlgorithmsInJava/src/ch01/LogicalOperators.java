package ch01;

public class LogicalOperators {
	/**
	 * Notes:
	 * - The type of the result of any of these comparison is a boolean
	 * - Comparisons may also be performed on char values, with inequalities determined according to the underlying character codes
	 * - For reference types, operators == and != are defined so that expression a == b is true if a and b both refer to the identical object (or are both null).
	 * - The boolean operators && and || will not evaluate the second operand (to the right) in their expression if it is not needed to determine the value of the expression
	 */

	public static void main(String[] args) {
		int anInt = 6;
		int anotherInt = 0;

		System.out.println(anInt > anotherInt); // true
		System.out.println(anInt < anotherInt); // false
		System.out.println(anInt <= anotherInt); // false
		System.out.println(anInt >= anotherInt); // true
		System.out.println(anInt == anotherInt); // false
		System.out.println(anInt != anotherInt); // true

		// for reference types
		Counter a = new Counter();
		Counter b = a;
		Counter c = new Counter(3);
		Counter d = null;
		Counter e = null;

		System.out.println(a == b); // true
		System.out.println(a != b); // false
		System.out.println(a == c); // false
		System.out.println(d == e); // true

		// evaluation order
		System.out.println(2 > 1 && 2 == 1); // false
		System.out.println(2 == 1 && 2 != 1); // false
	}
}
