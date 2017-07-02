package ch01;


public class BaseTypes {
	/**
	 * Notes:
	 * - boolean a boolean value: true or false
	 * - char 16-bit Unicode character
	 * - byte 8-bit signed two’s complement integer
	 * - short 16-bit signed two’s complement integer
	 * - int 32-bit signed two’s complement integer
	 * - long 64-bit signed two’s complement integer
	 * - float 32-bit floating-point number (IEEE 754-1985)
	 * - double 64-bit floating-point number (IEEE 754-1985)
	 */

	// default value: false
	boolean flag;
	boolean verbose, debug; // two variables declared, but not yet initialized

	// default value: '\u0000'
	char grade = 'A';

	// default value: 0
	byte b = 12;
	short s = 24;
	int i, j, k = 257; // three variables declared; only k initialized
	long l = 890L; // note the use of 'L' here
	float pi = 3.1416F; // note the use of 'F' here
	double e = 2.71828, a = 6.022e23; // both variables are initialized
}
