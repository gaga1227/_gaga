//Pointers and const
#include <iostream>
using namespace std;

//pointer for string literal
//"Hello" equals an array of chars
//pointer points to the first one
char * ptr = "Hello";

int main()
{
	//pointer name can be used like an array
	cout << (*(ptr+4) == ptr[4]) << endl; // 1
	
	return 0;
}
