// Friend classes
#include <iostream>
#include <string>
using namespace std;

//friend class is a class whose members have
//access to the private or protected members of another class
//The friend of a friend is not considered a friend 

//empty square class due to it is used in Rectangle definition
class Square;

//Rectangle
class Rectangle {
	int w, h;
  public:
  	int area() {
		return w * h;
  	}
  	void convert(Square a);
};

//Square
//(cannot move before Rectangle due to it uses Rectangle in definition)
class Square {
  friend class Rectangle;
  private:
  	int side;
  public:
  	Square (int a) : side(a) {}
};

//has to be after complete Square definition
void Rectangle::convert(Square a) {
	w = h = a.side;
}

int main () {
	Rectangle rect;
	Square sqr(6);
	rect.convert(sqr);
	cout << "rect.area(): " << rect.area() << endl;
		
	return 0;
}
