//Data structures
#include <iostream>
#include <string>
#include <sstream>
using namespace std;

//define data structure and members
//like a class
struct movies_t {
	string title;
	int year;
} mine, library[3];

//define data array for library
string title[3] {"The Matrix", "Angels", "Superman"};
int year[3] {1999, 2001, 2013};

//create objects/instances of defined data-structure
movies_t yours; 

//define a function, body filled later
void printmovie (movies_t movie);

int main()
{	
	//define var
	string mystr;
	
	//update member property values on mine object
	mine.title = "2001 A Space Odyssey";
	mine.year = 1968;
	
	//prompt and get title input, assign to yours.title
	cout << "Enter title: ";
	getline (cin, yours.title);
	
	//prompt and get year input, assign to mystr(string)
	cout << "Enter year: ";
	getline (cin, mystr);
	
	//convert mystr to int and assign to yours.year
	stringstream(mystr) >> yours.year;
	
	//prompt and print object member vals
	cout << "My favorite movie is:\n ";
	printmovie (mine);
	cout << "And yours is:\n ";
	printmovie (yours);
	
	//update library
	cout << "My movie library:\n";
	for (int n=0; n<3; n++)	{
		library[n].title = title[n];
		library[n].year = year[n];
		cout << " ";
		printmovie (library[n]);
	}
	
	return 0;
}

//printmovie body
void printmovie (movies_t movie)
{
	cout << movie.title;
	cout << " (" << movie.year << ")\n";
}
