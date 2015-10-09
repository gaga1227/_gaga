import javax.swing.*;
import java.awt.*;

public class ClockFrame extends JFrame {

	//constructor
	public ClockFrame() {
		//set window title
		super("Clock Frame");

		//set window attributes
		setLookAndFeel(); //own method
		setSize(225, 125); //inherited
		setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE); //inherited

		//add and set layout manager
		//to manage the content elements to be added
		FlowLayout flo = new FlowLayout();
		setLayout(flo); //inherited

		//add comps
		ClockPanel time = new ClockPanel();
		add(time);

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
		ClockFrame clock = new ClockFrame();
	}
}
