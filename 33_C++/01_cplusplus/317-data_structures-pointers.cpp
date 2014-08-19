// pointers to structures
#include <iostream>
#include <string>
#include <sstream>
using namespace std;

struct movies_t {
	string title;
	int year;
};

int main ()
{
	string mystr;
	
	//define object and pointer,
	//and assign object to pointer
	movies_t amovie;
	movies_t * pmovie;
	pmovie = &amovie;
	
	//arrow operator is a dereference operator
	//for objects with members, it will get member value
	//directly from their individual addresses
	cout << "Enter title: ";
	getline (cin, pmovie->title);
	cout << "Enter year: ";
	getline (cin, mystr);
	(stringstream) mystr >> pmovie->year;
	
	cout << "\nYou have entered:\n";
	cout << (*pmovie).title;
	cout << " (" << (*pmovie).year << ")\n";
	
	return 0;
}
