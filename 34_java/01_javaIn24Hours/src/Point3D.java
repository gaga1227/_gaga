import java.awt.*;

public class Point3D extends Point {
	//new var
	public int z;

	//constructor
	public Point3D(int x, int y, int z) {
		//call super
		super(x, y);
		//pass param to local member
		this.z = z;
	}

	//move
	public void move(int x, int y, int z) {
		//call super move
		super.move(x, y);
		//move local z
		this.z = z;
	}

	//translate
	public void translate(int x, int y, int z) {
		//call super move
		super.translate(x, y);
		//move local z
		this.z += z;
	}
}
