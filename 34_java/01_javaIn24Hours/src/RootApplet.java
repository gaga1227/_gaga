import java.awt.*;

public class RootApplet extends javax.swing.JApplet {
	int number;

	public void init() {
		number = 225;
	}

	public void paint(Graphics screen) {
		Graphics2D screen2D = (Graphics2D)screen;
		screen2D.drawString(
			"The square root of " +
			number +
			" is " +
			Math.sqrt(number), 5, 50
		);
	}

}
