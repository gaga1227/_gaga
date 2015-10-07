import java.util.*;

public class Name {
	public static void main(String[] arguments) {
		String[] names = {
			"Lauren", "Audrina", "Heidi", "Whitney",
			"Stephanie", "Spencer", "Lisa", "Brody", "Frankie",
			"Holly", "Jordan", "Brian", "Jason"
		};

		System.out.println("The original order:");
		for (int i = 0; i < names.length; i++) {
			System.out.print(i + ": " + names[i] + " ");
			if (i == names.length - 1) {
				System.out.println();
			}
		}

		Arrays.sort(names);

		System.out.println("The new order:");
		for (int i = 0; i < names.length; i++) {
			System.out.print(i + ": " + names[i] + " ");
			if (i == names.length - 1) {
				System.out.println();
			}
		}
	}
}
