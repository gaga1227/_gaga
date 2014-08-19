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
	
	//free up mem allocation from bar to bar+4
	//can only delete a pointer assigned with 'new', or a nullptr
	cout << "delete mem location(bar): " << bar << endl;
	delete[] bar; bar = 0;
	cout << "access mem location(bar): " << bar << endl << endl;
	
	//define integers
	int i,n;
	
	//define pointer
	int * p;
	
	//print prompt
	cout << "How many numbers would you like to type? ";
	
	//get input and assign to i
	cin >> i;
	
	//create new mem location blocks with new and assign to pointer p
	p = new (nothrow) int[i];
	
	//check if pointer is null
	if (p == nullptr) {
		cout << "Error: memory could not be allocated";
	}
	//if pointer is not null
	else {
		//for each new mem block
		for (n=0; n<i; n++)	{
			//get user input and assign to array elem as val
			cout << "Enter number: ";
			cin >> p[n];
		}
		
		//print array values
		cout << "You have entered: ";
		for (n=0; n<i; n++) {
			cout << *(p+n) << ", ";
		}
		
		//deallocate mem blocks assigned to p
		delete[] p;
		
		//nullify the pointer to avoid errors
		p = nullptr; 
		
		//print after delete
		cout << endl << "Deleted pointer P: " << p;
	}
	
	return 0;
}
