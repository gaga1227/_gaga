public class Wheel {
	public static void main(String[] args) {
		String phrase[] = {
			"A STITCH IN TIME SAVES NINE",
			"DON’T EAT YELLOW SNOW",
			"JUST DO IT",
			"EVERY GOOD BOY DOES FINE",
			"I WANT MY MTV",
			"I LIKE IKE",
			"PLAY IT AGAIN, SAM",
			"FROSTY THE SNOWMAN",
			"ONE MORE FOR THE ROAD",
			"HOME FIELD ADVANTAGE",
			"VALENTINE’S DAY MASSACRE",
			"GROVER CLEVELAND OHIO",
			"SPAGHETTI WESTERN",
			"AQUA TEEN HUNGER FORCE",
			"IT’S A WONDERFUL LIFE"
		};

		//count
		int[] letterCount = new int[26];
		for (int count = 0; count < phrase.length; count++) {
			String current = phrase[count];
			char[] letters = current.toCharArray();
			for (int count2 = 0; count2 < letters.length; count2++) {
				char letter = letters[count2];
				if ( (letter >= 'A') & (letter <= 'Z') ) {
					letterCount[letter - 'A']++;
				}
			}
		}

		//display
		for (char count = 'A'; count <= 'Z'; count++) {
			System.out.println(
				count + ": " +
				letterCount[count - 'A']
			);
		}
	}
}
