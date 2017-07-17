package ch02;

public class FibonacciProgression extends AbstractProgression {
	private long prev;

	// Constructs generalized Fibonacci, with give first and second values
	public FibonacciProgression(long first, long second) {
		super(first);
		prev = second - first; // fictitious value preceding the first
	}

	// Constructs progression
	public FibonacciProgression() {
		this(0L, 1L);
	}

	// Replaces (prev,current) with (current, current+prev)
	// this overrides method in abstract class
	@Override
	protected void advance() {
		long temp = prev;
		prev = current;
		current += temp;
	}

	// main for demo purposes
	public static void main(String[] args) {
		AbstractProgression fp = new FibonacciProgression(2L, 10L);
		fp.printProgression(5);
	}
}
