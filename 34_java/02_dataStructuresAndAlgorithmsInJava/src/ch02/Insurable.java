package ch02;

/**
 * Notes:
 * - In Java, multiple inheritance is allowed for interfaces
 * - use multiple inheritance of interfaces as a mechanism for “mixing” the methods from two or more unrelated interfaces to define an interface that combines their functionality, possibly adding more methods of its own
 */

public interface Insurable extends Sellable, Transportable {

	// Returns insured value in cents
	public int insuredValue();
}
