package ch02;

import ch01.CreditCard;


/**
 * Notes:
 * - With Java’s generics framework, use formal type parameters to represent the relevant types
 * - Angle brackets are used to enclose the sequence of formal type parameters
 * - single-letter uppercase names are conventionally used for a formal type parameter
 * - The actual types for generic programming must be object types, e.g. Double instead of double
 * - using the generics framework, the advantage is there is no longer need for explicit narrowing casts from Object to a more specific type
 */

public class GenericsClass<F, S> {
	private F first;
	private S second;

	public GenericsClass(F first, S second) {
		this.first = first;
		this.second = second;
	}

	public F getFirst() {
		return first;
	}

	public S getSecond() {
		return second;
	}

	// demo
	public static void main(String[] args) {
		CreditCard creditCard = new CreditCard("John", "CBA", "12345", 1000);

		// we must explicitly specify actual type parameters that will take the place of the generic formal type parameters
		// angle brackets (aka “diamond”) can be empty with type inference since Java 7
		GenericsClass<String, CreditCard> genericPair = new GenericsClass<>("John", creditCard);
		// or can specify generic type parameters are explicitly in angle brackets during instantiation like prior to Java 7
		GenericsClass<String, CreditCard> explicitPair = new GenericsClass<String, CreditCard>("Johnny", creditCard);
		// or use classic style, not generics framework, without angle brackets like prior to Java 5
		// will result in a compiler warning when assigning to a variable with more specific types
		GenericsClass classicPair = new GenericsClass("Johnny", creditCard);

		// using generics framework, no need to explicitly narrow cast to specific type
		String first = genericPair.getFirst();
		CreditCard second = explicitPair.getSecond();
		// using classic style requires narrowing cast from Object type to specific type
		first = (String) classicPair.getFirst();
		second = (CreditCard) classicPair.getSecond();

		System.out.println(genericPair.getFirst() + "'s Credit Card: " + genericPair.getSecond().toString());
		System.out.println(explicitPair.getFirst() + "'s Credit Card: " + explicitPair.getSecond().toString());
		System.out.println(classicPair.getFirst() + "'s Credit Card: " + classicPair.getSecond().toString());
	}
}
