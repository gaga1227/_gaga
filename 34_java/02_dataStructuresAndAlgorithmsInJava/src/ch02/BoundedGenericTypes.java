package ch02;

/**
 * Notes:
 * - A formal parameter type can be restricted by using the extends keyword followed by a class or interface
 * - only a type that satisfies the stated condition is allowed to substitute for the parameter
 * - The advantage of such a bounded type is that it becomes possible to call any methods that are guaranteed by the stated bound
 */

public class BoundedGenericTypes<T extends Sellable> {
	public void printItem(T item) {
		// can call methods from specific types from a generic type
		System.out.println("Title: " + item.description() + ", Price: $" + item.listPrice());
	}

	// demo
	public static void main(String[] args) {
		Photograph item = new Photograph("Smelly Cat", 12, true);
		BoundedGenericTypes<Photograph> boundedGenericTypes = new BoundedGenericTypes<>();
		boundedGenericTypes.printItem(item);
	}
}
