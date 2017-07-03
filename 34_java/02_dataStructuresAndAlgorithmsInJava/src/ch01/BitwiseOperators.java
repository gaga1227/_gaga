package ch01;

public class BitwiseOperators {
	/**
	 * Notes:
	 * - Bitwise operations are operations that directly manipulate bits
	 */

	public static void main(String[] args) {
		int a = 60; // 60 = 0011 1100
		int b = 13; // 13 = 0000 1101
		int c = 0;

		// bitwise and
		// - compares corresponding bits in both operands
		// - if both bits are 1, the corresponding result bit is set to 1, otherwise 0
		c = a & b; // 12 = 0000 1100
		System.out.println("a & b = " + c);

		// bitwise or
		// - compares corresponding bits in both operands
		// - if either bits are 1, the corresponding result bit is set to 1, otherwise 0
		c = a | b; // 61 = 0011 1101
		System.out.println("a | b = " + c);

		// bitwise exclusive-or
		// - compares corresponding bits in both operands
		// - if one bit is 0 and the other bit is 1, the corresponding result bit is set to 1, otherwise 0
		c = a ^ b; // 49 = 0011 0001
		System.out.println("a ^ b = " + c);

		// bitwise complement (prefix unary operator)
		// - has the effect of reversing each bit
		c = ~a; // -61 = 1100 0011
		System.out.println("~a = " + c);

		// shift bits left, filling in with zeros
		// - shifts its first operand left by the number of bits specified by its second operand
		// - fills right side bits with 0
		c = a << 2; // 240 = 1111 0000
		System.out.println("a << 2 = " + c);

		// shift bits right, filling in with sign bit
		// - shifts its first operand right by the number of bits specified by its second operand
		// - removes left side bits
		c = a >> 2; // 15 = 1111
		System.out.println("a >> 2  = " + c);

		// shift bits right, filling in with zeros
		// - shifts its first operand right by the number of bits specified by its second operand
		// - fills right side bits with 0
		c = a >>> 2; // 15 = 0000 1111
		System.out.println("a >>> 2 = " + c);
	}
}
