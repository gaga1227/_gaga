//Operators delete and delete []
#include <iostream>
using namespace std;

int main()
{	
	// use delete to free up dynamicly define memory blocks allocation
	// from a pointer assigned by new 
	
	// allocate memory blocks and assign to pointer
	int * bar;
	bar = new int [5];
	cout << "new mem location(bar): " << bar << endl;

	delete[] bar; //free up mem allocation from bar to bar+4
	cout << "delete mem location(bar): " << bar << endl;
	cout << "access mem location(bar): " << bar << endl;
	
	return 0;
}
