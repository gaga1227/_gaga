//Pointers and const
#include <iostream>
using namespace std;

void increment_all (int* start, int* stop)
{
	int * current = start;
	while (current <= stop) {
		++(*current);  // increment value pointed
		++current;     // increment pointer
	}
}

void print_all (const int* start, const int* stop)
{
	const int * current = start;
	while (current <= stop) {
	cout << *current << '\n';
		//'const' only applies to the appointed value: '*current',
		//pointer itself: 'current' can be updated, 
		++current;     // increment pointer
	}
}

int main()
{
	//define normal values
	int a = 1, b = 2;
	
	//define read only pointers
	//points to vars in a const-qualified manner
	//'ptrA' type: const int*; '&a' type: int*
	//'int*' can be converted to 'const int*' pointer, not vice versa
	const int* ptrA = &a, * ptrB = &b;
	
	//print pointer reading
	//cout << *ptrA + *ptrB << endl; //1 + 2 = 3

	//trying to modify
	//*ptrA = 10; //Error: assignment of read-only location
	
	//demo
	int numbers[] = {10,20,30};
	print_all (numbers,numbers+2);
	
	increment_all (numbers,numbers+2);
	print_all (numbers,numbers+2);
	
	return 0;
}
