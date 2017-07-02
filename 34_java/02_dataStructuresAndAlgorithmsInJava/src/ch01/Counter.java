package ch01;

public class Counter {
	private int count;

	/**
	 * default Constructor (has zero-parameter)
	 */
	public Counter() {

	}

	/**
	 * Constructor
	 *
	 * @param initial - initial count when constructed
	 */
	public Counter(int initial) {
		count = initial;
	}

	public int getCount() {
		return count;
	}

	/**
	 * increment
	 */
	public void increment() {
		count++;
	}

	/**
	 * increment by delta
	 *
	 * @param delta
	 */
	public void increment(int delta) {
		count += delta;
	}

	/**
	 * reset count to 0
	 */
	public void reset() {
		count = 0;
	}
}
