#include<stdio.h>
#include <iostream>
#include <string.h>

// 
/**
 * @brief Klasse um Texte, welche mit der Caeser-Verschlüsselung geschrieben wurde, zu entschlüssen und um Texte mit der Caeser-Verschlüsselung zu verschlüsseln.
 * 
 */

using std::string;
class Caeser {
    string alphabet = "abcdefghijklmnopqrstuvwxyzäöüß";
    int i = 1;


    string decrypt(int key, string cipher){
        do{
            i + 1;
        }while(i <= strlen(cipher));
        return "";
    };

    string encrypt(int key, string plain){
        return "";
    };
};