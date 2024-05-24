#pragma once
#include <iostream>

using namespace std;

class Caesar{

public:
  Caesar(int key);
  std::string encrypt(string text);
  std::string decrypt(string text);


private:
  int key;

};