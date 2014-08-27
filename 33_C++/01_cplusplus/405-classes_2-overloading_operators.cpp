// Overloading operators
#include <iostream>
using namespace std;

//C++ allows most operators to be overloaded
//so that their behavior can be defined for
//just about any type, including classes. 

//define class
class CVector {
  public:
    int x, y;
    CVector() {};
    CVector(int a, int b) : x(a), y(b) {}
    //define overloading operator function for addition +
    //using member overload
	CVector operator+ (const CVector &param);
};

//implement overloading operator function
CVector/*type*/ CVector::operator+/*access member*/ (const CVector &param) {
  CVector temp;
  temp.x = x + param.x;
  temp.y = y + param.y;
  return temp;
}

//define overloading operator function for addition -
//using non-member overload
CVector operator- (const CVector param1, const CVector param2) {
  CVector temp;
  temp.x = param1.x - param2.x;
  temp.y = param1.y - param2.y;
  return temp;
}

int main () {
	CVector foo (3,1);
	CVector bar (1,2);
	CVector result;
	
	result = foo + bar;
	cout << "Addition:" << result.x << ',' << result.y << '\n';
	result = foo - bar;
	cout << "Deduction:" << result.x << ',' << result.y << '\n';	
		
	return 0;
}
