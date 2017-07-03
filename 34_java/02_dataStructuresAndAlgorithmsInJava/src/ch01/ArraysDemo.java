package ch01;

import java.util.Arrays;

public class ArraysDemo {
	/**
	 * Notes:
	 * - an instance of an array is treated as an object by Java, and variables of an array type are reference variables
	 * - When arrays are created using the new operator, all of their elements are automatically assigned the default value for the element type (e.g. 0, false, or null)
	 */

	public static void main(String[] args) {

		// initialise empty arrays with zero capacity
		int[] emptyIntArray = {};
		boolean[] emptyBooleanArray = new boolean[0];

		// initialise array with capacity
		char[] charArray = new char[3]; // create with new operator
		double[] doubleArray = {3.1D, 1.2D, 0.52D}; // create with literal form
		long[] longArray = new long[5]; // array initialised with default values: 0L
		Counter[] counterArray = new Counter[5]; // array initialised with default values: null

		// update array
		charArray[2] = 'k';
		doubleArray[2] = 8.8D;

		System.out.println("emptyIntArray.length: " + emptyIntArray.length);
		System.out.println("emptyBooleanArray.length: " + emptyBooleanArray.length);
		System.out.println("charArray: " + Arrays.toString(charArray));
		System.out.println("doubleArray: " + Arrays.toString(doubleArray));
		System.out.println("longArray: " + Arrays.toString(longArray));
		System.out.println("counterArray: " + Arrays.toString(counterArray));

		// throws ArrayIndexOutOfBoundsException
		try {
			emptyIntArray[0] = 1; // initialised with 0 capacity
			emptyBooleanArray[0] = true; // initialised with 0 capacity
			doubleArray[3] = 8.8D; // initialised with capacity of 3
		} catch (ArrayIndexOutOfBoundsException e) {
			throw (e);
		}
	}
}
