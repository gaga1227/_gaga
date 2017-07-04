package ch01;

public class TypeConversions {
	/**
	 * Notes:
	 * - Casting is an operation that allows us to change the type of a value
	 */

	public static void main(String[] args) {
		// explicit casting syntax
		// from one primitive type to another primitive type
		// from one reference type to another reference type
		double d1 = 3.2;
		double d2 = 3.9999;
		int i1 = (int) d1; // i1 3 narrowing cast, may lose precision
		int i2 = (int) d2; // i2 3 narrowing cast, may lose precision
		double d3 = (double) i2; // 3.0 widening cast
		System.out.println(i1);
		System.out.println(i2);
		System.out.println(d3);

		// implicit cast, based upon the context of an expression
		i1 = 42;
		d1 = i1; // d1 gets value 42.0
		//i1 = d1; compile error: possible loss of precision

		// implicit casting in arithmetic operations
		d3 = 3 + 5.7; // d3 = 3.0 + 5.7 = 8.7

		// where only implicit casting is allowed
		String t = " " + 4.5; // " " + "4.5" = " 4.5"
	}
}
