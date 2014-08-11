// Constants
#include <iostream>
#include <string>
using namespace std;

/* Examples: Literals - used to express particular values

//Integer Numerals
const int num_int1 = 75;
const int num_int2 = 75u;	// int
const int num_int3 = 75l;	// unsigned int
const int num_int4 = 75ul;	// long
const int num_int5 = 75lu;	// unsigned long 

//floating point numerals
const float num_flt1 = 3.14159    // 3.14159;
const float num_flt2 = 6.02e23    // 6.02 x 10^23
const float num_flt3 = 1.6e-19    // 1.6 x 10^-19
const float num_flt4 = 3.0        // 3.0
const float num_flt5 = 3.14159l   // long double
const float num_flt6 = 6.02e23f   // float  

//Character and string literals
const char text1 = 'A'; 			//single character literal
const string text2 = 'Hello world'; //string

//special characters
const char char_sp1 = '\n'; 	//newline
const char char_sp2 = '\r';		//carriage return
const char char_sp3 = '\t';		//tab
const char char_sp4 = '\v';		//vertical tab
const char char_sp5 = '\b';		//backspace
const char char_sp6 = '\f';		//form feed (page feed)
const char char_sp7 = '\a';		//alert (beep)
const char char_sp8 = '\'';		//single quote (')
const char char_sp9 = '\"';		//double quote (")
const char char_sp10 = '\?';	//question mark (?)
const char char_sp11 = '\\';	//backslash (\)

//string concatenation

//"this forms a single string of characters"
const string string_conact1 = "this forms" "a single"     " string "
							  "of characters";
//line-continuation character '\'
const string string_conact2 = "string expressed in \
two lines"; 
			
//character types
const char char_1 = u'A'; 	//char16_t
const char char_2 = U'A';	//char32_t
const char char_3 = L'A';	//wchar_t

//string types
const string string_1 = u8'string';	//encoded using UTF-8
const string string_2 = R'string'; 	//raw string

//others
const bool foo = true;
const bool bar = false;
const int* p = nullptr;

*/

// using constants for values that doesn't change
const double pi = 3.14159; 	//default contstant definition
#define newline '\n'; 		//contstant in Preprocessor definitions

int main ()
{
  double r=5.0, circle;
  circle = 2 * pi * r;
  cout << circle;
  cout << newline;
}
