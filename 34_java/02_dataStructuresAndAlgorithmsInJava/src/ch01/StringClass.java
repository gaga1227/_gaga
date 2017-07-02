package ch01;

public class StringClass {
	/**
	 * Notes:
	 * - Java’s char base type stores a value that represents a single text character
	 * - The form for expressing a character literal in Java is using single quotes, such as 'G'
	 * - Java provides support in the form of a String class to work with sequences of text characters in programs
	 * - A string instance represents a sequence of zero or more characters
	 * - Java uses double quotes to designate string literals
	 * - instances of String class are immutable, once an instance is created and initialized, the value of that instance cannot be changed, it allows for great efficiencies and optimizations within the Java Virtual Machine
	 */

	public static void main(String args[]) {
		// declare and initialize a String instance as follows
		String title = "Data Structures & Algorithms in Java";

		// Each character within a string can be referenced by using an index
		char firstChar = title.charAt(0);
		System.out.println("first title char is: " + firstChar);
		System.out.println("title length: " + title.length());

		// The primary operation for combining strings is called concatenation
		System.out.println("over" + "load");

		// greeting refers to a String instance, which is immutable
		String greeting = "Hello";
		// this operation does create a new string instance, copying all the characters of the existing string in the process, can be very time consuming for long strings
		greeting = greeting + " Ciao";
	}
}
