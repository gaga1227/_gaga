import java.awt.*;
import javax.swing.*;

public class LottoMadness extends JFrame {

	//create lotto object and passing self(GUI) as param
	LottoEvent lotto = new LottoEvent(this);

	// set up row 1
	JPanel row1 = new JPanel();
	ButtonGroup option = new ButtonGroup();
	JCheckBox quickpick = new JCheckBox("Quick Pick", false);
	JCheckBox personal = new JCheckBox("Personal", true);

	// set up row 2
	JPanel row2 = new JPanel();
	JLabel numbersLabel = new JLabel("Your picks: ", JLabel.RIGHT);
	JTextField[] numbers = new JTextField[5];
	JLabel winnersLabel = new JLabel("Winners: ", JLabel.RIGHT);
	JTextField[] winners = new JTextField[5];

	// set up row 3
	JPanel row3 = new JPanel();
	JButton play = new JButton("Play");
	JButton stop = new JButton("Stop");
	JButton reset = new JButton("Reset");

	// set up row 4
	JPanel row4 = new JPanel();
	JLabel got3Label = new JLabel("3 of 6: ", JLabel.RIGHT);
	JTextField got3 = new JTextField("0");
	JLabel got4Label = new JLabel("4 of 6: ", JLabel.RIGHT);
	JTextField got4 = new JTextField("0");
	JLabel got5Label = new JLabel("5 of 6: ", JLabel.RIGHT);
	JTextField got5 = new JTextField("0");
	JLabel drawingsLabel = new JLabel("Drawings: ", JLabel.RIGHT);
	JTextField drawings = new JTextField("0");
	JLabel yearsLabel = new JLabel("Years: ", JLabel.RIGHT);

	// set up row 5
	JPanel row5 = new JPanel();
	JTextField years = new JTextField("0", 10);
	JLabel pauseLabel = new JLabel("Pause Rate: ", JLabel.RIGHT);
	JTextField pause = new JTextField("100", 10);

	/**
	 * Constructor
	 */
	public LottoMadness() {
		super("Lotto Madness");

		//set window props
		setSize(550, 320);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		//set layout
		GridLayout layout = new GridLayout(5, 1, 10, 10);
		setLayout(layout);

		//Add UI listeners from lotto
		quickpick.addItemListener(lotto);
		personal.addItemListener(lotto);
		stop.addActionListener(lotto);
		play.addActionListener(lotto);
		reset.addActionListener(lotto);

		//add UI group 1
		FlowLayout layout1 = new FlowLayout(FlowLayout.CENTER, 10, 10);
		option.add(quickpick);
		option.add(personal);
		row1.setLayout(layout1);
		row1.add(quickpick);
		row1.add(personal);
		add(row1);

		//add UI group 2
		GridLayout layout2 = new GridLayout(2, 7, 10, 10);
		row2.setLayout(layout2);
		row2.setLayout(layout2);
		row2.add(numbersLabel);
		for (int i = 0; i < 5; i++) {
			numbers[i] = new JTextField();
			row2.add(numbers[i]);
		}
		row2.add(winnersLabel);
		for (int i = 0; i < 5; i++) {
			winners[i] = new JTextField();
			winners[i].setEditable(false);
			row2.add(winners[i]);
		}
		add(row2);

		//add UI group 3
		FlowLayout layout3 = new FlowLayout(FlowLayout.CENTER, 10, 10);
		row3.setLayout(layout3);
		stop.setEnabled(false);
		row3.add(stop);
		row3.add(play);
		row3.add(reset);
		add(row3);

		//add UI group 4
		GridLayout layout4 = new GridLayout(2, 4, 20, 10);
		row4.setLayout(layout4);
		row4.add(got3Label);
		got3.setEditable(false);
		row4.add(got3);
		row4.add(got4Label);
		got4.setEditable(false);
		row4.add(got4);
		row4.add(got5Label);
		got5.setEditable(false);
		row4.add(got5);
		row4.add(drawingsLabel);
		drawings.setEditable(false);
		row4.add(drawings);
		add(row4);

		//add UI group 5
		FlowLayout layout5 = new FlowLayout(FlowLayout.CENTER,
		10, 10);
		row5.add(yearsLabel);
		years.setEditable(false);
		row5.add(years);
		row5.setLayout(layout5);
		row5.add(pauseLabel);
		row5.add(pause);
		add(row5);

		setVisible(true);
	}

	/**
	 * Main
	 * @param arguments string args
	 */
	public static void main(String[] arguments) {
		LottoMadness frame = new LottoMadness();
	}
}