// Member initialization in constructors
#include <iostream>
using namespace std;

//circle class
class Circle {
    double radius;
  public:
  	//When a constructor is used to initialize other members, 
	//these other members can be initialized directly, 
	//without resorting to statements in its body.
    Circle(double r) : radius(r) { 
		//same as members init in fn body, e.g.
		//radius = r;	
	}
    double area() {return radius*radius*3.14159265;}
};

//cylinder class
class Cylinder {
    Circle cbase;
    double height;
  public:
    Cylinder(double r, double h) : cbase(r), height(h) { }
    //member init can also use uniform init form
	Cylinder() : cbase{10}, height{20} { }
    double volume() {return cbase.area() * height;}
};

int main () {
	//init cylinder instance
	Cylinder foo(10,20);
	cout << "Cylinder foo volumn: " << foo.volume() << endl;
	Cylinder bar;
	cout << "Cylinder bar volumn: " << bar.volume() << endl;
		
	return 0;
}
