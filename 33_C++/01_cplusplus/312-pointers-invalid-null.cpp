//Invalid pointers and null pointers
#include <iostream>
using namespace std;

int main()
{
	//invalid pointer
	int * p; // uninitialized pointer (local variable)
	
	int myarray[10];
	int * q = myarray+20;  // element out of bounds
	
	//invalid pointers are not equal
	cout << "invalid ptrs: " << (p == q) << endl;
	
	//null pointer
	int * x = 0;
	int * y = nullptr; //c++11
	int * z = NULL; //'NULL' is a alias for const value of '0' or 'nullptr'
	
	//invalid pointers are equal
	cout << "null ptrs: " << (x == y) << endl;
	cout << "null ptrs: " << (y == z) << endl;
	
	return 0;
}
