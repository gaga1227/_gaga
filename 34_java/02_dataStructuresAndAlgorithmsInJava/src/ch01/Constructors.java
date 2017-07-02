package ch01;

public class Constructors {
	private String data;

	/**
	 * Notes:
	 * - A constructor is a special kind of method that is used to initialize a newly created instance of the class so that it will be in a consistent and stable initial state.
	 * - Constructors cannot be static, abstract, or final, can only have access modifiers
	 * - The name of the constructor must be identical to the name of the class it constructs
	 * - We don’t specify a return type for a constructor (not even void), new operator is responsible for returning a reference to the new instance to the caller
	 * - the responsibility of the constructor method is only to initialize the state of the new instance
	 * - A class can have many constructors, but each must have a different signature
	 * - Java provides an implicit default constructor for the class, having zero arguments and leaving all instance variables initialized to their default values. However, if a class defines one or more non-default constructors, no default constructor will be provided.
	 */

	// default constructor
	// still required here if default initialisation is required
	public Constructors() {
		data = "data";
	}

	public Constructors(String data) {
		this.data = data;
	}
}
