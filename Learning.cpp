#include <iostream>

using namespace std;

double x = 10;
double y = 5;

double z(double x, double y){
    return (x + 10) / (3 * y);
}

int main(){
    double result = z(x, y);
    cout << result << endl;
    return 0;
}