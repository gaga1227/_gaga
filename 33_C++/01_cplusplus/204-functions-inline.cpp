// Functions - Inline
#include <iostream>
using namespace std;

//specify the function should be expanded inline
//upon being called, which might improve efficiency 
//but depends on compiler
inline string concatenate (const string& a, const string& b)
{
  return a+b;
}

int main ()
{
	cout << concatenate("You are a ", "test!");
	
	return 0;
}
