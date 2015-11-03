import java.awt.*;

public class SalutonApplet extends javax.swing.JApplet {
	String greeting;

	@Override
	public void init() {
		greeting = "Saluton mondo!";
	}

	@Override
	public void paint(Graphics screen) {
		Graphics2D screen2D = (Graphics2D)screen;
		screen2D.drawString(greeting, 25, 50);
	}
}
