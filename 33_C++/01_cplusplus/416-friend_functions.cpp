// Friend functions
#include <iostream>
#include <string>
using namespace std;

//Friends are functions or classes declared with the friend keyword
//can access private and protected members of a class
//The friend of a friend is not considered a friend 

//A non-member function can access the private and protected members
//of a class if it is declared a friend of that class
class Rectangle {
	int width, height;
  public:
	Rectangle() {}
	Rectangle (int x, int y) : width(x), height(y) {}
	int area() {return width * height;}
	//declaration of external function within the class,
	//and preceding it with the keyword friend
	//but it is not a member function of the class
	friend Rectangle duplicate (const Rectangle&);
};

//implementation of the (non-member) friend fn
Rectangle duplicate (const Rectangle& param) {
	Rectangle result;
	result.width = param.width * 2;
	result.height = param.height * 2;
	return result;
};

int main () {
	Rectangle foo;
	Rectangle bar(2,3);
	foo = duplicate(bar); //move assignment
	cout << "duplicate's area: " << foo.area() << '\n';
		
	return 0;
}
