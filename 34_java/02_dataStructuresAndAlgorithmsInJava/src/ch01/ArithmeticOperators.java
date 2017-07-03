package ch01;

public class ArithmeticOperators {
	/**
	 * Notes:
	 * - unary minus: which can be placed in front of an arithmetic expression to invert its sign
	 * - Parentheses can be used in any expression to define the order of evaluation
	 */

	public static void main(String[] args) {
		int anInt;

		// binary arithmetic operators in Java
		anInt = 2 + 1; // 3
		anInt *= 3; // 9 (Compound Assignment Operators)
		anInt -= 2; // 7 (Compound Assignment Operators)
		anInt = anInt % 2; // 1 (remainder)
		anInt = -anInt; // -1 (unary minus)
		System.out.println("anInt: " + anInt);
	}
}
