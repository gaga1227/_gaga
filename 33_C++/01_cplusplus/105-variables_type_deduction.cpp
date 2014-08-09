// variables type deduction

#include <iostream>
using namespace std;

int main ()
{
	int a = 4;
	auto b = 6;			// the same as: int b = 6;
	decltype(b) result;	// the same as: int result;

  result = a + b;
  cout << result;

  return 0;
}
