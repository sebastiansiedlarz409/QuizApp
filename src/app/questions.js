const questions = [
    //C/C++
    {
        "question":"Jaki typ służy do przechowywania wartości TRUE/FALSE?",
        "url":"",
        "a1": "bool",
        "a2": "byte",
        "a3": "char",
        "a4": "decimal",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Jaki typ służy do przechowywania wartości całkowitych z zakresu 0 do 255?",
        "url":"",
        "a1": "unsigned char",
        "a2": "unsigend short",
        "a3": "char",
        "a4": "short",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Czy typy float i double są identyczne?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy typy decimal służy do zapisu liczb ułamkowych?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy pętle do..while oraz while są identyczne?",
        "url":"https://howtoimages.webucator.com/1611.png",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Strukturą FILO jest?",
        "url":"",
        "a1": "Stos",
        "a2": "Kolejka",
        "a3": "Lista",
        "a4": "Sterta",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Strukturą FIFO jest?",
        "url":"",
        "a1": "Kolejka",
        "a2": "Stos",
        "a3": "Lista",
        "a4": "Sterta",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Strukturą liniową (elementy nie są jeden za drugim w pamięci) NIE jest?",
        "url":"https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/simplified-study-of-data-structure/Images/image002.png",
        "a1": "Lista",
        "a2": "Kolejka",
        "a3": "Wektor",
        "a4": "Sterta",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Definicją własnego typu jest?",
        "url":"",
        "a1": "Klasa i struktura",
        "a2": "Klasa",
        "a3": "Struktura",
        "a4": "Tablica",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Typ wyliczeniowy to?",
        "url":"",
        "a1": "enum",
        "a2": "list",
        "a3": "tuple",
        "a4": "dictionary",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Jeżeli jako typ zwracany podamy \"void*\" oznacza to, że nic nie zwracamy?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Jeżeli jako typ zwracany podamy \"void\" oznacza to, że nic nie zwracamy?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Rozmiar typu int w pamięci to?",
        "url":"",
        "a1": "4B",
        "a2": "1B",
        "a3": "2B",
        "a4": "8B",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Rozmiar typu unsigned long long w pamięci to?",
        "url":"",
        "a1": "8B",
        "a2": "1B",
        "a3": "2B",
        "a4": "4B",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Rozmiar typu bool w pamięci to?",
        "url":"",
        "a1": "1B",
        "a2": "4B",
        "a3": "2B",
        "a4": "8B",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wywołanie funkcji przez samą siebie to?",
        "url":"",
        "a1": "Rekurencja",
        "a2": "Iteracja",
        "a3": "Referencja",
        "a4": "Wyłuskanie",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Słowo kluczowe pomijające bieżącą iterację to?",
        "url":"",
        "a1": "continue",
        "a2": "break",
        "a3": "return",
        "a4": "skip",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Czy w funckji zwracającej \"void\" można użyć słowa kluczowego return?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Adres w pamięci nazywany jest",
        "url":"http://www.exforsys.com/images/cpp/cp01.png",
        "a1": "Wskaźnikiem",
        "a2": "Referencją",
        "a3": "Delegatem",
        "a4": "Lambdą",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Instrukcja \"cout\" znajduje się w namespace?",
        "url":"",
        "a1": "std",
        "a2": "chrono",
        "a3": "stp",
        "a4": "system",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Najnowszym wydanym standardem C++ jest?",
        "url":"",
        "a1": "C++2a",
        "a2": "C++17",
        "a3": "C++14",
        "a4": "C++11",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Dynamicznie linkowan biblioteka ma rozszerzenie?",
        "url":"",
        "a1": ".dll",
        "a2": ".lib",
        "a3": ".exe",
        "a4": ".elf",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W programie C/C++ może znajdować się więcej niż jedna funkcja main?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Funkcja main w C/C++ przyjmuje jakieś parametry?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Słowo kluczowe \"this\" w C/C++ jest wskaźnikiem?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C/C++ możliwe jest umieszczenie w klasie tylko jednego destruktora?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Pusty nawias na parametry funckji oznacza brak parametrów w C?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W strukurze C/C++ wszystkie elementy są domyślnie prywatne?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W klasie C/C++ wszystkie elementy są domyślnie prywatne?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C/C++ możliwe jest dziedziczenie z klasy abstrakcyjnej?",
        "url":"https://docs.microsoft.com/pl-pl/visualstudio/ide/reference/media/abstract-highlight-cs.png?view=vs-2022",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Każda zmienna w C/C++ stworzona wewnątrz funckji umieszczana jest na stosie?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Jedyną błędną z punktu widzenia języka C++ konstrukcją jest?",
        "url":"",
        "a1": "Console.Write(\"Hello world\");",
        "a2": "printf(\"Hello world\");",
        "a3": "std::cout<<\"Hello world\";",
        "a4": "cout<<\"Hello world\";",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Komentarze jednolinijkowe w C/C++ rozpoczynamy od?",
        "url":"",
        "a1": "//",
        "a2": "/*",
        "a3": "\\\\",
        "a4": "#",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Metodą klasy std::string zwracającą długość łańcuch tekstowego jest?",
        "url":"",
        "a1": "length()",
        "a2": "len()",
        "a3": "size()",
        "a4": "count()",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Łańcuch tekstowy w C/C++ może zostać umieszczony między apostrofami?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    }, 
    {
        "question":"Klasa std::string przeciąża operator []?",
        "url":"https://i.stack.imgur.com/LD3as.png",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Dynamiczne stworzenie obiektu w C/C++ odbywa się za pomocą konstrukcji?",
        "url":"https://cdn.educba.com/academy/wp-content/uploads/2020/12/C-Stack-vs-Heap-1.jpg",
        "a1": "MyClass* myObj = new MyClass();",
        "a2": "MyClass myObj = new MyClass();",
        "a3": "MyClass myObj = MyClass();",
        "a4": "MyClass* myObj = MyClass();",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operatory & oraz && są równoznaczne?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Instrukcje ++a oraz a++ są równoznaczne?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Operatory ^ oraz ~ są równoznaczne?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Operator ^ to operator potęgowania?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Słowo kluczowe \"const\" oznacza stałą?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Instrukcja \"#define\" służy do tworzenia makr preprocesora?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Które słowo jest słowem kluczowym C/C++?",
        "url":"",
        "a1": "switch",
        "a2": "key",
        "a3": "peek",
        "a4": "broke",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operator _ wykonuje operację modulo",
        "url":"",
        "a1": "%",
        "a2": "#",
        "a3": "!",
        "a4": "^",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operatorem o najwyższym priorytecie w C++ jest",
        "url":"",
        "a1": "operator castowania",
        "a2": "operator dodawania +",
        "a3": "operator statku kosmiczengo",
        "a4": "operator tryanrny ?:",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operatorem o najniższym priorytecie w C++ jest",
        "url":"",
        "a1": ",",
        "a2": "==",
        "a3": "::",
        "a4": "new",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operatorem C++ nie jest",
        "url":"",
        "a1": "extern",
        "a2": "new",
        "a3": "delete",
        "a4": "sizeof",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operator _ wykonuje operację różnicy symetrycznej.",
        "url":"",
        "a1": "^",
        "a2": "~",
        "a3": "!",
        "a4": "|",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Które słowo NIE jest słowem kluczowym C/C++?",
        "url":"",
        "a1": "peek",
        "a2": "if",
        "a3": "extern",
        "a4": "volatile",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Który rodzaj operatora wymaga trzech operandów?",
        "url":"",
        "a1": "trynarny",
        "a2": "binarny",
        "a3": "unarny",
        "a4": "żaden z powyższych",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operator indeksowania to?",
        "url":"",
        "a1": "[]",
        "a2": "()",
        "a3": "{}",
        "a4": "<>",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operator statku kosmicznego to?",
        "url":"",
        "a1": "<=>",
        "a2": "==",
        "a3": "<>",
        "a4": "><",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Pliki źródłowe języka C++ mają rozszerzenie?",
        "url":"",
        "a1": ".cc",
        "a2": ".c",
        "a3": ".cs",
        "a4": ".h",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Pliki źródłowe języka C mają rozszerzenie?",
        "url":"",
        "a1": ".c",
        "a2": ".cc",
        "a3": ".cs",
        "a4": ".cpp",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Pliki nagłówkowe języka C/C++ mają rozszerzenie?",
        "url":"",
        "a1": ".h",
        "a2": ".cc",
        "a3": ".cs",
        "a4": ".cpp",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Błędnym składniowo zapisem w C/C++ jest?",
        "url":"",
        "a1": "for();",
        "a2": "for(;;);",
        "a3": "while(1){}",
        "a4": "while(!0){}",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Błędnym składniowo zapisem w C/C++ jest (zakładając, że \"a\" jest typu \"void**\"?",
        "url":"",
        "a1": "int* ptr = *a;",
        "a2": "int* ptr = *(int**)a;",
        "a3": "int v = *(int*)(*(int**)a);",
        "a4": "int** ptr = (int**)a;",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Pętlą dostępną w C/C++ nie jest?",
        "url":"",
        "a1": "foreach",
        "a2": "for",
        "a3": "while",
        "a4": "do..while",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Typem nie dostępnym w C/C++ jest?",
        "url":"",
        "a1": "IntPtr",
        "a2": "int",
        "a3": "char",
        "a4": "void",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Kompilatorem języka C/C++ nie jest?",
        "url":"",
        "a1": "IL",
        "a2": "GCC",
        "a3": "Visual C++",
        "a4": "Clang",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Język C++ jest nadzbiorem języka C?",
        "url":"https://cdn.educba.com/academy/wp-content/uploads/2019/12/C-vs-C.jpg",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Adres zapisany we wskaźniku \"int* ptr = (int*)((char*)&mylong+3);\" to?",
        "url":"https://cplusplus.com/doc/tutorial/pointers/pointer_arithmetics.png",
        "a1": "3003",
        "a2": "3002",
        "a3": "3001",
        "a4": "3004",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Adres zapisany we wskaźniku \"int* ptr = (int*)(&mylong+1);\" to?",
        "url":"https://cplusplus.com/doc/tutorial/pointers/pointer_arithmetics.png",
        "a1": "3004",
        "a2": "3002",
        "a3": "3001",
        "a4": "3003",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Adres zapisany we wskaźniku \"int* ptr = (int*)(&myshort+2);\" to?",
        "url":"https://cplusplus.com/doc/tutorial/pointers/pointer_arithmetics.png",
        "a1": "2004",
        "a2": "2002",
        "a3": "2001",
        "a4": "2003",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość \"NULL\" to?",
        "url":"",
        "a1": "adres 0",
        "a2": "adres 0xFFFFFFFF",
        "a3": "specjalna wartość języka",
        "a4": "pusta wartość",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość \"nullptr\" to dokładnie to samo co \"NULL\"?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Opis \"wskaźnik na przestrzeń zawierającą wskaźniki na pewne fragmenty pamięci\" pasuje do?",
        "url":"",
        "a1": "void**",
        "a2": "void*",
        "a3": "int*",
        "a4": "const char*",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Zapis \"const char* a;\" oraz \"char* const a\" są równoznaczne?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Wartość wyrażenia \"'A'+10\" w C/C++ wynosi?",
        "url":"",
        "a1": "wszystkie z pozostałych",
        "a2": "'K'",
        "a3": "75",
        "a4": "0x4B",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia \"'0'+1\" wynosi?",
        "url":"",
        "a1": "'1'",
        "a2": "1",
        "a3": "0x1",
        "a4": "0b1",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia \"!true\" w C/C++ jest równoznaczna?",
        "url":"",
        "a1": "0",
        "a2": "1",
        "a3": "true",
        "a4": "undefined",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia \"1&&0\" w C/C++ jest równoznaczna?",
        "url":"",
        "a1": "false",
        "a2": "10",
        "a3": "true",
        "a4": "1",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Ile razy wykona się pętla \"while(999999)\" w C/C++?",
        "url":"",
        "a1": "nieskończenie wiele",
        "a2": "ani razu",
        "a3": "1",
        "a4": "999999",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Zakładając, że \"int a = 2;\" wartość przypisana do zmiennej wynosi \"int b = a++;\"?",
        "url":"",
        "a1": "2",
        "a2": "3",
        "a3": "0",
        "a4": "wystąpi błąd",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Zakładając, że \"int a = 2;\" wartość przypisana do zmiennej wynosi \"int b = ++a;\"?",
        "url":"",
        "a1": "3",
        "a2": "2",
        "a3": "0",
        "a4": "wystąpi błąd",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Struktura i unia w C/C++ to to samo?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Słowo kluczowe new alokuje pamięć w miejscu określanym mianem?",
        "url":"",
        "a1": "sterty",
        "a2": "stosu",
        "a3": "mapy",
        "a4": "zbioru",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Referencja to to samo co wskaźnik?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Kontenerem STL, najbardziej podobnym do tablicy jest?",
        "url":"",
        "a1": "std::vector",
        "a2": "std::list",
        "a3": "std::queue",
        "a4": "std::deque",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Iterator to obiekt, który ułatwia przemieszczanie się po kontenerze?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Pliki nagłówkowe pochodzące z języka C w języku C++ mają przedrostek c?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W języku C i C++ możliwe jest pobranie adresu funckji i zapisanie go we wskaźniku?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Operatorem bitowym nie jest?",
        "url":"",
        "a1": "&&",
        "a2": "&",
        "a3": "|",
        "a4": "^",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operatorem logicznym nie jest?",
        "url":"",
        "a1": "&",
        "a2": "&&",
        "a3": "||",
        "a4": "!",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operatorem logicznym nie jest?",
        "url":"",
        "a1": "<<",
        "a2": "<=",
        "a3": ">=",
        "a4": "<",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operatorem zasięgu jest?",
        "url":"",
        "a1": "::",
        "a2": "()",
        "a3": "->",
        "a4": ".",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operatorem trynarnym jest?",
        "url":"",
        "a1": "?:",
        "a2": "::",
        "a3": "->",
        "a4": "<=>",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operatorem unarnym jest?",
        "url":"",
        "a1": "!",
        "a2": ">=",
        "a3": "<=",
        "a4": "==",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Ile bitów potrzebne jest by zakodować 8 wartości?",
        "url":"",
        "a1": "3",
        "a2": "4",
        "a3": "8",
        "a4": "1",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Ile unikalnych wartości zakodować można w bajcie?",
        "url":"",
        "a1": "256",
        "a2": "255",
        "a3": "0xFF",
        "a4": "0x1",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Czy kod: \"int size = 10; int tablica[size];\" jest poprawny?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy kod: \"int size = 10; int* tablica = new int[size];\" jest poprawny?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Co się stanie jeżeli odpytamy tablicę używając indeksu równego rozmiarowi tej tablicy?",
        "url":"",
        "a1": "otrzymamy jakieś dane",
        "a2": "wystąpi błąd kompilacji",
        "a3": "wystąpi błąd runtime",
        "a4": "nic się nie stanie",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Który z typów jest niedostępny w języku C?",
        "url":"",
        "a1": "bool",
        "a2": "double",
        "a3": "char",
        "a4": "short",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Do rzucania wyjątków w C++ służy słowo kluczowe?",
        "url":"",
        "a1": "throw",
        "a2": "new",
        "a3": "raise",
        "a4": "catch",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Konstruktor kopiujący jest automatycznie generowany przez kompilator w C++?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Konstruktor posiada typ zwracany?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Metoda oznaczona jako \"friend\" ma dostęp do prywatnych pól klasy?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Pola oznaczone w klasie jako chronione są dziedziczone w C++?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Struktura w C i C++ działa tak samo i ma te same możliwości?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C++ każda zmienna domyslnie przekazywana jest przez wartość?",
        "url":"https://www.microsoftpressstore.com/content/images/chap8_9781509301041/elementLinks/08fig01.jpg",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Konstruktor kopiujący powinien przyjmować obiekt kopiowany jako referencje na stałą \"const T&\"?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C++ każda definicja klasy musi być zakończona nie tylko klamrą, ale też średnikiem?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"C++ oferuje mechanizm null safety?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"C++ jest językiem interpretowanym?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Do czego służy nawias [] w deklaracji funckji lambda (C++)?",
        "url":"",
        "a1": "do przechwytywania zmiennych",
        "a2": "do deklaracji parametrów",
        "a3": "do deklaracji ciała funckji",
        "a4": "do niczego konkretnego",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Instrukcja \"mov eax, ebx\"?",
        "url":"",
        "a1": "kopiuje zawartość ebx do eax",
        "a2": "przenosi zawartość ebx do eax",
        "a3": "kopiuje zawartość eax do ebx",
        "a4": "przenosi zawartość eax do ebx",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    //numeric systems
    {
        "question":"Liczba 0xAA to w systemie binarnym?",
        "url":"",
        "a1": "0b10101010",
        "a2": "0b11001100",
        "a3": "0b00110011",
        "a4": "0b01010101",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Liczba 0xFF to w systemie binarnym?",
        "url":"",
        "a1": "0b11111111",
        "a2": "0b11011101",
        "a3": "0b10111011",
        "a4": "0b01000100",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Liczba 256 to w systemie szesnastkowym?",
        "url":"",
        "a1": "0xFF",
        "a2": "0x0FF",
        "a3": "0x100",
        "a4": "0x255",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Liczba 0b10000000 to w systemie szesnastkowym?",
        "url":"",
        "a1": "0x80",
        "a2": "0x7F",
        "a3": "0x88",
        "a4": "0x89",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Jeżeli najmniej znaczący bit w liczbie jest ustawiony na 1 to liczba jest parzysta.",
        "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptH7mv3klJsXgV2cTzbNTpsa6gkI6D6ifLUxu9UgGL295wu_qqIWCexFYC50JJIAm_w&usqp=CAU",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Liczba -1 to w systemie binarnym?",
        "url":"",
        "a1": "0b11111111",
        "a2": "0b10000000",
        "a3": "0b01111111",
        "a4": "0b00000001",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 0b10100000>>4 to?",
        "url":"",
        "a1": "0b00001010",
        "a2": "0b01010000",
        "a3": "0b00000010",
        "a4": "0b00000001",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 0b10110000<<2 to?",
        "url":"",
        "a1": "0b11000000",
        "a2": "0b11000010",
        "a3": "0b11000010",
        "a4": "0b00001011",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 0xA0>>4 to?",
        "url":"",
        "a1": "0x0A",
        "a2": "0x12",
        "a3": "0x00",
        "a4": "0xA0",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 0xABCDEF98<<8 to?",
        "url":"",
        "a1": "0xCDEF9800",
        "a2": "0xCDEF90AB",
        "a3": "0xBCDEF98A",
        "a4": "0x00ABCDEF",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 8>>1 to?",
        "url":"",
        "a1": "4",
        "a2": "2",
        "a3": "3",
        "a4": "1",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 2<<3 to?",
        "url":"",
        "a1": "16",
        "a2": "8",
        "a3": "32",
        "a4": "64",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 2^5 (potęga) to?",
        "url":"",
        "a1": "32",
        "a2": "64",
        "a3": "16",
        "a4": "13",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 2^10 to?",
        "url":"",
        "a1": "1024",
        "a2": "2048",
        "a3": "512",
        "a4": "0xFF",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 0b10100000&0b1 to?",
        "url":"",
        "a1": "0",
        "a2": "1",
        "a3": "2",
        "a4": "0b10100000",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 0xFF&0x80 to?",
        "url":"",
        "a1": "wszystkie pozostałe",
        "a2": "0b10000000",
        "a3": "128",
        "a4": "0x80",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 0xFF|0x00 to?",
        "url":"",
        "a1": "0xFF",
        "a2": "0x00",
        "a3": "0x0F",
        "a4": "0xF0",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 0b10101010|0b01010000 to?",
        "url":"",
        "a1": "0b11111010",
        "a2": "0b00001111",
        "a3": "0x10101111",
        "a4": "0x10101010",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 0b00000001|0b1 to?",
        "url":"",
        "a1": "0x00000010",
        "a2": "0x00000001",
        "a3": "0x00000011",
        "a4": "0x00000001",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia ~0xF0 to?",
        "url":"",
        "a1": "wszystkie pozostałe",
        "a2": "0b00001111",
        "a3": "0x0F",
        "a4": "15",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 0x10101010^0b11110000 to?",
        "url":"",
        "a1": "0b01011010",
        "a2": "0b11001100",
        "a3": "0b10100000",
        "a4": "0b10101010",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 0xF&&0x0 w C/C++ to?",
        "url":"",
        "a1": "wszystkie pozostałe",
        "a2": "0",
        "a3": "fałsz",
        "a4": "0x0",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 0xFFAABBCC || 0x00000001 to?",
        "url":"",
        "a1": "true",
        "a2": "false",
        "a3": "0",
        "a4": "0xFFAABBCD",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia !0b111111110 to?",
        "url":"",
        "a1": "false",
        "a2": "undefined",
        "a3": "1",
        "a4": "0xE",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia 0xDEADC0DE jest zapisana w systemie oznaczanym jako?",
        "url":"",
        "a1": "HEX",
        "a2": "DEC",
        "a3": "OCT",
        "a4": "BIN",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wartość wyrażenia \"0xDEADC0DE == DEADC0DEh\" to?",
        "url":"",
        "a1": "true",
        "a2": "false",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Jak sprawdzić czy 21 bit liczby typu int jest ustawiony na 1?",
        "url":"",
        "a1": "((a&(1<<21))>>21)",
        "a2": "((a&(1>>21))>>21)",
        "a3": "((a&(1>>21))<<21)",
        "a4": "(a&(1<<21))",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Jak ustawić 4 bit liczby unsigned char na 1 bez względu na jego obecny stan?",
        "url":"",
        "a1": "a|(1<<4)",
        "a2": "a|(1>>4)",
        "a3": "a&(1<<4)",
        "a4": "a&(1>>4)",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Kodowanie liczb ujemnych odbywa się za pomocą metody",
        "url":"",
        "a1": "Dopełnień do 2",
        "a2": "Dopełnień do 1",
        "a3": "Znak moduł",
        "a4": "IEEE 754",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Kodowanie liczb zmiennoprzecinkowych odbywa się za pomocą standardu",
        "url":"",
        "a1": "IEEE 754",
        "a2": "IEEE 1284",
        "a3": "IEEE 1394",
        "a4": "U2",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Jeżeli najstarszy bit liczby \"signed\" jest ustawiony na 1 to liczba jest?",
        "url":"",
        "a1": "ujemna",
        "a2": "dodatnia",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    //algorytmy
    {
        "question":"Złożość obliczeniowa to głównych operacji do wykonania względem ilości danych wejściowych?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Przykładem algorytmu typu dziel i zwyciężaj jest?",
        "url":"",
        "a1": "quick-sort",
        "a2": "insert-sort",
        "a3": "alg. dijkstra",
        "a4": "alg kruskala",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Przykładem algorytmu zachłannego jest?",
        "url":"",
        "a1": "alg. dijkstra",
        "a2": "insert-sort",
        "a3": "select-sort",
        "a4": "quick-sort",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Maksymalny rząd wierzchołka grafu na obrazku to?",
        "url":"https://eduinf.waw.pl/inf/alg/001_search/images/0123_08.gif",
        "a1": "3",
        "a2": "2",
        "a3": "1",
        "a4": "0",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Czy graf na obrazku jest skierowany?",
        "url":"https://eduinf.waw.pl/inf/alg/001_search/images/0123_08.gif",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy graf na obrazku jest skierowany?",
        "url":"https://brain.fuw.edu.pl/edu/images/0/03/Directed_acyclic_graph_2.svg",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy graf na obrazku da się utworzyć cykl komiwojazera?",
        "url":"https://mattomatti.com/RES/a0173/i00.svg",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy graf na obrazku jest drzewem?",
        "url":"https://i.stack.imgur.com/kWdCq.png",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy na obrazku kolorem czerwonym zaznaczono krawędź?",
        "url":"https://eduinf.waw.pl/inf/alg/001_search/images/0141_02.gif",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy graf na obrazku jest drzewem?",
        "url":"https://www.researchgate.net/profile/Timothy-Lethbridge/publication/3959969/figure/fig1/AS:670005062553607@1536753063795/Compacted-directed-acyclic-graph-of-a-tree.png",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Algorytmem grafowym nie jest?",
        "url":"",
        "a1": "Algorytm Węgierski",
        "a2": "Algorytm Dijkstry",
        "a3": "Algorytm Kruskala",
        "a4": "Algorytm Prima",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Cykl, który musi przejśc po wszystkich krawędziach grafu jest?",
        "url":"",
        "a1": "Cykl Eulera",
        "a2": "Cykl Hamiltona",
        "a3": "Cykl Komiwojazera",
        "a4": "Żaden z wymienionych",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Przedstawiając algorytm za pomocą bloków, blok start/stop narysujemy w kształcie?",
        "url":"",
        "a1": "Elipsy",
        "a2": "Prostokątu",
        "a3": "Równoległoboku",
        "a4": "Trójkąta",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Najgorszą z punktu widzenia wydajności złożonością algorytmu jest?",
        "url":"",
        "a1": "O(n!)",
        "a2": "O(n^2)",
        "a3": "O(1)",
        "a4": "O(n)",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Najlepszą z punktu widzenia wydajności złożonością algorytmu jest?",
        "url":"",
        "a1": "O(1)",
        "a2": "O(n^2)",
        "a3": "O(n^3)",
        "a4": "O(nlogn)",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Bloczek z ilustracji to blok?",
        "url":"https://quizizz.com/_media/questions/L2FwcGhvc3RpbmdfcHJvZC9ibG9icy9BRW5CMlVwZnJVWXoxTTZzbWROOHBPbUZHamE4OUY4WnFSaGtpQVhHRHktWDBwMmMwTjRtVUVvZ1UwTHducEM5dWd6bXNGWVlJZTYwZDU5b2duZU9XQllXUWllWnBkNVB0UjBsdjl5QzdVVE1lZFh4dzlqMmhxVS5URkFHa1JZSHc5T0tMdzZo_900_900",
        "a1": "warunku",
        "a2": "operacji",
        "a3": "petli",
        "a4": "wejścia-wyjścia",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Algorytm można przedstawić za pomocą?",
        "url":"",
        "a1": "Każdym z wymienionych sposobów",
        "a2": "Tylko słownie",
        "a3": "Tylko pseudokodem",
        "a4": "Tylko schematem blokowym",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Rodzajem algorytmu nie jest?",
        "url":"",
        "a1": "alg. kroczący",
        "a2": "alg. sekwencyjny",
        "a3": "alg. iteracyjny",
        "a4": "alg. rekurencyjny",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Algorytm na obrazku to?",
        "url":"data:image/png;base64,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",
        "a1": "alg. iteracyjny",
        "a2": "alg. sekwencyjny",
        "a3": "alg. blokowy",
        "a4": "alg. rekurencyjny",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Najpopularniejszym sposobem zapisu grafu w programie jest tablica 2D?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    //programowanie obiektowe
    {
        "question":"Zasadą programowania obiektowego, która mówi by trzymać jaknajwięcej elementów klasy jako prywatne jest?",
        "url":"",
        "a1": "Hermetyzacja",
        "a2": "Abstrakcja",
        "a3": "Polimorfizm",
        "a4": "Przyjaźń",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wielopostaciowość nazywana jest?",
        "url":"",
        "a1": "Polimorfizmem",
        "a2": "Dziedziczeniem",
        "a3": "Abstrakcją",
        "a4": "Wirtualizacją",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Zależnością klasy jest?",
        "url":"",
        "a1": "Inna klasa",
        "a2": "Każde pole klasy",
        "a3": "Każda metoda klasy",
        "a4": "Żadne z wymienionych",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Metoda abstrakcyjna musi być zaimplementowana przez klasę dziedziczącą?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Można utworzyć obiekt klasy abstrakcyjnej?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Można utworzyć referencje typu klasy abstrakcyjnej?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Z ilu klas może dziedziczyć klasa w C#/Java/Python?",
        "url":"",
        "a1": "1",
        "a2": "2",
        "a3": "dowolnej ilości",
        "a4": "0",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Z ilu klas może dziedziczyć klasa w C++?",
        "url":"",
        "a1": "dowolnej ilości",
        "a2": "2",
        "a3": "1",
        "a4": "0",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Przekazywanie zależności do klasy poprzez konstruktor nazywamy?",
        "url":"",
        "a1": "wstrzykiwaniem zależności",
        "a2": "odwracaniem zależności",
        "a3": "dziedziczeniem zależności",
        "a4": "żadnym z wymienionych",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Obiekt klasy może być przekazany do funckji przez (C++)?",
        "url":"",
        "a1": "wartość/referencje/wskaźnik",
        "a2": "wartość/wskaźnik",
        "a3": "wartość/referencje",
        "a4": "wartość",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Metoda ustawiająca prywatne pole to?",
        "url":"",
        "a1": "setter",
        "a2": "getter",
        "a3": "metoda wirtualna",
        "a4": "metoda abstrakcyjna",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Konstruktor?",
        "url":"",
        "a1": "w typowych przypadkach powinien być funkcją typu public",
        "a2": "może być funkcja wirtualną",
        "a3": "lista argumentów musi być zawsze pusta",
        "a4": "a dostęp tylko do danych prywatnych",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operacje powodujące wystąpienie wyjątku",
        "url":"",
        "a1": "powinny być umieszczone w bloku try",
        "a2": "powinny być umieszczone w bloku exception",
        "a3": "powinny być umieszczone w bloku throw",
        "a4": "powinny być umieszczone w bloku catch",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Jak nazywamy składniki, z których zbudowane są obiekty?",
        "url":"",
        "a1": "Pola i metody",
        "a2": "Klasy i metody",
        "a3": "Metody i funkcje",
        "a4": "Funkcje i stałe",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Na czym polega hermetyzacja?",
        "url":"",
        "a1": "Na zabezpieczeniu składników obiektu przez ich bezpośrednią modyfikacją",
        "a2": "Na zabezpieczeniu konstruktora klasy przed niepowołanym wywołaniem",
        "a3": "Na zabezpieczaniu składników klasy przed niepotrzebnym zajmowaniem pamięci",
        "a4": "Na deklarowaniu obiektów danej klasy przy pomocy metod wirtualnych",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Na czym polega dziedziczenie w programowaniu obiektowym?",
        "url":"",
        "a1": "Na tworzeniu nowej klasy na podstawie jednej lub kilku już istniejących klas",
        "a2": "Na łączeniu obiektów",
        "a3": "Na kopiowaniu cech obiektu przez metodę wirtualną",
        "a4": "Na usunięciu z istniejącej klasy zbędnych elementów",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Czy pole i właściwość w terminologi C# to to samo?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Interfejs to konstrukcja znana np. z języka C# Jest ona podobna do?",
        "url":"",
        "a1": "klasy abstrakcyjnej",
        "a2": "zwykłej klasy",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Programowanie strukturalne i funkcyjne to to samo?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Obiekt to instancja klasy?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Słowo kluczowe \"sealed\" w C# blokuje możliwość dziedziczenia z klasy?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Słowo kluczowe \"virtual\" oznacza metodę jako zależną od typu obiektu a nie typu referencji?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Klasa pochodna ma dostęp do wszytkich elementów klasy bazowej?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Klasy oferują możliwość przeciążania wszystkich operatorów?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Gdy argumentem funkcji jest struktura/obiekt?",
        "url":"",
        "a1": "aby funkcja zmieniła oryginał, argumentem musi być wskaźnik do struktury/obiektu",
        "a2": "funkcja może zmienić oryginał struktury/obiektu",
        "a3": "funkcja może zmienić tylko kopię struktury/obiektu",
        "a4": "żadna z pozostałych odpowiedzi nie jest poprawna",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Jaką klasę nazywamy abstrakcyjną?",
        "url":"",
        "a1": "Zawierająca przynajmniej jedną metodę czysto wirtualną",
        "a2": "Taką, która jest jednocześnie klasą bazową i pochodną",
        "a3": "Zawierającą wszystkie trzy specyfikatory dostępu",
        "a4": "Zawierającą 2 wersje przeciążonego konstruktora",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Metoda wirtualna…",
        "url":"",
        "a1": "Może być przedefiniowana w klasie pochodnej",
        "a2": "Nie posiada definicji",
        "a3": "Nigdy nie jest dziedziczona",
        "a4": "Zawsze korzysta z rekurencji",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Metoda czysto wirtualna…",
        "url":"",
        "a1": "Nie posiada definicji",
        "a2": "Nie zwraca",
        "a3": "Nigdy nie jest dziedziczona",
        "a4": "Zawsze korzysta z rekurencji",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Jak wywołać metodę obiekty za pomocą wskaźnika?",
        "url":"",
        "a1": "wskaźnik->metoda();",
        "a2": "wskaźnik.metoda();",
        "a3": "metoda->wskaźnik();",
        "a4": "metoda.wskaźnik();",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Na czym polega polimorfizm?",
        "url":"",
        "a1": "Wskaźnik/Referencję klasy bazowej można powiązać z obiektami klas pochodnych",
        "a2": "Konstruktor klasy bazowej staje się wirtualny",
        "a3": "Klasy pochodne są czysto abstrakcyjne",
        "a4": "Wskaźnik klasy bazowej jest dziedziczony przez klasy pochodne",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Czy klasa pochodna dziedziczy z klasy bazowej konstruktor?",
        "url":"",
        "a1": "NIE",
        "a2": "TAk",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy klasa pochodna dziedziczy z klasy bazowej destruktor?",
        "url":"",
        "a1": "NIE",
        "a2": "TAk",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy elementy statyczne klasy mają dostęp do elementów niestatycznych?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy elementy niestatyczne klasy mają dostęp do elementów statycznych?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy setter może wykonywać dodatkową logikę oprócz ustawiania pola?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy getter może wykonywać dodatkową logikę oprócz zwracania pola?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy klasa może dziedziczyć sama z siebie?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy interfejs może zawierać pola?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy słowo kluczowe this może mieć wartość NULL?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy słowa kluczowego \"this\" można użyć w metodzie statycznej?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy klasa może dziedziczyć sama z siebie?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Ile pól zawiera klasa na obrazku?",
        "url":"https://quizizz.com/media/resource/gs/quizizz-media/quizzes/51fb2ff6-fd68-4fa3-911b-067fa8b551a1?w=600&h=600",
        "a1": "4",
        "a2": "2",
        "a3": "1",
        "a4": "3",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Językiem obsługującym wieloklasowe dziedziczenie jest?",
        "url":"",
        "a1": "C++",
        "a2": "C",
        "a3": "C#",
        "a4": "Javascript",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Cztery filary programowania obiektowego to?",
        "url":"",
        "a1": "Dziedziczenie, Polimorfizm, Hermetyzacja, Abstrakcja",
        "a2": "Public, Protected, Private, Interface",
        "a3": "Public, Protected, Private, Implementation",
        "a4": "Constructor, Destructor, Abstractor, Iterator",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W języku Java mamy operator == oraz funkcję equals(). Na czym polega różnica między nimi w C#/Java?",
        "url":"",
        "a1": "Operator == porównuje tylko referencje a Equals() także zawartość obiektu",
        "a2": "Operator == porówuje zawartość obiektu a Equals() referencje",
        "a3": "Obie metody porównania są identyczne",
        "a4": "Operator == to skrócona wersja Equals()",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Najważniejszą cechą klasy abstrakcyjnej jest:",
        "url":"",
        "a1": "Brak możliwości stworzenia obiektu tej klasy.",
        "a2": "Brak możliwości dziedziczenia tej klasy.",
        "a3": "Brak nazwy klasy.",
        "a4": "Utrudnione kopiowanie obiektów tej klasy.",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    //C#
    {
        "question":"Firmą odpowiedzialną za język C# jest",
        "url":"",
        "a1": "Microsoft",
        "a2": "Google",
        "a3": "Meta",
        "a4": "Apple",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Język C# jest podobny do języka?",
        "url":"https://miro.medium.com/max/620/1*nIwkpZkz0FdyBoHx6mOr7g.jpeg",
        "a1": "Java",
        "a2": "Javascript",
        "a3": "C",
        "a4": "C++",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Każdy program napisany w C# musi mieć funkcję main?",
        "url":"https://miro.medium.com/max/620/1*nIwkpZkz0FdyBoHx6mOr7g.jpeg",
        "a1": "Od .NET 6 nie każdy",
        "a2": "Od .NET 6 każdy",
        "a3": "Każdy oprócz programu webowego",
        "a4": "Każdy oprócz programu konsolowego",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"C# oferuje obsługę wskaźników?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# funkcja main jest statyczna?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# typy referencyjne są usuwane z pamięci manualnie przez programistę?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# typy referencyjne są usuwane z pamięci manualnie przez garbage collector?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Plik źródłowy języka C# ma rozszerzenie?",
        "url":"",
        "a1": ".cs",
        "a2": ".cc",
        "a3": ".c",
        "a4": ".sc",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W C# da się napisać metodę poza klasą?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Typem z języka C# niedostępnym w innych językach jest?",
        "url":"",
        "a1": "IntPtr",
        "a2": "string",
        "a3": "bool",
        "a4": "StringBuilder",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Każda zmienna w C# przekazywana jest przez wartość do funckji itp?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# klasy i struktury są równoznaczne i zachowują się tak samo?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Struktura definuje typ referencyjny w języku C#?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# \"Console.Write()\" wstawia enter na końcu?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Klasa definuje typ referencyjny w języku C#?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Delegaty w C# to mechanizm podobny do wskaźników na funkcję?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Delegaty w C# to typy referencyjne?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# delegat \"Func<int, double, bool>\" zwraca?",
        "url":"",
        "a1": "bool",
        "a2": "double",
        "a3": "int",
        "a4": "nic",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# delegat \"Action<string, int, int>\" zwraca?",
        "url":"",
        "a1": "nic",
        "a2": "bool",
        "a3": "int",
        "a4": "string",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Delegat C# \"Func<int, bool> DodatnieDelegat2 = (a) => a >= 0 ? true : false;\" jest poprawny?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Delegat C# \"Predicate<int> DodatnieDelegat = (a) => a >= 0 ? true : false;\" jest poprawny?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# delegat \"Predicate<int>\" zwraca?",
        "url":"",
        "a1": "bool",
        "a2": "double",
        "a3": "int",
        "a4": "nic",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Typem danych wykrzystywanym do precyzyjnego przechowywania liczb ułamkowych w C# jest?",
        "url":"",
        "a1": "decimal",
        "a2": "double",
        "a3": "float",
        "a4": "dynamic",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Istnieje w C# różnica między zmienną typu \"var\" a \"dynamic\"?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Istnieje w C# różnica między zmienną typu \"const\" a \"readonly\"?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Oznaczenie w C# klasy jako \"sealed\" blokuje możliwość dziedziczenia z niej?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Jeżeli chcemy w C# parsować na double string z liczbą ułamkową to ma znaczenie czy użyjemy w niej kropki czy przecinka?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Aby poznać długość stringa w C# należy posłużyć się?",
        "url":"",
        "a1": ".Length",
        "a2": ".Length()",
        "a3": ".Count",
        "a4": ".Count()",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Konstrukcja alokująca tablicę w C# to?",
        "url":"",
        "a1": "int[] tablica = new int[5];",
        "a2": "int tablica[] = new int[5];",
        "a3": "int[] tablica = new int(5);",
        "a4": "int tablica[] = new int(5);",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Konstrukcja alokująca tablicę 2D w C# to?",
        "url":"",
        "a1": "int[,] tablica2 = new int[5,2];",
        "a2": "int[][] tablica2 = new[5][2] int;",
        "a3": "int[][] tablica2 = new int[5,2];",
        "a4": "int[][] tablica2 = new[5][2] int;",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Tablica postrzępiona w C# to?",
        "url":"",
        "a1": "Tablica 2D gdzie każda podtablica jest innego rozmiaru",
        "a2": "Tablica 2D gdzie każda podtablica jest równa",
        "a3": "Tablica 2D gdzie każda podtablica ma nieparzystą ilość elementów",
        "a4": "Każda tablica",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"String w C# jest typem referencyjnym?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Tablica w C# jest typem referencyjnym?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"List<T> w C# jest typem referencyjnym?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Span<T> w C# jest typem referencyjnym?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Enum w C# jest typem referencyjnym?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# typy referencyjne alokowane są na stercie a wartościowe na stosie?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# referencja na typ referencyjny i tak jest na stosie?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# typ wartościowy staje się typem referencyjnym jeżeli jest składową typu referencyjnego?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Boxing to proces sztuczengo opakowania typu wartościowego w typ referencyjny?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Właściwość w C# to odpowiednik gettera i settera z innych języków?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Mechanizm pozwalający programowi czytać inforamcje o samym sobie to?",
        "url":"",
        "a1": "Refleksja",
        "a2": "Lustro",
        "a3": "Asemblacja",
        "a4": "Instancjonowanie",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Mechanizm pozwalający pisać w C# wydajne zapytania do kolekcji nazywany jest?",
        "url":"",
        "a1": "LINQ",
        "a2": "LI",
        "a3": "Enumerator",
        "a4": "Enumerable",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Klasa w C# służąca do tworznia stringów to?",
        "url":"",
        "a1": "StringBuilder",
        "a2": "BuildString",
        "a3": "String",
        "a4": "Strings",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"List<T> w C# nie dziedziczy z?",
        "url":"",
        "a1": "IEnumerator",
        "a2": "IList",
        "a3": "IEnumerable",
        "a4": "ICollection",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Parametry generyczne umieszczamy zazwyczaj w?",
        "url":"",
        "a1": "<>",
        "a2": "()",
        "a3": "[]",
        "a4": "{}",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W C# interfejsy nazywa się zaczynając od litery I?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# List<T> nie różni się niczym od zwykłej tablicy?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# ArrayList oraz tablica to to samo?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Metoda LINQ First() działa tak samo jak FirstOrDefault()?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# List<T> to to samo co IEnumerable<T>?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Do czego służy metoda ToString() w C#?",
        "url":"",
        "a1": "Zwrócenia reprezentacji tekstowej obiektu",
        "a2": "Parsowania obiektu na tekst",
        "a3": "Zwrócenia nazwy obiektu",
        "a4": "Zwrócenia typu obiektu",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Metoda klasy string, która sprawdza czy napis jest nullem lub jest pusty to?",
        "url":"",
        "a1": "IsNullOrEmpty()",
        "a2": "NullOrEmpty()",
        "a3": "IsEmpty()",
        "a4": "IsNull()",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Gdy \"a = null\" instrukcja \"Console.WriteLine(a is { });\"?",
        "url":"",
        "a1": "false",
        "a2": "true",
        "a3": "0",
        "a4": "kompilacja skończy się błędem",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Słowo kluczowe służące do napisywania metod klasy bazowej to?",
        "url":"",
        "a1": "override",
        "a2": "virtual",
        "a3": "extern",
        "a4": "static",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Słowo kluczowe języka C# \"async\" w nagłówku funkcji oznacza?",
        "url":"",
        "a1": "operację asynchroniczą",
        "a2": "operację synchroniczną",
        "a3": "funkcję wywołania zwrotnego",
        "a4": "funckję dotykającą UI",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Słowo kluczowe języka C# \"await\" automatycznie powoduje?",
        "url":"",
        "a1": "że metoda staje się asynchroniczna",
        "a2": "że metoda w danym miejscu może się zakończyć",
        "a3": "że metoda otwiera w danym miejscu połączenie sieciowe",
        "a4": "że metoda staje się synchroniczną",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W C# typem zwracanym z metod asynchronicznych jest?",
        "url":"",
        "a1": "Task<T>",
        "a2": "Future<T>",
        "a3": "Promise<T>",
        "a4": "Thread<T>",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Język C# kompilowany jest w pierwszej kolejności do _ a dopiero później do kodu maszynowego?",
        "url":"",
        "a1": "Intermediate Language",
        "a2": "Just In Time Runtime",
        "a3": "Opcodes",
        "a4": "Abstract Syntax Tree",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Typy wartościowe można przekazać w formie referencji za pomocą?",
        "url":"",
        "a1": "wszystkie pozostałe",
        "a2": "słowa kluczowego \"ref\"",
        "a3": "słowa kluczowego \"out\"",
        "a4": "boxingu",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W C# konwencja nazw stosuje zazwyczaj?",
        "url":"",
        "a1": "odmiany cammelCase",
        "a2": "odmiany snake_case",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Skrót \"WPF\" oznacza?",
        "url":"",
        "a1": "Windows Presentation Foundation",
        "a2": "Windows Power Framework",
        "a3": "Windows Presentation Framework",
        "a4": "Windows Power Foundation",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Frameworkiem do tworzenia stron interentowych powiązanym z C# nie jest?",
        "url":"",
        "a1": "Flask",
        "a2": "ASP.NET",
        "a3": "Blazor",
        "a4": "Razor",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Xamarin pozwal tworzyć aplikację na?",
        "url":"",
        "a1": "iOS oraz Androida",
        "a2": "Androida oraz Windows",
        "a3": "Tylko Andorida",
        "a4": "Tylko Windows",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Popularną klasą C# odpowiedzialną za operacje komunikacji z REST API jest?",
        "url":"",
        "a1": "HttpClient",
        "a2": "Http",
        "a3": "HttpOk",
        "a4": "Socket",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Aby użyć wskaźników w C# należy oznaczyć funkcję słowem kluczowym?",
        "url":"",
        "a1": "unsafe",
        "a2": "volatile",
        "a3": "virtual",
        "a4": "static",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Klasą nadrzędną dla wyjątków w C# jest?",
        "url":"",
        "a1": "Exception",
        "a2": "Throwable",
        "a3": "Except",
        "a4": "Error",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Pojęcie statycznego polimorfizmu oznacza?",
        "url":"",
        "a1": "Przeciążanie funkcji",
        "a2": "Nadpisywanie funckji",
        "a3": "Dziedziczenie",
        "a4": "Wielokrotne dziedziczenie",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Słowo kluczowe służące do napisywania metod klasy bazowej to?",
        "url":"",
        "a1": "override",
        "a2": "virtual",
        "a3": "extern",
        "a4": "static",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Referencja w porównaniu do wskaźnika?",
        "url":"",
        "a1": "nie pozwala na arytmetykę na adresie",
        "a2": "pozwala na arytmetykę na adresie",
        "a3": "jest konstrukcją składniową",
        "a4": "oznacza obiekt jako stałą",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Która pętla nie jest dostępna w C#?",
        "url":"",
        "a1": "for(auto el in collection){}",
        "a2": "foreach(var el in collection){}",
        "a3": "while(a > 0) {}",
        "a4": "for(int i = 0;i<10;i++){}",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Breakpoint pozwala?",
        "url":"",
        "a1": "zatrzymać program we wskazanym miejscu",
        "a2": "zakończyć program we wskazanym miejscu",
        "a3": "zakończyć nagle pętle",
        "a4": "zakończyć nagle funkcję",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Adres w pamięci ma każdy?",
        "url":"",
        "a1": "bajt",
        "a2": "bit",
        "a3": "kilobajt",
        "a4": "megabajt",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Do budowania układu siatki w WPF i Xamarin służy tag?",
        "url":"",
        "a1": "GRID",
        "a2": "TABLE",
        "a3": "COLUMN",
        "a4": "ROW",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W WPF oraz Xamarin do elementów interfejsu odwołujemy się za pomocą?",
        "url":"",
        "a1": "atrybutu name",
        "a2": "atrybutu id",
        "a3": "atrybutu class",
        "a4": "atrybutu title",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Język do budowania interfejsu użytkownika w WPF oraz Xamarin nazywa się?",
        "url":"",
        "a1": "XAML",
        "a2": "XML",
        "a3": "Blazor",
        "a4": "Razor",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Windows Forms to to samo co WPF?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"C# obsługuje mechanizm null-safety?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Skrót LINQ oznacza?",
        "url":"",
        "a1": "Language Integrated Query",
        "a2": "Link List Inner Query",
        "a3": "Lazy Integration Query",
        "a4": "Linked Integrated Query",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Metoda rozszerzająca to metoda?",
        "url":"",
        "a1": "statyczna, która zachowuje się jakby była częścią obiektu",
        "a2": "zwykła metoda, która zachowuje się jakby była częścią obiektu",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Na obrazku zaznaczono",
        "url":"https://www.kiltandcode.com/assets/img/2020/05/attributes-for-unit-tests.png",
        "a1": "atrybuty",
        "a2": "modyfikatory",
        "a3": "tagi",
        "a4": "tokeny",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W C# za operacje na plikach odpowiada między innymi klasa \"File\"?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# za operacje na katalogach odpowiada między innymi klasa \"Directory\"?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C# występuje pojęcie przestrzeni nazw?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    //GIT
    {
        "question":"Polecenie \"git reset --hard\" oraz git reset --soft\" działają tak samo?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Jakiego przełącznika należy użyć z poleceniem \"git reset\" aby cofnięte zmiany wylądowały na \"stage\"?",
        "url":"",
        "a1": "--soft",
        "a2": "--mixed",
        "a3": "--hard",
        "a4": "--medium",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Polecenie \"git rebase\" oraz git merge\" działają tak samo?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Polecenie \"git stash\" cofa projekt do ostatniego commita a zmiany są tracone?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Aby w systemie git przeglądać historie commitów należy posłużyć się poleceniem?",
        "url":"",
        "a1": "git log",
        "a2": "git status",
        "a3": "git stash",
        "a4": "git diff",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie systemu GIT dodające wszystkie pliki na stage to?",
        "url":"",
        "a1": "git add .",
        "a2": "git add *",
        "a3": "git add $",
        "a4": "git add all",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Aby w systemie git przeglądać historie commitów w formie list należy dodać do \"git log\"?",
        "url":"",
        "a1": "--oneline",
        "a2": "--verbose",
        "a3": "--overview",
        "a4": "--list",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Aby w systemie git stwierdzić jakie pliki zostały zmodyfikowane od ostatniego commita należy użyć polecenia?",
        "url":"",
        "a1": "git status",
        "a2": "git log",
        "a3": "git stash",
        "a4": "git rebase",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Inicjalizacja repozytorium lokalnego git odbywa się poleceniem?",
        "url":"",
        "a1": "git init",
        "a2": "git start",
        "a3": "git add",
        "a4": "git rebase",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Commita w systemie GIT wykonujemu poleceniem?",
        "url":"",
        "a1": "git commit -m \"Message\"",
        "a2": "git commit -log \"Message\"",
        "a3": "git commit message \"Message\"",
        "a4": "git add commit -m \"Message\"",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Nową gałąź w systemie GIT tworzymy poleceniem?",
        "url":"",
        "a1": "git branch \"nazwa\"",
        "a2": "git checkout \"nazwa\"",
        "a3": "git link \"nazwa\"",
        "a4": "git add branch \"nazwa\"",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Gałąź w systemie GIT usuwamy poleceniem?",
        "url":"",
        "a1": "git branch -d \"nazwa\"",
        "a2": "git delete \"nazwa\"",
        "a3": "git drop \"nazwa\"",
        "a4": "git gone \"nazwa\"",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Przełączanie gałęzi w systemie git odbywa się za pomocą?",
        "url":"",
        "a1": "git checkout \"nazwa\"",
        "a2": "git branch \"nazwa\"",
        "a3": "git switch \"nazwa\"",
        "a4": "git load \"nazwa\"",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W git odnośnik do zdalnego repozytorium dodajemy poleceniem?",
        "url":"",
        "a1": "git remote add origin \"nazwa\"",
        "a2": "git remote add \"nazwa\"",
        "a3": "git add remote \"nazwa\"",
        "a4": "git add remote origin \"nazwa\"",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W git odnośnik do zdalnego repozytorium usuwamy poleceniem?",
        "url":"",
        "a1": "git remote remove origin",
        "a2": "git remote remove",
        "a3": "git remove remote",
        "a4": "git remove remote origin",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wypychanie zmian do zdalnego repozytorium z poziomu konsoli GIT odbywa się poleceniem?",
        "url":"",
        "a1": "git push origin",
        "a2": "git push",
        "a3": "git pull origin",
        "a4": "git remote push",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Cofanie zmian wprowadzonych w konretnym commicie odbywa się poleceniem?",
        "url":"",
        "a1": "git revert",
        "a2": "git restore",
        "a3": "git reset",
        "a4": "git rewind",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Portal github to to samo co GIT?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Pojęcie \"fork\" oznacza w terminologi GIT połączenie dwóch gałęzi?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Aby połączyć gałęzie w GIT należy użyć polecenia?",
        "url":"",
        "a1": "git merge \"nazwa\"",
        "a2": "git rebase \"nazwa\"",
        "a3": "git checkout \"nazwa\"",
        "a4": "git load \"nazwa\"",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    //kompilacja i interpretacja
    {
        "question":"Kompilacja to część funkcjonalnosci interpretera?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Parsowanie jest częścią zarówno kompilatora jak i interpretera?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Język PHP jest językiem interpretowanym?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Język Python jest językiem interpretowanym?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Język C jest językiem kompilowanym?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    //testy jednostkowe
    {
        "question":"Testy jednostkowe to?",
        "url":"",
        "a1": "wszystkie wymienione",
        "a2": "kod testujący inny kod",
        "a3": "kod werfikujący wynik działania metod",
        "a4": "kod wywołujący testowany kod w kontrolowanych warunkach",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Testy jednostkowe powinny być?",
        "url":"",
        "a1": "wszystkie wymienione",
        "a2": "szybkie",
        "a3": "niezależne od siebie",
        "a4": "powtarzalne",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Testy jednostkowe składają się z trzech głównych faz w kolejności?",
        "url":"",
        "a1": "arrange/act/assert",
        "a2": "assert/arrange/act",
        "a3": "assert/act/arrange",
        "a4": "act/assery/arrange",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Frameworkiem do pisania testów jednostkowych w języku JAVA jest?",
        "url":"",
        "a1": "JUnit",
        "a2": "NUnit",
        "a3": "XUnit",
        "a4": "Google Tests",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Modułem umożliwiającym testy w jezyku Javascript i środowisku NodeJS jest?",
        "url":"",
        "a1": "jest",
        "a2": "jtest",
        "a3": "ntest",
        "a4": "google tests",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Błędnym stwierdzeniem o klasie Assert w języku C# jest to, że?",
        "url":"",
        "a1": "Refaktoryzuje kod",
        "a2": "Sprawdza prawdziwość danego wyrażenia",
        "a3": "Wykorzystuje się ją przy testowaniu",
        "a4": "Udostępnia metody statyczne",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"TDD (Test Driven Development) to?",
        "url":"https://programonaut.b-cdn.net/wp-content/uploads/2021/08/TDD.png",
        "a1": "Metodologia pisania oprogramowania gdzie testy pisze się przed kodem testowanym",
        "a2": "Wzorzec projektowy",
        "a3": "Metodologia pisania oprogramowania gdzie testy wykorzystuje się do dokumentowania kodu",
        "a4": "Żadne z wymienionych",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W TDD najpierw piszemy testy a później testowany kod?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"\"Mock\" to pojęcie określające?",
        "url":"",
        "a1": "atrapę obiektu",
        "a2": "pewien rodzaj asercji",
        "a3": "tag oznaczający metodę jako test",
        "a4": "żaden z wymienionych",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Nie powinno się testować automatycznie kontrolerów MVC?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Każda metoda klasy powinna być przetestowana automatycznie?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    //wzorce i zasady programowania
    {
        "question":"Skrót zasady, mówiącej o tym by nie powtarzać się w kodzie to?",
        "url":"",
        "a1": "DRY",
        "a2": "KISS",
        "a3": "YAGNI",
        "a4": "SOLID",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Skrót zasady, mówiącej o tym by utrzymywać kod w jak najprosztszej formie to?",
        "url":"",
        "a1": "KISS",
        "a2": "DRY",
        "a3": "YAGNI",
        "a4": "SOLID",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Skrót zasady, mówiącej o tym by nie zostawiać w kodzie nieużywanych fragmentów implementacji?",
        "url":"",
        "a1": "YAGNI",
        "a2": "KISS",
        "a3": "DRY",
        "a4": "SOLID",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Zbiór pięciu zasad dobrego kodu obiektowego to?",
        "url":"",
        "a1": "SOLID",
        "a2": "TCP/IP",
        "a3": "YAGNI",
        "a4": "TTDSE",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Pierwsza zasada SOLID mówi o tym by?",
        "url":"",
        "a1": "każda metoda/klasa zajmowała się jedną konretną rzeczą",
        "a2": "referencje miały typ bazowy a nie typ pochodny",
        "a3": "każda klasa/metoda była otwarta na rozszerzenie a zamknięta na modyfikację",
        "a4": "interfejsy polimorficzne utrzymywać jak najmniejsze",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Druga zasada SOLID mówi o tym by?",
        "url":"",
        "a1": "każda klasa/metoda była otwarta na rozszerzenie a zamknięta na modyfikację",
        "a2": "każda metoda/klasa zajmowała się jedną konretną rzeczą",
        "a3": "referencje miały typ bazowy a nie typ pochodny",
        "a4": "interfejsy polimorficzne utrzymywać jak najmniejsze",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Piąta zasada SOLID mówi o tym by?",
        "url":"",
        "a1": "interfejsy polimorficzne utrzymywać jak najmniejsze",
        "a2": "każda klasa/metoda była otwarta na rozszerzenie a zamknięta na modyfikację",
        "a3": "każda metoda/klasa zajmowała się jedną konretną rzeczą",
        "a4": "referencje miały typ bazowy a nie typ pochodny",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Piąta zasada SOLID nazywana jest?",
        "url":"",
        "a1": "dependency inversion",
        "a2": "dependency injection",
        "a3": "dependency infection",
        "a4": "dependency isolation",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Zasada SOLID mówiąca, że zamiast jednej klasy zawierającej 2000 linii kodu lepsze jest 20 małych klas?",
        "url":"",
        "a1": "S",
        "a2": "L",
        "a3": "I",
        "a4": "O",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wzorcem kreacyjnym jest?",
        "url":"",
        "a1": "singleton",
        "a2": "kompozyt",
        "a3": "adapter",
        "a4": "obserwator",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wzorcem kreacyjnym jest?",
        "url":"",
        "a1": "fabryka abstrakcyjna",
        "a2": "kompozyt",
        "a3": "adapter",
        "a4": "obserwator",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wzorcem strukturalnym nie jest?",
        "url":"",
        "a1": "fabryka",
        "a2": "dekorator",
        "a3": "fasada",
        "a4": "kompozyt",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wzorcem strukturalnym nie jest?",
        "url":"",
        "a1": "budowniczy",
        "a2": "dekorator",
        "a3": "fasada",
        "a4": "kompozyt",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wzorcem projektowym, który agreguje funkcjonalności mniejszych klas w jedną jest?",
        "url":"",
        "a1": "fasada",
        "a2": "dekorator",
        "a3": "odwiedzający",
        "a4": "iterator",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Wzorcem projektowym służącym do adaptacji nowego api w stare jest?",
        "url":"",
        "a1": "adapter",
        "a2": "dekorator",
        "a3": "fasada",
        "a4": "singleton",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"We wzorcu MVC na akcje użytkownika reaguje?",
        "url":"",
        "a1": "kontroler",
        "a2": "widok",
        "a3": "model",
        "a4": "UI",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Pochodną wzorca MVC jest?",
        "url":"",
        "a1": "wszystkie wymienione",
        "a2": "MVVM Model View ViewModel",
        "a3": "HMVC Hierarchical Model View Controller",
        "a4": "MVP Model View Presenter",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Skrót ORM rozwija się?",
        "url":"",
        "a1": "Object Relational Mapping",
        "a2": "Object Reconstruct Mapping",
        "a3": "Object Relational Model",
        "a4": "Object Relational Macro",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Zasada \"dependency injection\" mówi, żeby zależności wstrzykiwać z zewnątrz przez?",
        "url":"",
        "a1": "wszystkie pozostałe",
        "a2": "konstruktor",
        "a3": "setter",
        "a4": "pole",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Na obrazku klasa Repository jest dla klasy Server?",
        "url":"https://assets.alexandria.raywenderlich.com/books/512d0f29088c76daad57b9c3569733021775483b2ca319fa56c99a07dd996d4e/images/68a83fc039147e07a42c5bb8eab3dbd95e8958f22088184e133a06e2c3647b0c/original.png",
        "a1": "Zależnością miękką",
        "a2": "Zależnością twardą",
        "a3": "Klasą pochodną",
        "a4": "żadne z wymienionych",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Na obrazku klasa RepositoryMock jest dla klasy Repository?",
        "url":"https://assets.alexandria.raywenderlich.com/books/512d0f29088c76daad57b9c3569733021775483b2ca319fa56c99a07dd996d4e/images/68a83fc039147e07a42c5bb8eab3dbd95e8958f22088184e133a06e2c3647b0c/original.png",
        "a1": "Klasą pochodną",
        "a2": "Zależnością miękką",
        "a3": "Zależnością twardą",
        "a4": "żadne z wymienionych",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Typ ButtonServer może zostać określony mianem typu abstrakcyjnego?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Kompozycja jest bardziej moblina i elastyczna niż dziedziczenie?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"UML to skrót od?",
        "url":"",
        "a1": "Unified Modeling Language",
        "a2": "Unified Mapping Language",
        "a3": "Universal Modeling Language",
        "a4": "Universal Mapping Language",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Diagram UML przedstawiający relacje między klasami to",
        "url":"",
        "a1": "Diagram klas",
        "a2": "Diagram ERD",
        "a3": "Diagram sekwencji",
        "a4": "Diagram aktywności",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Diagram UML przedstawiający relacje między tabelami bazy danych to",
        "url":"",
        "a1": "Diagram ERD",
        "a2": "Diagram klas",
        "a3": "Diagram sekwencji",
        "a4": "Diagram aktywności",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Diagram UML przedstawiający przepływ sterowania w klasach to",
        "url":"",
        "a1": "Diagram sekwencji",
        "a2": "Diagram ERD",
        "a3": "Diagram klas",
        "a4": "Diagram aktywności",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Diagram UML przedstawiający funkcjonalności projektu to",
        "url":"",
        "a1": "Diagram przypadków użycia",
        "a2": "Diagram ERD",
        "a3": "Diagram klas",
        "a4": "Diagram aktywności",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Diagram UML na ilustracji to?",
        "url":"https://d2slcw3kip6qmk.cloudfront.net/marketing/discovery/UML_use_case_diagram.png",
        "a1": "Diagram przypadków użycia",
        "a2": "Diagram ERD",
        "a3": "Diagram klas",
        "a4": "Diagram aktywności",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Diagram UML na ilustracji to?",
        "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0O_RKRTsVweHZ4hfGDUJpJibDzz4mp4NpngofNZJWpgBXKoxJdYEeeK03SOnxn67XqNc&usqp=CAU",
        "a1": "Diagram sekwencji",
        "a2": "Diagram ERD",
        "a3": "Diagram klas",
        "a4": "Diagram aktywności",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Języki, w których programista definuje co chce uzyskać to języki?",
        "url":"",
        "a1": "deklaratywne",
        "a2": "imperatywne",
        "a3": "obiektowe",
        "a4": "proceduralne",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Języki, w których programista definuje jak chce uzyskać wynik to języki?",
        "url":"",
        "a1": "imperatywne",
        "a2": "deklaratywne",
        "a3": "obiektowe",
        "a4": "proceduralne",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W diagramie klas UML pola protected oznacza się symbolem?",
        "url":"",
        "a1": "#",
        "a2": "-",
        "a3": "+",
        "a4": "@",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W diagramie klas UML pola private oznacza się symbolem?",
        "url":"",
        "a1": "-",
        "a2": "#",
        "a3": "+",
        "a4": "@",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W diagramie klas UML pola public oznacza się symbolem?",
        "url":"",
        "a1": "+",
        "a2": "#",
        "a3": "-",
        "a4": "@",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    //http rest ect
]

export default questions;