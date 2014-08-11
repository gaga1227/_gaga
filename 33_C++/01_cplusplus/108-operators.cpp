// Operators
#include <iostream>
#include <string>
using namespace std;

const string resultPrefix = "result: ";

int main ()
{
	// vars
	int a = 1;
	double dbl = 1.5;
	float flt = 3.14;
	int result;

	//Assignment operations
	result = 2 + (a = 5);
	cout << resultPrefix << result << endl; //7
	
	//Increment and decrement
	cout << resultPrefix << result++ << endl; //7, assign(7) then add(7+1)
	cout << resultPrefix << ++result << endl; //9, add(8+1) then assign(9)
	
	//Comma operator ( , )
	result = (a = 3, result + a); 			
	cout << resultPrefix << result << endl; //12, a=3, result=9+3
	result = (a = 3, result + a, ++result); 
	cout << resultPrefix << result << endl; //13, ++12 only
	
	//Explicit type casting
	result = (int)flt + int(dbl);
	cout << resultPrefix << result << endl; //4, 3 + 1
	
	//sizeof
	result = sizeof("Hello World!");
	cout << resultPrefix << result << endl; //13 bytes of "Hello World!"
}
