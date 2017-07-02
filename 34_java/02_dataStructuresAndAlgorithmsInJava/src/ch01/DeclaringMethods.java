package ch01;

public class DeclaringMethods {
	private int count = 0;

	/**
	 * Notes:
	 * - the signature, which defines the name and parameters for a method, specifies how the method is called
	 * - the body, which defines what the method does, specifies what the object will do when it is called
	 * - When a (non-static) method of a class is called, it is invoked on a specific instance of that class and can change the state of that object.
	 * - A method definition must specify the type of value the method will return
	 * - Java methods can return only one value, compound object can be returned containing multiple values
	 * - All parameters in Java are passed by value, any time we pass a parameter to a method, a copy of that parameter is made for use within the method body, the method can change the copy but not the original
	 * - If we pass an object reference as a parameter to a method, then the reference is copied as well, reassigning the internal reference variable inside a method will not change the reference that was passed in
	 */

	// If the method does not return a value then the keyword void must be used
	public void increment(int delta) {
		count += delta;
	}

	// To return a value in Java, the body of the method must use the return keyword, followed by a value of the appropriate return type
	public int getCount() {
		return count;
	}

	public String getCountString() {
		return ((Integer) count).toString();
	}

	private Counter counter = new Counter();

	public void setNewCounter(Counter counter) {
		// both 'counterInMethod' and 'counter' points to same object
		Counter counterInMethod = counter;

		// 'counterInMethod' is now pointing to new object
		counterInMethod = new Counter(10);
	}
}
