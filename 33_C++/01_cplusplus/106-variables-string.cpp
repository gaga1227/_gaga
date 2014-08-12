// my first string
// The string class is a compound type
#include <iostream>
#include <string>
using namespace std;

int main ()
{
  string mystringA = 			 "This is string A, initialisation: 'classic C'";
  auto mystringB				("This is string B, initialisation: 'C++', type deduction: 'auto'");
  decltype(mystringB) mystringC {"This is string C, initialisation: 'C++11', type deduction: 'decltype'"};

  cout << mystringA << endl;
  cout << mystringB << endl;
  cout << mystringC << endl;
  
  return 0;
}
