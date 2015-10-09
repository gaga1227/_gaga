import javax.swing.*;

public class SalutonFrame extends JFrame {

	//constructor
	public SalutonFrame() {
		//set window title
		super("Saluton mondo!");

		//set window attributes
		setLookAndFeel(); //own method
		setSize(350, 100); //inherited
		setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE); //inherited

		//show
		setVisible(true); //inherited
	}

	//methods
	private void setLookAndFeel() {
		try {
			UIManager.setLookAndFeel("com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel");
		}
		catch (Exception exc) {
			// ignore error
		}
	}

	//main (to start the application with above class)
	public static void main(String[] args) {
		//create new object
		SalutonFrame sal = new SalutonFrame();
	}
}
