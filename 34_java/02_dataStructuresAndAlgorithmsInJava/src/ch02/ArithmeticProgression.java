package ch02;

public class ArithmeticProgression extends Progression {
	private long increment;

	// Constructs arithmetic progression with arbitrary start and increment
	public ArithmeticProgression(long start, long increment) {
		super(start);
		this.increment = increment;
	}

	// Constructs progression with increment
	public ArithmeticProgression(long increment) {
		this(0L, increment);
	}

	// Constructs progression
	public ArithmeticProgression() {
		this(0L, 1L);
	}

	// Adds the arithmetic increment to the current value
	@Override
	protected void advance() {
		current += increment;
	}

	// main for demo purposes
	public static void main(String[] args) {
		Progression ap = new ArithmeticProgression(2L, 10L);
		ap.printProgression(10);
	}
}
