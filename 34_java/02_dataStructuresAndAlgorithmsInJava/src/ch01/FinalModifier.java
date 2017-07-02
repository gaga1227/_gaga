package ch01;

public final class FinalModifier {
	/**
	 * Notes:
	 * - A variable that is declared with the final modifier can be initialized as part of that declaration, but can never again be assigned a new value.
	 * - If it is a base type, then it is a constant
	 * - If a reference variable is final, then it will always refer to the same object (even if that object changes its internal state).
	 * - If a member variable of a class is declared as final, it will typically be declared as static as well, because it would be unnecessarily wasteful to have every instance store the identical value when that value can be shared by the entire class.
	 * - A final method cannot be overridden by a subclass, and a final class cannot even be subclassed.
	 */

	public static final String FINAL = "no further change";

	public final String getFinalInfo() {
		return FINAL;
	}
}
