package ch01;

public class MainMethod {
	/**
	 * Notes:
	 * - The primary control for an application in Java must begin in some class with the execution of a special method named main
	 * - 'args' represents what are known as command-line arguments
	 * - When defining a class that is meant to be used by other classes rather than as a self-standing program, there is no need to define a main method
	 */

	public static void main(String[] args) {
		System.out.println(args.length);
	}
}
