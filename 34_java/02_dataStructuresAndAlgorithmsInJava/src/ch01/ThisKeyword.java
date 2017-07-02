package ch01;

public class ThisKeyword {
	/**
	 * Notes:
	 * - Within the body of a (non-static) method in Java, the keyword this is automatically defined as a reference to the instance upon which the method was invoked.
	 */

	private String data;

	/**
	 * Usage 3:
	 * To allow one constructor body to invoke another constructor body.
	 */
	public ThisKeyword() {
		this("data");
	}

	/**
	 * Usage 2:
	 * To differentiate between an instance variable and a local variable with the same name
	 */
	public ThisKeyword(String data) {
		this.data = data;
	}

	/**
	 * Usage 1:
	 * To store the reference in a variable, or send it as a parameter to another method that expects an instance of that type as an argument
	 */
	public String getData() {
		return getThisData(this);
	}

	private String getThisData(ThisKeyword instance) {
		return instance.data;
	}
}
