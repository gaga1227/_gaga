package ch02;

public class GeometricProgression extends Progression {
	private long base;

	// Constructs arithmetic progression with arbitrary start and base
	public GeometricProgression(long start, long base) {
		super(start);
		this.base = base;
	}

	// Constructs progression with base
	public GeometricProgression(long base) {
		this(1L, base);
	}

	// Constructs progression
	public GeometricProgression() {
		this(1L, 2L);
	}

	// Multiplies the current value by the geometric base
	@Override
	protected void advance() {
		current *= base;
	}

	// main for demo purposes
	public static void main(String[] args) {
		Progression gp = new GeometricProgression(2L);
		gp.printProgression(16);
	}
}
