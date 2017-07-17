package ch02;

/**
 * Notes:
 * - An interface is a collection of method declarations with no data and no bodies. That is, the methods of an interface are always empty; they are simply method signatures.
 * - Interfaces do not have constructors and they cannot be directly instantiated.
 */

// Interface for objects that can be sold
public interface Sellable {

	// Returns a description of the object
	public String description();

	// Returns the list price in cents
	public int listPrice();

	// Returns the lowest price in cents we will accept
	public int lowestPrice();
}
