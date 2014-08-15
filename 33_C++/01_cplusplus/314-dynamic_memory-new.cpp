//Operators new and new[]
#include <iostream>
using namespace std;

int main()
{	
	// use new to dynamicly define memory blocks allocation
	// and assign starting address of the allocation
	// to a pointer of the same type
	
	// if allocation fails, an exception is thrown  
	int * bar;
	bar = new int [5]; // '10000000000' throws a 'bad_alloc'
	cout << "bar mem location: " << bar << endl;
	
	// using 'nothrow' to handle 'nullptr'
	int * foo;
	foo = new (nothrow) int [10000000000];
	if (foo == nullptr) {
		// error assigning memory. Take measures.
		cout << "Error, foo mem assign failed! " << endl;
	} else {
		cout << "foo mem location: " << foo << endl;
	}
	
	return 0;
}
