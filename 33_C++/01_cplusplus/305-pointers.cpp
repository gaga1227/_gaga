//Pointers
#include <iostream>
using namespace std;

int main()
{
	
	//define a var
	int myInt = 10;
	
	//define a pointer with same type
	int * myIntPtr;
	
	//assigns address of 'myInt' to 'myIntPtr' with
	//reference operator '&', "address of"
	myIntPtr = &myInt;
	
	cout << "myInt (address): " << myIntPtr << endl;
	
	//access var value from a pointer with
	//dereference operator '*', "value pointed to by"
	int myIntVal = *myIntPtr;
	
	cout << "myInt (value): " << myIntVal << endl;
	
	//original var's value is same
	//as the value of the dereferenced pointer
	cout << "myIntVal (value) == myInt (value): " << ((myIntVal == myInt) ? "true" : "false") << endl;
	
	//updating var using dereferenced pointer
	//same as 'myInt = 20;'
	*myIntPtr = 20;
	
	cout << "myInt (value): " << myInt << endl;
	
	return 0;
}
