package ch01;

public class OperatorPrecedence {
	/**
	 * Notes:
	 * 1. array index [], method call (), dot operator
	 * 2. postfix ops (exp++ exp−−), prefix ops (++exp −−exp +exp −exp ˜exp !exp), cast ((type) exp)
	 * 3. mult./div. * / %
	 * 4. add./subt. + -
	 * 5. shift << >> >>>
	 * 6. comparison < <= > >= instanceof
	 * 7. equality == !=
	 * 8. bitwise-and &
	 * 9. bitwise-xor ^
	 * 10. bitwise-or |
	 * 11. and &&
	 * 12. or ||
	 * 13. conditional (booleanExpression ? valueIfTrue : valueIfFalse)
	 * 14. assignment (= += −= *= /= %= <<= >>= >>>= &= ˆ= |=)
	 *
	 * - Operators in Java are evaluated according to the ordering above if parentheses are not used to determine the order of evaluation
	 * - Operators on the same line are evaluated in left-to-right order (except for assignment and prefix operations, which are evaluated in right-to-left order), subject to the conditional evaluation rule for boolean && and || operations
	 */

	public static void main(String[] args) {
		int a = 10;
		int b = 2;
		int result = (a + a / b) * b++ + a - (a > ++b ? 1 : 2);
		System.out.println(result); // 39
	}
}
