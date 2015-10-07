public class Game {
	public static void main(String[] args) {
		int total = 0;
		int score = 7;
		if (score == 7) {
			System.out.println("You score a touchdown!");
		}
		if (score == 3) {
			System.out.println("You kick a field goal!");
		}
		total = total + score;
		System.out.println("Total score: " + total);
	}
}
