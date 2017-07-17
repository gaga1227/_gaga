package ch02;

public class TestProgression {
	public static void main(String[] args) {
		// polymorphism, a reference variable to take different forms
		Progression progression;
		AbstractProgression abstractProgression;

		// test ArithmeticProgression
		System.out.print("Arithmetic progression with default increment: ");
		progression = new ArithmeticProgression();
		progression.printProgression(10);
		System.out.print("Arithmetic progression with increment 5: ");
		progression = new ArithmeticProgression(5);
		progression.printProgression(10);
		System.out.print("Arithmetic progression with start 2: ");
		progression = new ArithmeticProgression(5, 2);
		progression.printProgression(10);

		// test GeometricProgression
		System.out.print("Geometric progression with default base: ");
		progression = new GeometricProgression();
		progression.printProgression(10);
		System.out.print("Geometric progression with base 3: ");
		progression = new GeometricProgression(3);
		progression.printProgression(10);

		// test FibonacciProgression
		System.out.print("Fibonacci progression with default start values: ");
		abstractProgression = new FibonacciProgression();
		abstractProgression.printProgression(10);
		System.out.print("Fibonacci progression with start values 4 and 6: ");
		abstractProgression = new FibonacciProgression(4, 6);
		abstractProgression.printProgression(8);
	}
}
