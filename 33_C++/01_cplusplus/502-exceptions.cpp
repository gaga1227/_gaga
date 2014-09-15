// Exceptions
#include <iostream>
#include <exception>
using namespace std;

//Exceptions provide a way to react to exceptional circumstances (like runtime errors)
//in programs by transferring control to special functions called handlers.

int main () {
	//exception inspection
	try	{
		//throws exception
		throw 20;
	}
	//exception handler
	catch (int exp) {
		cout << "An exception occurred. Exception No. " << exp << '\n';
	}

	//Standard exceptions
	try	{
		int* myarray = new int[100000000000000000000000000];
	}
	catch (exception& e) {
		cout << "Standard exception: " << e.what() << endl;
	}

	return 0;
}
