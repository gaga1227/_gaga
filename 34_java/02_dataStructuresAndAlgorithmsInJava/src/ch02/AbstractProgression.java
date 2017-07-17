package ch02;

/**
 * Notes:
 * - an abstract class serves a role somewhat between that of a traditional class and that of an interface
 * - an abstract class may define signatures for one or more methods without providing an implementation of those method bodies; such methods are known as abstract methods
 * - unlike an interface, an abstract class may define one or more fields and any number of methods with implementation (so-called concrete methods)
 * - An abstract class may also extend another class and be extended by further subclasses
 * - an abstract class may not be instantiated
 * - A subclass of an abstract class must provide an implementation for the abstract methods of its superclass, or else remain abstract
 * - the use of abstract classes in Java is limited to single inheritance, so a class may have at most one superclass, whether concrete or abstract
 */

// use of the abstract modifier
public abstract class AbstractProgression {
	protected long current;

	public AbstractProgression(long start) {
		current = start;
	}

	public AbstractProgression() {
		this(0L);
	}

	// this is a concrete method
	public long nextValue() {
		long currentValue = current;
		advance();
		return currentValue;
	}

	// this is a abstract method
	// notice the lack of a method body
	protected abstract void advance();

	// this is a concrete method
	public void printProgression(int times) {
		System.out.print(nextValue());
		for (int i = 0; i < times; i++) {
			System.out.print(" " + nextValue());
		}
		System.out.println();
	}
}
