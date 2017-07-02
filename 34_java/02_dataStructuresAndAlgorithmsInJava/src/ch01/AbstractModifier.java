package ch01;

public abstract class AbstractModifier {
	/**
	 * Notes:
	 * - Abstract method: signature is provided but without an implementation of the method body
	 * - Abstract methods are an advanced feature of object-oriented programming to be combined with inheritance
	 * - any subclass of a class with abstract methods is expected to provide a concrete implementation for each abstract method
	 * - A class with one or more abstract methods must also be formally declared as abstract
	 * - Java will not allow any instances of an abstract class to be constructed, although reference variables may be declared with an abstract type
	 */

	public abstract void setInfo(String data);

	public abstract String getInfo();
}
