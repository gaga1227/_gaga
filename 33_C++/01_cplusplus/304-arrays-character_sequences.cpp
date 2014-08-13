//Character sequences
#include <iostream>
#include <string>
using namespace std;

const char NULLCHAR = '\0';

int main()
{
	//initialise a null-terminated character sequence
	char myChars[] = {'H','e','l','l','o',NULLCHAR};
	
	cout << "myChars(c-string): " << myChars << endl;

	//once initialised, array can not be assigned value as a whole,
	//only array slots can be updated individually
	myChars[0] = 'W';
	myChars[1] = 'o';
	myChars[2] = 'r';
	myChars[3] = 'l';
	myChars[4] = 'd';
	
	cout << "myChars(c-string): " << myChars << endl;
	
	//string literals always have a null character ('\0')
	//automatically appended at the end.
	
	//initialise a null-terminated character sequence
	//with a string literal
	//size of array are determined on compilation, not runtime
	
	//c-string
	char myCString[] = "Hello String!";
	
	//c-string converted to string
	string myString = myCString; 
	
	cout << "myString: " << myString << endl;
	
	//both c_str and data members of string are equivalent
	cout << "myString(.c_str()): " << myString.c_str() << endl;
	cout << "myString(.data()): " << myString.data() << endl;
	
	return 0;
}
