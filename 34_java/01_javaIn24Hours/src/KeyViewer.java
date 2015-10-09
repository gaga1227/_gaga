import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class KeyViewer extends JFrame implements KeyListener {

	//UI comps
	TextField keyText = new TextField(80);
	JLabel keyLabel = new JLabel("Press any key in the text field.");

	//constructor
	public KeyViewer() {
		//set window title
		super("Key Viewer");

		//set window attributes
		setLookAndFeel(); //own method
		setSize(350, 100); //inherited
		setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE); //inherited

		//add and set layout manager
		//to manage the content elements to be added
		BorderLayout bord = new BorderLayout();
		setLayout(bord);

		//add comps
		keyText.addKeyListener(this);
		add(keyLabel, BorderLayout.NORTH);
		add(keyText, BorderLayout.CENTER);

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
		KeyViewer frame = new KeyViewer();
	}

	/**
	 * Invoked when a key has been typed.
	 * See the class description for {@link KeyEvent} for a definition of
	 * a key typed event.
	 *
	 * @param e
	 */
	@Override
	public void keyTyped(KeyEvent e) {
		char key = e.getKeyChar();
		keyLabel.setText("You pressed " + key);
	}

	/**
	 * Invoked when a key has been pressed.
	 * See the class description for {@link KeyEvent} for a definition of
	 * a key pressed event.
	 *
	 * @param e
	 */
	@Override
	public void keyPressed(KeyEvent e) {

	}

	/**
	 * Invoked when a key has been released.
	 * See the class description for {@link KeyEvent} for a definition of
	 * a key released event.
	 *
	 * @param e
	 */
	@Override
	public void keyReleased(KeyEvent e) {

	}
}
