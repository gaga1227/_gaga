import javax.swing.*;
import java.awt.*;

public class Playback extends JFrame {

	//constructor
	public Playback() {
		//set window title
		super("Playback");

		//set window attributes
		setLookAndFeel(); //own method
		setSize(225, 80); //inherited
		setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE); //inherited

		//add and set layout manager
		//to manage the content elements to be added
		FlowLayout flo = new FlowLayout();
		setLayout(flo); //inherited

		//add buttons
		JButton play = new JButton("Play");
		JButton stop = new JButton("Stop");
		JButton pause = new JButton("Pause");
		add(play);
		add(stop);
		add(pause);

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
		Playback pb = new Playback();
	}
}
