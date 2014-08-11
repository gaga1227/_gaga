// i/o example
#include <iostream>
#include <string>
#include <sstream>
using namespace std;

int main ()
{
  // insertion operator <<
  // extraction operator >>
  int i;
  cout << "Please enter an integer value: ";
  cin >> i;
  cout << "The value you entered is " << i;
  cout << " and its double is " << i*2 << ".\n\n";
  
  // continuous cin
  int a, b;
  cout << "Please enter two integers for sum calculation: \n";
  cin >> a >> b;
  cout << "Sum is: " << a+b << "\n\n";
  
  // cin for a phrase
  string phrase;
  cout << "Please enter a phrase: \n";
  cin >> phrase;
  cout << "The phrase is: " << phrase << "\n\n";
  
  // cin for a line
  string line;
  cout << "Please enter a line: \n";
  getline (cin, line);
  cout << "The line is: " << line << "\n\n";
  
  //stringstream
  string mystr;
  float price = 0;
  int quantity = 0;
  cout << "Enter price: ";
  getline (cin, mystr);
  stringstream(mystr) >> price; //converts mystr to float number e.g. 0.5
  cout << "Enter quantity: ";
  getline (cin, mystr);
  stringstream(mystr) >> quantity; //converts mystr to int number e.g. 3
  cout << "Total price: " << price*quantity << endl;
  
  return 0;
}
