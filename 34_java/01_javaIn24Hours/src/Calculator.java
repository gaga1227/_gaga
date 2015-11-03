public class Calculator {
	public static void main(String[] arguments) {
		float sum = 0;
		for (int i = 0; i < arguments.length; i++) {
			try {
				sum += Float.parseFloat(arguments[i]);
			} catch(NumberFormatException e) {
				System.out.println(arguments[i] + " is not a number.");
			}
		}
		System.out.println("Those numbers add up to " + sum);
	}
}
