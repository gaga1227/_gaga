import java.awt.*;

public class PointTester {
	public static void main(String[] args) {
		//create point objects
		Point object1 = new Point(11, 22);
		Point3D object2 = new Point3D(7, 6, 64);

		//test point
		System.out.println("The 2D point is located at (" + object1.x + ", " + object1.y + ")");
		System.out.println("\tIt’s being moved to (4, 13)");

		object1.move(4, 13);

		System.out.println("The 2D point is now at (" + object1.x + ", " + object1.y + ")");
		System.out.println("\tIt's being moved -10 units on both the x and y axes");

		object1.translate(-10, -10);

		System.out.println("The 2D point ends up at (" + object1.x + ", " + object1.y + ")");

		//test point3D
		System.out.println("The 3D point is located at (" + object2.x + ", " + object2.y + ", " + object2.z + ")");
		System.out.println("\tIt's being moved to (10, 22, 71)");

		object2.move(10, 22, 71);

		System.out.println("The 3D point is now at (" + object2.x + ", " + object2.y + ", " + object2.z + ")");
		System.out.println("\tIt's being moved -20 units on all axes");

		object2.translate(-20, -20, -20);

		System.out.println("The 3D point ends up at (" + object2.x + ", " + object2.y + ", " + object2.z + ")");
	}
}
