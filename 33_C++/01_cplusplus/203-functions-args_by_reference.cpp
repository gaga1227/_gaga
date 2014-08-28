// Functions - Arguments by reference
#include <iostream>
using namespace std;

//passing as reference using '&'
void duplicate (int &a, int &b)
{
  a *= 2;
  b *= 2;
}

//passing as reference using '&' to improve efficiency by avoiding value duplication 
//but restricting to constants to prevent being modified
string concatenate (const string &a, const string &b)
{
  return a+b;
}

int main ()
{
	int x=1, y=2;
	duplicate(x, y);
	cout << "x=" << x << ", y=" << y << endl;
	
	string s1, s2;
	cout << "Enter string 1: " << endl;
	getline(cin, s1);
	cout << "Enter string 2: " << endl;
	getline(cin, s2);
	cout << "String 1+2 is: " << concatenate(s1, s2) << endl;
	
	return 0;
}
