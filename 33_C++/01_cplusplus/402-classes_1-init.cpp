// class initialization
#include <iostream>
using namespace std;

//class def
class Circle {
  //private var
	double radius;
	const float PI = 3.14159265;
		
  //public members
  public:
  	//constructor, no return type
  	//single parameter
	Circle(double r) { 
		radius = r;
	}
	//overload constructor
	Circle() { 
		radius = 1.0;
	}
	
	//method
	double circum() {
		return 2*radius*PI;
	}
	double area() {
		return radius*radius*PI;
	}
};

int main () {
	//ways of init a instance of class
	
	//functional form init
	Circle cInitFn;
	Circle cInitFn2(3.0);
	cout << "cInitFn area: " << cInitFn.area() << endl;
	cout << "cInitFn2 area: " << cInitFn2.area() << endl;
	
	//constructor with single parameter
	//can use variable init syntax
	Circle cInitVar = 6.0;
	cout << "cInitVar area: " << cInitVar.area() << endl;
	
	//uniform init
	Circle cInitUni = {9.0};
	Circle cInitUni2{};
	cout << "cInitUni area: " << cInitUni.area() << endl;
	cout << "cInitUni2 area: " << cInitUni2.area() << endl;
		
	return 0;
}
