#include <iostream>

// 
/**
 * @brief Klasse um Texte, welche mit der Caeser-Verschlüsselung geschrieben wurde, zu entschlüssen und um Texte mit der Caeser-Verschlüsselung zu verschlüsseln.
 * 
 */

using std::string;
class Caeser {
    int verschiebung = 0;
    std::string verschlüsselterText = "";
    std::string entschlüsselterText = "";
    std::string alphabet = "abcdefghijklmnopqrstuvwxyzäöüß";


    string decrypt(int shift, string cipher){
        return "";
    };

    string encrypt(int key, string plain){
        return "";
    };
};