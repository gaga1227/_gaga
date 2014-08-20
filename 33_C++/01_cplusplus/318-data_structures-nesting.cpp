// Nesting structures
#include <iostream>
using namespace std;

//structure 1
struct movies_t {
	string title;
	int year;
};

//structure 2 with 2 instances/objects
struct friends_t {
  string name;
  string email;
  //structure objects can be nested as members
  movies_t favorite_movie;
} charlie, maria;

//create structure 2 typed pointer for obj charlie
friends_t * pfriends = &charlie;

int main ()
{
	//print
	cout << "charlie.name: " << (charlie.name = "Charles James Long") << endl;
	cout << "maria.favorite_movie.title: " << (maria.favorite_movie.title = "Fight Club") << endl;
	cout << "charlie.favorite_movie.year: " << (maria.favorite_movie.year = 1999) << endl;
	cout << "pfriends->favorite_movie.year: " << (pfriends->favorite_movie.year = 2001) << endl;
	
	return 0;
}
