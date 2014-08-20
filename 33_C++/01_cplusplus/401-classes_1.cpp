// classes example
#include <iostream>
using namespace std;

//class definition
class Rectangle {
	//private access members
	int width, height;
	
  //access specifier
  public:
  	//constructor
  	Rectangle ();
  	
	//overloading constructor, to replace 'set_values'
    Rectangle (int,int); 
    
	//member fn: prototype only
	void set_values (int,int); 
	
	//member fn: fully defined
    int area() {
		return width*height;
	}
};

//Use scope operator: '::' to access class members
//outside definition of class fn member
void Rectangle::set_values (int x, int y) {
	width = x;
	height = y;
}

//constructor definition
//no return type
Rectangle::Rectangle () {
	width = 0;
	height = 0;
}

//overloading constructor definition
Rectangle::Rectangle (int x, int y) {
	width = x;
	height = y;
}

int main () {
	//get rect dimensions
	int w, h;
	cout << "Input Width: ";
	cin >> w;
	cout << "Input Height: ";
	cin >> h;
	
	//init instance from class
	//with arguments using overloading constructor function
	Rectangle rect(w,h);
	
	//set value in rect obj
	//rect.set_values (w,h);
	
	//print 
	cout << "\nArea: " << rect.area();
	
	//init instance using original constructor
	//no arguments
	Rectangle rect0;
	cout << "\nArea 0: " << rect0.area();
	
	return 0;
}
