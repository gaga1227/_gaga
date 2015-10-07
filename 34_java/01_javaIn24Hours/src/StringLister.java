import java.util.Collections;
import java.util.Vector;

public class StringLister {

	//existing names
	String[] names = {
		"Spanky",
		"Alfalfa",
		"Buckwheat",
		"Daria",
		"Stymie",
		"Marianne",
		"Scotty",
		"Tommy",
		"Chubby"
	};

	//constructor
	public StringLister(String[] moreNames) {
		//create vector list
		Vector<String> list = new Vector<String>();

		//add names
		for (int i = 0; i < names.length; i++) {
			list.add(names[i]);
		}

		//add more names
		for (int i = 0; i < moreNames.length; i++) {
			list.add(moreNames[i]);
		}

		//sort
		Collections.sort(list);

		//display sorted list
		for (String name : list) {
			System.out.println(name);
		}
	}

	//main (init)
	public static void main(String[] args) {
		StringLister lister = new StringLister(args);
	}
}
