// Functions - Arguments by value
#include <iostream>
using namespace std;

int addition (int a, int b) //passing as copied value
{
  int r;
  r=a+b;
  return r;
}

int subtraction (int a, int b)
{
  int r;
  r=a-b;
  return r;
}

void printmessage (string msg, int r)
{
  cout << msg << ": " << r << endl;
}

int main ()
{
	int x=1, y=2, r;
	
	r = addition(x, y);
	printmessage("Result is", r);
	
	r = subtraction(x, y);
	printmessage("Result is", r);
	
	return 0; //ended successfully, optional only in main()
}
