//Pointers and const
#include <iostream>
using namespace std;

//define var
int a=1, b=1, c=1, d=1;

//define pointers
      int *       p1 = &a;  // non-const pointer to non-const int
const int *	      p2 = &b;  // non-const pointer to const int
      int * const p3 = &c;  // const pointer to non-const int
int const * const p4 = &d;  // const pointer to const int 

int main()
{
	//demo
	cout << "a: " << *p1 << endl;
	cout << "a++: " << ++*p1 << endl;
	
	cout << "b: " << *p2 << endl;
	cout << "b++: " << ++*p2 << endl; 	//error: increment of readonly location 
	
	cout << "c: " << *p3 << endl;
	p3 = p1; 							//error: assignment of readonly var
	
	cout << "d: " << *p4 << endl;
	cout << "d++: " << ++*p4 << endl; 	//error: increment of readonly location 
	p4 = p1; 							//error: assignment of readonly var
	
	return 0;
}
