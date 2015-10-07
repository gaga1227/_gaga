public class Virus {
	//class member
	static int virusCount = 0;

	//constructor
	public Virus() {
		virusCount++;
	}

	//getter (class method)
	static int getVirusCount() {
		return virusCount;
	}
}
