public class Variable {
	public static void main(String[] args) {
		//main vars types
		int tops = 1;                   //32-bit (-Math.pow(2,31) ~ Math.pow(2,31)-1)
		float gradePointAverage = 0.0f; //single-precision 32-bit IEEE 754
		char key = 'c';
		String productName = "Larvets";

		//others
		byte escapeKey = 27;            //8-bit (-128 ~ 127)
		short roomNumber = 222;         //16-bit (–32,768 ~ 32,767)
		long salary = 264_400_000l;     //64-bit (-Math.pow(2,63) ~ Math.pow(2,63)-1)
		double pay = 0.0d;              //double-precision 64-bit IEEE 754
		boolean gameOver = false;
		final int CONSTANT_VALUE = 100; //can only be assigned once
	}
}
