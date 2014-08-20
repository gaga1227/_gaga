// Enumerated types (enum)
#include <iostream>
using namespace std;

//define enum type
enum colors_t {black, blue, green, cyan, red, purple, yellow, white};

//init enum objects with value form the defination list
colors_t c1 = black;
colors_t c2 = blue;
colors_t c3 = yellow;

//set enum value's int val
enum months_t { 
	january, //0
	february=3, //3
	march, //4
	april, //5
	may, //6
	june, //...
	july, 
	august,
	september, 
	october, 
	november, 
	december} y2k;

//init enum objects with value form the defination list
months_t m1 = january;
months_t m2 = june;
months_t m3 = december;

int main ()
{
	cout << "c1: " << c1 << endl; //0
	cout << "c2: " << c2 << endl; //1
	cout << "c3: " << c3 << endl; //6

	cout << "m1: " << m1 << endl; //0
	cout << "m2: " << m2 << endl; //7
	cout << "m3: " << m3 << endl; //13

	return 0;
}
