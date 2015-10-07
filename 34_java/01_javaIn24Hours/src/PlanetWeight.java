public class PlanetWeight {
	public static void main(String[] args) {

		double weight = 205d;
		System.out.print("Your weight on Earth is ");
		System.out.print(weight + "\n");

		double mercury = weight * .378;
		System.out.print("Your weight on Mercury is ");
		System.out.println(mercury);

		double moon = weight * .166;
		System.out.print("Your weight on Moon is ");
		System.out.println(moon);

		double jupiter = weight * 2.364;
		System.out.print("Your weight on Jupiter is ");
		System.out.println(jupiter);

	}
}
