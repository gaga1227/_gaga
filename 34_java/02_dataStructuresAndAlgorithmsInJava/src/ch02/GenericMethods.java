package ch02;

import java.util.Arrays;


public class GenericMethods {

	// use of the <T> modifier to declare the method to be generic
	public static <T> void reverse(T[] data) {
		int low = 0, high = data.length - 1;
		while (low < high) {
			// use of the type T within the method body
			T temp = data[low];
			data[low++] = data[high];
			data[high--] = temp;
		}
	}

	// demo
	public static void main(String[] args) {
		Integer[] numbers = new Integer[]{1, 2, 3};
		GenericMethods.reverse(numbers);
		System.out.println(Arrays.asList(numbers).toString());
	}
}
