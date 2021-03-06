// Statements and flow control
#include <iostream>
using namespace std;

int main ()
{
	//Selection statements: if and else
	int x;
	cout << "Enter a integer:";
	cin >> x;
	if (x > 0)
	  cout << "x is positive" << endl;
	else if (x < 0)
	  cout << "x is negative" << endl;
	else
	  cout << "x is 0" << endl;
	
	//Iteration statements (loops)
	int n = 10;
	while (n--) {
		cout << n + 1 << ", ";
	}
	cout << "DONE!\n" << endl;
	
	//do while
	string str;
	do {
		cout << "Type 'exit' here: ";
		getline (cin,str);
		cout << "You entered: " << str << '\n';
	} while (str != "exit");
	
	//for loop
	for (int n=10; n>0; n--) {
		cout << n << ", ";
	}
	cout << "DONE!\n" << endl;
	
	//multiple counter variables, initializing and increasing
	for (int n=0, i=100; n!=i; n++, i--) {
		cout << "n: " << n << ", i: " << i << '\n';
	}
	cout << "DONE!\n" << endl;
	
	//Range-based for loop
	string str2 {"Hello!"};
	for (char c : str2) {
		cout << "[" << c << "]";
	}
	cout << "DONE!\n" << endl;
	
	//Jump statements
	for (int n=10; n>0; n--) {
		if (n==5)
		{
			cout << "countdown skipped!" << ", ";
			continue;
		}
		if (n==3)
		{
			cout << "countdown aborted!" << endl;
			break;
		}
		cout << n << ", ";
	}
	
	//loop using goto
	int y=10;
mylabel:
	cout << y << ", ";
	y--;
	if (y>0) goto mylabel;
	cout << "DONE!\n";

	//switch
	switch (x) {
		case 1:
		case 2:
		case 3:
			cout << "x is 1, 2 or 3";
			break;
		default:
			cout << "x is not 1, 2 nor 3";
	}
	
	return 0;
}
