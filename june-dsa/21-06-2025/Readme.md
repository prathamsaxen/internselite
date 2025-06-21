


## 🧠 What is a String in C++?

* A **string** is a sequence of characters.
* Two types in C++:

  1. **C-style strings** (`char array`, `\0` terminated)
  2. **C++ string class** (`std::string` from `<string>`)

---

## 🪛 C-style Strings

```cpp
#include <iostream>
using namespace std;

int main() {
    char str1[20] = "Hello";   // Initialization
    char str2[20];

    cout << "Enter a string: ";
    cin >> str2;               // Input (stops at space)

    cout << "You entered: " << str2 << endl;
    return 0;
}
```

* Ends with `'\0'`
* Use `cin.getline(str, size)` to take full line input

---

## ⚙️ Useful C-style String Functions (`<cstring>`)

```cpp
strlen(str)        // Returns length
strcpy(dest, src)  // Copies src to dest
strcat(dest, src)  // Appends src to dest
strcmp(s1, s2)     // Compares strings (returns 0 if equal)
```

---

## 📦 C++ Strings (`std::string`)

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string name = "Pratham";

    cout << name.length();   // 7
    cout << name[0];         // 'P'
    name += " Saxena";       // Concatenate
    cout << name;
}
```

✅ Easy and safe — no need to manage memory or null character.

---

## 🧰 Common String Operations

```cpp
string s = "Hello World";

s.length();           // Length of string
s.substr(0, 5);       // "Hello"
s.find("World");      // Index of match
s.replace(6, 5, "C++"); // Replace "World" with "C++"
s.erase(0, 6);        // Remove characters
reverse(s.begin(), s.end()); // Reverse string
```

---

## 🧪 Input/Output Handling

```cpp
getline(cin, s);  // Full line input

stringstream ss(s);
string word;
while (ss >> word) {
    cout << word << endl;
}
```

---

## 📚 Comparison: C-Strings vs C++ Strings

| Feature         | C-style string (`char[]`) | C++ string (`std::string`) |
| --------------- | ------------------------- | -------------------------- |
| Header          | `<cstring>`               | `<string>`                 |
| Null-Terminated | Yes                       | No                         |
| Safe            | ❌                         | ✅                          |
| Easy to Use     | ❌                         | ✅                          |

---

## 🔥 DSA-Relevant String Concepts

### ✅ Palindrome Check

```cpp
bool isPalindrome(string s) {
    int i = 0, j = s.size() - 1;
    while (i < j)
        if (s[i++] != s[j--]) return false;
    return true;
}
```

---

### ✅ Frequency Count

```cpp
int freq[26] = {0};
for (char ch : s)
    freq[ch - 'a']++;
```

🔁 For general characters:

```cpp
unordered_map<char, int> mp;
for (char c : s) mp[c]++;
```

---

### ✅ Anagram Check

```cpp
bool isAnagram(string a, string b) {
    if (a.length() != b.length()) return false;
    int count[26] = {0};
    for (char c : a) count[c - 'a']++;
    for (char c : b) {
        count[c - 'a']--;
        if (count[c - 'a'] < 0) return false;
    }
    return true;
}
```

---

### ✅ Naive Pattern Matching

```cpp
void search(string txt, string pat) {
    int n = txt.size(), m = pat.size();
    for (int i = 0; i <= n - m; i++)
        if (txt.substr(i, m) == pat)
            cout << "Found at index " << i << endl;
}
```

---

### ✅ Type Conversion

```cpp
int num = stoi("1234");
string s = to_string(5678);
char ch = '5';
int digit = ch - '0';
```

---

## 🧩 Advanced Functions Summary

| Function                      | Description                            |
| ----------------------------- | -------------------------------------- |
| `substr(i, n)`                | Substring from index `i` of length `n` |
| `find(str)`                   | Returns index or `string::npos`        |
| `replace(i, n, str)`          | Replace `n` chars from `i` with `str`  |
| `erase(i, n)`                 | Remove `n` characters from index `i`   |
| `insert(i, str)`              | Insert `str` at index `i`              |
| `reverse(s.begin(), s.end())` | Reverses the string                    |

---

## 💯 Practice Problems

1. Reverse words in a sentence
2. Longest Palindromic Substring
3. Group Anagrams using hash maps
4. Remove Consecutive Duplicates
5. Count & Say Sequence
6. Check for rotation of strings
7. Implement strstr (substring match)
8. Compress string (run length encoding)
9. Minimum characters to make palindrome
10. Longest Common Prefix from a list

---
