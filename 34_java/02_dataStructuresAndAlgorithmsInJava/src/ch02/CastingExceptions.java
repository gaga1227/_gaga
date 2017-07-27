package ch02;

public class CastingExceptions {
	public static void main(String[] args) {
		Number n;
		Integer i;
		n = new Integer(3);
		if (n instanceof Integer) {
			i = (Integer) n; // This is legal
		}
		n = new Double(3.1415);
		if (n instanceof Integer) {
			i = (Integer) n;
		}
	}
}
