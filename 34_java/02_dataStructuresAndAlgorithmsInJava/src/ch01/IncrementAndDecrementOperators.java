package ch01;

public class IncrementAndDecrementOperators {
	/**
	 * Notes:
	 * - if operator is used in front of a variable reference, then 1 is added to (or subtracted from) the variable and its value is read into the expression
	 * - If it is used after a variable reference, then the value is first read and then the variable is incremented or decremented by 1
	 */

	public static void main(String[] args) {
		int anInt = 6;
		int anotherInt = 0;

		anInt++; // 7, increment 1
		--anotherInt; // -1, decrement 1
		System.out.println(anInt);
		System.out.println(anotherInt);

		anotherInt = ++anInt; // 8, 8, first increment then read
		System.out.println(anInt);
		System.out.println(anotherInt);

		anInt = anotherInt--; // 8, 7, first read then decrement
		System.out.println(anInt);
		System.out.println(anotherInt);
	}
}
