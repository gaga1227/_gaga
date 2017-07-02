package ch01;

public class WrapperTypes {
	/**
	 * Notes:
	 * - There are many data structures and algorithms in Java’s libraries that are specifically designed so that they only work with object types (not primitives base types).
	 * - Java defines a wrapper class for each base type to get around this
	 * - Java provides additional support for implicitly converting between base types and their wrapper types through a process known as automatic boxing and unboxing
	 */

	public static void main(String[] args) {
		// not using automatic boxing for demo purposes
		Boolean booleanObj = new Boolean(true);
		Character charObj = new Character('Z');
		Byte byteObj = new Byte((byte) 34);
		Short shortObj = new Short((short) 100);
		Integer intObj = new Integer(1045);
		Long longObj = new Long(10849L);
		Float floatObj = new Float(3.934F);
		Double doubleObj = new Double(3.934);

		System.out.println(booleanObj.booleanValue());
		System.out.println(charObj.charValue());
		System.out.println(byteObj.byteValue());
		System.out.println(shortObj.shortValue());
		System.out.println(intObj.intValue());
		System.out.println(longObj.longValue());
		System.out.println(floatObj.floatValue());
		System.out.println(doubleObj.doubleValue());
	}
}
