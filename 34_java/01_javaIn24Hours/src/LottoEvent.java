import javax.swing.*;
import java.awt.event.*;

public class LottoEvent implements ItemListener, ActionListener, Runnable {

	//refs
	LottoMadness gui;
	Thread playing;

	/**
	 * Constructor
	 * @param in GUI class
	 */
	public LottoEvent(LottoMadness in) {
		gui = in;
	}

	/**
	 * Button event listener
	 * @param event button click event data obj
	 */
	@Override
	public void actionPerformed(ActionEvent event) {
		String command = event.getActionCommand();
		if (command == "Play") {
			startPlaying();
		}
		if (command == "Stop") {
			stopPlaying();
		}
		if (command == "Reset") {
			clearAllFields();
		}
	}

	/**
	 * Start playing
	 */
	void startPlaying() {
		//create and start new thread
		playing = new Thread(this);
		playing.start();

		//set GUI comps
		gui.play.setEnabled(false);
		gui.stop.setEnabled(true);
		gui.reset.setEnabled(false);
		gui.quickpick.setEnabled(false);
		gui.personal.setEnabled(false);
	}

	/**
	 * Stop playing
	 */
	void stopPlaying() {
		//set GUI comps
		gui.stop.setEnabled(false);
		gui.play.setEnabled(true);
		gui.reset.setEnabled(true);
		gui.quickpick.setEnabled(true);
		gui.personal.setEnabled(true);

		//cancel thread
		playing = null;
	}

	/**
	 * reset all UI comps
	 */
	void clearAllFields() {
		for (int i = 0; i < 5; i++) {
			gui.numbers[i].setText(null);
			gui.winners[i].setText(null);
		}
		gui.got3.setText("0");
		gui.got4.setText("0");
		gui.got5.setText("0");
		gui.drawings.setText("0");
		gui.years.setText(null);
	}

	/**
	 * Checkbox event handler
	 * @param event checkbox event data obj
	 */
	@Override
	public void itemStateChanged(ItemEvent event) {
		//get UI obj
		Object item = event.getItem();

		//add quick picks
		if (item == gui.quickpick) {
			for (int i = 0; i < 5; i++) {
				int pick;
				do { pick = (int) Math.floor(Math.random() * 90 + 1); }
				while (numberGone(pick, gui.numbers, i));
				gui.numbers[i].setText("" + pick);
			}
		}
		//clean quick picks
		else {
			for (int i = 0; i < 5; i++) {
				gui.numbers[i].setText(null);
			}
		}
	}

	/**
	 * Add one to given field
	 * @param field target text field
	 */
	void addOneToField(JTextField field) {
		int num = Integer.parseInt("0" + field.getText());
		num++;
		field.setText("" + num);
	}

	/**
	 * Check if a given new number has already be used in other fields
	 *
	 * @param num       new number
	 * @param pastNums  array of text fields with past numbers
	 * @param count     text fields count
	 * @return          if given number is gone: can be found in past numbers
	 */
	boolean numberGone(int num, JTextField[] pastNums, int count) {
		for (int i = 0; i < count; i++) {
			if (Integer.parseInt(pastNums[i].getText()) == num) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Check winning number against all pick fields
	 *
	 * @param win       field with winning value
	 * @param allPicks  picks fields
	 * @return          if any of the picks fields has winning field value
	 */
	boolean matchedOne(JTextField win, JTextField[] allPicks) {
		for (int i = 0; i < 5; i++) {
			String winText = win.getText();
			if ( winText.equals( allPicks[i].getText() ) ) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Runnable thread implementation
	 */
	@Override
	public void run() {
		// create thread
		Thread thisThread = Thread.currentThread();

		// pick our own playing thread, not others
		while (playing == thisThread) {
			//increment drawings count each time thread runs
			addOneToField(gui.drawings);

			//calculate and update number of years it takes for the current results
			int draw = Integer.parseInt(gui.drawings.getText());
			float numYears = (float) draw / 104;
			gui.years.setText("" + numYears);

			//generate numbers and start matching
			int matches = 0;
			for (int i = 0; i < 5; i++) {
				int ball;
				do {
					ball = (int)Math.floor(Math.random() * 90 + 1);
				} while (numberGone(ball, gui.winners, i));
				gui.winners[i].setText("" + ball);
				if (matchedOne(gui.winners[i], gui.numbers)) {
					matches++;
				}
			}

			//check results and set rewards
			switch (matches) {
				case 3:
					addOneToField(gui.got3);
					break;
				case 4:
					addOneToField(gui.got4);
					break;
				case 5:
					addOneToField(gui.got5);
					gui.stop.setEnabled(false);
					gui.play.setEnabled(true);
					playing = null;
			}

			//set thread interval
			try {
				//get and apply interval value from UI
				int pauseRate = Integer.parseInt(gui.pause.getText());
				Thread.sleep(pauseRate);
			}
			catch (InterruptedException e) {
				// do nothing
			}
			catch (NumberFormatException nfe) {
				gui.pause.setText("100");
			}
		}
	}
}
