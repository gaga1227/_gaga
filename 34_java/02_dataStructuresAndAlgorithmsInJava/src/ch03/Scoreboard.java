package ch03;

public class Scoreboard {
	private int numEntries = 0; // number of actual entries
	private GameEntry[] board; // array of game entries (names & scores)

	// Constructs an empty scoreboard with the given capacity for storing entries
	public Scoreboard(int capacity) {
		board = new GameEntry[capacity];
	}

	// Attempt to add a new score to the collection (if it is high enough)
	public void add(GameEntry entry) {
		int score = entry.getScore();
		// is the new entry e really a high score
		if (numEntries < board.length || score > board[board.length - 1].getScore()) {
			// no score drops from the board
			if (numEntries < board.length) {
				numEntries++; // so overall number increases
			}
			// shift any lower scores rightward to make room for the new entry
			int j = numEntries - 1;
			while (j > 0 && board[j - 1].getScore() < score) {
				board[j] = board[j - 1]; // shift entry rightward
				j--; // and decrement j
			}
			// when done, add new entry
			board[j] = entry;
		}
	}

	// Remove and return the high score at index i
	public GameEntry remove(int i) throws IndexOutOfBoundsException {
		if (i < 0 || i >= numEntries) {
			throw new IndexOutOfBoundsException("Invalid index: " + i);
		}
		// save the object to be removed
		GameEntry temp = board[i];
		// count up from i (not down)
		for (int j = i; j < numEntries - 1; j++) {
			board[j] = board[j + 1]; // move one cell to the left
		}
		// null out the old last score
		board[numEntries - 1] = null;
		numEntries--;
		// return the removed object
		return temp;
	}
}
