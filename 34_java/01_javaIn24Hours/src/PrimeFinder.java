import com.oracle.tools.packager.Log;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class PrimeFinder extends JFrame implements Runnable, ActionListener {

	// vars
	Thread go;
	JLabel labelHowMany;
	JTextField textHowMany;
	JButton btnDisplay;
	JTextArea textareaPrimes;

	/**
	 * Constructor
	 */
	PrimeFinder() {
		// default JFrame stuff
		super("Find Prime Numbers");
		setLookAndFeel();
		setSize(400, 300);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		// create UI layout
		BorderLayout bord = new BorderLayout();
		setLayout(bord);

		// init views
		labelHowMany = new JLabel("Quantity: ");
		textHowMany = new JTextField("400", 10);
		btnDisplay = new JButton("Display Primes");
		textareaPrimes = new JTextArea(8, 40);
		textareaPrimes.setLineWrap(true);

		// button action handler
		btnDisplay.addActionListener(this);

		// add views to panel
		JPanel topPanel = new JPanel();
		JScrollPane textPane = new JScrollPane(textareaPrimes);

		topPanel.add(labelHowMany);
		topPanel.add(textHowMany);
		topPanel.add(btnDisplay);

		add(topPanel, BorderLayout.NORTH);
		add(textPane, BorderLayout.CENTER);

		// set UI visible
		setVisible(true);
	}

	/**
	 * Invoked when an action occurs.
	 *
	 * @param e
	 */
	@Override
	public void actionPerformed(ActionEvent e) {
		// block further action
		btnDisplay.setEnabled(false);

		// start thread if not already
		if (go == null) {
			go = new Thread(this);
			go.start();
		}
	}

	/**
	 * When an object implementing interface <code>Runnable</code> is used
	 * to create a thread, starting the thread causes the object's
	 * <code>run</code> method to be called in that separately executing
	 * thread.
	 * <p>
	 * The general contract of the method <code>run</code> is that it may
	 * take any action whatsoever.
	 *
	 * @see Thread#run()
	 */
	@Override
	public void run() {
		// get total quantity we want from view
		int quantity = Integer.parseInt(textHowMany.getText());
		// total primes already got
		int numPrimes = 0;
		// candidate: the number that might be prime
		int candidate = 2;

		try {
			// update textarea
			textareaPrimes.append("First " + quantity + " primes:");

			// keep checking and adding primes to output until reaching quantity
			while (numPrimes < quantity) {
				if (isPrime(candidate)) {
					textareaPrimes.append(candidate + " ");
					numPrimes++;
				}
				candidate++;

				// slowly doing it
				Thread.sleep(1000);
			}
		} catch (InterruptedException e) {
		}
	}

	/**
	 * isPrime
	 * @param checkNumber the number to be checked
	 * @return is checkNumber is a prime number
	 */
	public static boolean isPrime(int checkNumber) {
		double root = Math.sqrt(checkNumber);
		for (int i = 2; i <= root; i++) {
			if (checkNumber % i == 0) {
				return false;
			}
		}
		return true;
	}

	/**
	 * setLookAndFeel
	 */
	private void setLookAndFeel() {
		try {
			UIManager.setLookAndFeel("com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel");
		}
		catch (Exception e) {
			//ignore
		}
	}

	// init PrimeFinder instance
	public static void main(String[] arguments) {
		PrimeFinder fp = new PrimeFinder();
	}
}