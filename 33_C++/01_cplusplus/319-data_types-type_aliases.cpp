// Type aliases (typedef / using)
#include <iostream>
using namespace std;

//neither typedef nor using create new distinct data types
//They only create synonyms of existing types

//typedef (more traditonal)
typedef char C;
typedef unsigned int WORD;
typedef char * pChar;
typedef char field [50];

//using (more generic)
using C = char;
using WORD = unsigned int;
using pChar = char *;
using field = char [50];

int main ()
{

	return 0;
}
