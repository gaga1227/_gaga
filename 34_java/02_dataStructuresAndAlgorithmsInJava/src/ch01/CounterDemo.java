package ch01;

public class CounterDemo {
	/**
	 * Notes:
	 * - Classes are known as reference types in Java
	 * - a variable of a reference type is known as a reference variable
	 * - A reference variable is capable of storing the location (i.e., memory address) of an object from the declared class.
	 * - A reference variable can also store a special value null, that represents the lack of an object
	 * - The new operator returns a reference to the newly created instance; the returned reference is typically assigned to a variable for further use
	 * - The default values are null for reference variables
	 * - If the dot operator is used on a reference that is currently null, the Java runtime environment will throw a NullPointerException
	 * - A method's name combined with the number and types of its parameters is called a method’s signature
	 * - signature of a method in Java does not include the type that the method returns, so Java does not allow two methods with the same signature to return different types
	 * - A reference variable v can be viewed as a “pointer” to some object o
	 * - There can, in fact, be many references pointing to the same object
	 */

	public static void main(String[] args) {
		Counter c; // declares a variable; no counter yet constructed
		c = new Counter(); // constructs a counter; assigns its reference to c; count = 0
		c.increment(); // increases its value by one; count = 1
		c.increment(3); // increases its value by three more; count = 4
		int temp = c.getCount(); // returns 4
		c.reset(); // count = 0
		System.out.println("temp: " + temp);
		System.out.println("c.count: " + c.getCount());

		Counter d = new Counter(5); // declares and constructs a counter having value 5
		d.increment(); // count = 6
		System.out.println("d.count: " + d.getCount());

		Counter e = d; // assigns e to reference the same object as d
		temp = e.getCount(); // returns 6
		e.increment(2); // count = 8
		System.out.println("temp: " + temp);
		System.out.println("d.count: " + d.getCount());
		System.out.println("e.count: " + e.getCount());
	}
}
