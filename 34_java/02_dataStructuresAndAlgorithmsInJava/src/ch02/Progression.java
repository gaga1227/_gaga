package ch02;

public class Progression {
	// instance variable
	protected long current;

	// Constructs a progression with given start value
	public Progression(long start) {
		current = start;
	}

	// Constructs a progression starting at zero
	public Progression() {
		this(0L);
	}

	// Returns the next value of the progression
	public long nextValue() {
		long currentValue = current;
		// this protected call is responsible for advancing the current value
		advance();
		return currentValue;
	}

	// Advances the current value to the next value of the progression
	protected void advance() {
		current++;
	}

	// Prints the next n values of the progression, separated by spaces
	public void printProgression(int times) {
		System.out.print(nextValue());
		for (int i = 0; i < times; i++) {
			System.out.print(" " + nextValue());
		}
		System.out.println();
	}

	// main for demo purposes
	public static void main(String[] args) {
		Progression p = new Progression(2);
		p.printProgression(10);
	}
}


