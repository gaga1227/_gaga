// Inheritance between classes
#include <iostream>
#include <string>
using namespace std;

//C++ can be extended, creating new classes which
//retain characteristics of the base class
//The derived class inherits the members of the base class
//on top of which it can add its own members

//base class
class Polygon {
  //derived class can access 'protected' members,
  //not 'private' ones
  protected:
	int width, height;
  public:
	void set_values (int a, int b){
		width=a; height=b;
	}
};

//derived clases
//access specifiers (default: 'private') determines
//the accessible level of inherited members 
//use 'protected' or default here would make 'set_values()'
//inaccessible to non-member fns
class Rectangle: public Polygon {
  public:
	int area () {
		return width * height;
	}
};
class Triangle: public Polygon {
  public:
	int area () {
		return width * height / 2;
	}
};

int main () {
	//demo
	Rectangle rect;
	Triangle trgl;
	rect.set_values(8,8);
	trgl.set_values(8,8);
	cout << "rect.area(): " << rect.area() << endl;
	cout << "trgl.area(): " << trgl.area() << endl;	
	
	return 0;
}
