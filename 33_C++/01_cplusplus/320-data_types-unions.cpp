// Unions
#include <iostream>
using namespace std;

//Unions allow one portion of memory to be accessed as different data types
//all its member elements occupy the same physical space in memory
//The size of this type is the one of the largest member element
struct {
	char title[50];
	char author[50];
	union {
		//memebers cannot be assigned values independently on init
		//only one of them can at any given time
		float dollars = 0.99;
		int yen;
	} price;
} book;

//Anonymous unions, same without instance name, can be referred directly
struct {
	char title[50];
	char author[50];
	union {
		float dollars;
		int yen;
	};
} book2;

int main ()
{
	book.price.dollars = 1.001;
	cout << "book.price.dollars: " << book.price.dollars << endl;
	cout << "book.price.yen: " << book.price.yen << endl << endl;
	
	//update any member value in union will update values of other members
	book.price.yen = 0;
	cout << "book.price.dollars: " << book.price.dollars << endl;
	cout << "book.price.yen: " << book.price.yen << endl << endl;
	
	//access anonymous unions
	book2.dollars = 2.999;
	cout << "book2.dollars: " << book2.dollars << endl;
	cout << "book2.yen: " << book2.yen << endl << endl;

	return 0;
}
