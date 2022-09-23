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
        "question":"Czy w funkcji zwracającej \"void\" można użyć słowa kluczowego return?",
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
        "question":"Instrukcja C++ \"cout\" znajduje się w namespace?",
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
        "question":"Dynamicznie linkowana biblioteka ma rozszerzenie?",
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
        "question":"Kontenerem STL w przypadku, którego dane dodajemy na koniec a pobieramy z frontu?",
        "url":"",
        "a1": "std::queue",
        "a2": "std::list",
        "a3": "std::stack",
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
        "question":"Pliki nagłówkowe pochodzące z języka C w mogą być używane w C++?",
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
    {
        "question":"Każda rodzina procesorów ma własny zestaw instrukcji?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Komputer 32 bitowy może zaadresować tylko 4GB pamięci?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Pętla \"while(file->EOF){}\" będzie wykonywać się do momentu?",
        "url":"",
        "a1": "aż wskaźnik pozycji w pliku wskaże jego koniec",
        "a2": "aż wskaźnik pozycji w pliku wskaże jego początek",
        "a3": "aż wskaźnik pozycji w pliku wskaże koniec aktualnej linii",
        "a4": "żadne z wymienionych",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W C++ wartość liczbową można wypisać w systemie szesnastkowym za pomocą \"cout\":",
        "url":"",
        "a1": "std::cout << std::dec << n << '\\n';",
        "a2": "std::cout << std::hex << n << '\\n';",
        "a3": "std::cout << std::oct << n << '\\n';",
        "a4": "std::cout << std::bin << n << '\\n';",
        "tag": "NIEOFICJALNE",
        "type": "2A"
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
        "question":"Liczba \"char a = -1\" to w systemie binarnym?",
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
    {
        "question":"Jeżeli najstarszy bit liczby \"unsigned\" jest ustawiony na 1 to liczba jest?",
        "url":"",
        "a1": "bit ten wpływa tylko na wartość liczbową",
        "a2": "dodatnia",
        "a3": "ujemna",
        "a4": "parzysta",
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
        "question":"Co oznacza bloczek na obrazku?",
        "url":"https://quizizz.com/_media/questions/L2FwcGhvc3RpbmdfcHJvZC9ibG9icy9BRW5CMlVveFljTnQ2Qjl0UFNfYVFHYnBFNzIwQ2RqSTctNzFJX2M3S0hPT0tLTHBzR2dfN1E5SnJyc1R4djdhZXpfTWMtZktNTGpmZ29NQlJHV1ppZHB4UDF0b0ZBb2hMS1FTSWlaMVI1OW5ERnhVYzlLRmpLYy5pY0EyN1Y5amg2dDVNb3k5_900_900",
        "a1": "Warunek logiczny",
        "a2": "Wprowadzenie danych",
        "a3": "Łącznik",
        "a4": "Dołączenie podprogramu",
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
        "question":"W C# typy referencyjne są usuwane z pamięci przez garbage collector?",
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
        "question":"W C# da się napisać klasę w klasie?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
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
        "question":"Każda zmienna w C# przekazywana jest przez wartość do funkcji itp?",
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
        "type": "4A"
    },
    {
        "question":"W C# delegat \"Action<string, int, int>\" zwraca?",
        "url":"",
        "a1": "nic",
        "a2": "bool",
        "a3": "int",
        "a4": "string",
        "tag": "NIEOFICJALNE",
        "type": "4A"
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
        "question":"Typem danych wykorzystywanym do precyzyjnego przechowywania liczb ułamkowych w C# jest?",
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
        "question":"Gdy \"a = null\" instrukcja \"Console.WriteLine(a is { });\" wypisze?",
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
        "a2": "Androida oraz Windows Phone",
        "a3": "iOS oraz Windows Phone",
        "a4": "Tylko Windows Phone",
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
    //WPF i XAMARIN
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
        "question":"Akronim FIRST oznacza?",
        "url":"",
        "a1": "Fast/Isolated/Repeatable/Self-validating/Timely",
        "a2": "Fast/Isolated/Recursive/Self-validating/Timely",
        "a3": "Fast/Iterable/Repeatable/Self-validating/Timely",
        "a4": "Fast/Isolated/Repeatable/Self-validating/Throwable",
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
        "question":"Frameworkiem do pisania testów jednostkowych w języku C# jest?",
        "url":"",
        "a1": "XUnit",
        "a2": "PyTest",
        "a3": "JUnit",
        "a4": "Google Tests",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Modułem umożliwiającym testy w jezyku JavaScript i środowisku NodeJS jest?",
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
    {
        "question":"Da się przetestować bezpośrednio metody prywatne?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
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
        "a2": "FIRST",
        "a3": "YAGNI",
        "a4": "CQRS",
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
        "question":"Skrót SPA oznacza?",
        "url":"",
        "a1": "Single-Page Application",
        "a2": "Simple-Page Application",
        "a3": "Super-Page Application",
        "a4": "Super-Pure Application",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Strona typu SPA bazuje na?",
        "url":"",
        "a1": "przeładowywaniu pojedynczych elementów strony",
        "a2": "zakładkach i podstronach",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
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
        "question":"Przykładem biblioteki typu ORM nie jest?",
        "url":"",
        "a1": "NSubstitude",
        "a2": "Entity Framework",
        "a3": "NHiberante",
        "a4": "PDO",
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
        "question":"Typ Repository może zostać określony mianem typu abstrakcyjnego?",
        "url":"https://assets.alexandria.raywenderlich.com/books/512d0f29088c76daad57b9c3569733021775483b2ca319fa56c99a07dd996d4e/images/68a83fc039147e07a42c5bb8eab3dbd95e8958f22088184e133a06e2c3647b0c/original.png",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Kompozycja jest bardziej mobilna i elastyczna niż dziedziczenie?",
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
    //http rest ect
    {
        "question":"Protokoły HTTP/HTTPS są protokołami warstwy _ ISO/OSI?",
        "url":"",
        "a1": "7",
        "a2": "6",
        "a3": "5",
        "a4": "2",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Skrót HTTP rozwija się?",
        "url":"",
        "a1": "Hypertext Transfer Protocol",
        "a2": "Hypermarkup Transfer Protocol",
        "a3": "HTML Transfer Protocol",
        "a4": "Hyper Transfer Protocol",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Protokół HTTP pracuje na porcie?",
        "url":"",
        "a1": "80",
        "a2": "60",
        "a3": "21",
        "a4": "100",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Protokoły TCP oraz UDP są protokołami warstwy _ ISO/OSI?",
        "url":"",
        "a1": "4",
        "a2": "6",
        "a3": "5",
        "a4": "2",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Protokoły IPv4 oraz IPv6 są protokołami warstwy _ ISO/OSI?",
        "url":"",
        "a1": "3",
        "a2": "6",
        "a3": "5",
        "a4": "2",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Dane przekazywane do protokoły HTTP/HTTPS są w formacie?",
        "url":"",
        "a1": "wszystkie wymienione",
        "a2": "JSON",
        "a3": "XML",
        "a4": "zwykłego tekstu",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Dane otrzymywane poprzez protokoły HTTP/HTTPS są w formacie?",
        "url":"",
        "a1": "wszystkie wymienione",
        "a2": "JSON",
        "a3": "XML",
        "a4": "zwykłego tekstu",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Metodą protokołu HTTP/HTTPS nie jest?",
        "url":"",
        "a1": "REMOVE",
        "a2": "DELETE",
        "a3": "POST",
        "a4": "PATCH",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Metodą protokołu HTTP/HTTPS nie jest?",
        "url":"",
        "a1": "MOVE",
        "a2": "DELETE",
        "a3": "POST",
        "a4": "GET",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Metodą protokołu HTTP/HTTPS odpowiedzialną za pobieranie danych jest?",
        "url":"",
        "a1": "GET",
        "a2": "PUT",
        "a3": "POST",
        "a4": "HEAD",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Metodą protokołu HTTP/HTTPS odpowiedzialną za wysyłanie danych jest?",
        "url":"",
        "a1": "POST",
        "a2": "PUT",
        "a3": "GET",
        "a4": "HEAD",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Metodą protokołu HTTP/HTTPS odpowiedzialną za aktualizowanie danych jest?",
        "url":"",
        "a1": "PUT",
        "a2": "POST",
        "a3": "GET",
        "a4": "HEAD",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Metodą protokołu HTTP/HTTPS odpowiedzialną za usuwanie danych jest?",
        "url":"",
        "a1": "DELETE",
        "a2": "REMOVE",
        "a3": "POST",
        "a4": "PATCH",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Kody sukcesu zwracane przez HTTP/HTTPS znajdują się w zakresie?",
        "url":"",
        "a1": "200-299",
        "a2": "100-199",
        "a3": "300-399",
        "a4": "500-599",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Kody oznaczające błąd serwera zwracane przez HTTP/HTTPS znajdują się w zakresie?",
        "url":"",
        "a1": "500-599",
        "a2": "100-199",
        "a3": "300-399",
        "a4": "200-299",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Kody zwracane przez HTTP/HTTPS znajdują się w zakresie?",
        "url":"",
        "a1": "100-599",
        "a2": "0-599",
        "a3": "200-599",
        "a4": "100-699",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Kod sukcesu HTTP/HTTPS to?",
        "url":"",
        "a1": "200",
        "a2": "300",
        "a3": "400",
        "a4": "500",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Kod \"nie znaleziono\" HTTP/HTTPS to?",
        "url":"",
        "a1": "404",
        "a2": "202",
        "a3": "400",
        "a4": "102",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Kod \"Internal Server Error\" HTTP/HTTPS to?",
        "url":"",
        "a1": "500",
        "a2": "202",
        "a3": "400",
        "a4": "102",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Kod \"Unauthorized\" HTTP/HTTPS to?",
        "url":"",
        "a1": "401",
        "a2": "402",
        "a3": "400",
        "a4": "403",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"JWT to skrót od?",
        "url":"",
        "a1": "JSON Web Token",
        "a2": "JavaScript Web Token",
        "a3": "Java Web Token",
        "a4": "JavaScript Web Type",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"API typu REST wymienia dane w formacie zwanym?",
        "url":"",
        "a1": "JSON",
        "a2": "XML",
        "a3": "HTML",
        "a4": "JWT",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Poprzednikiem API typu REST było API typu?",
        "url":"",
        "a1": "SOAP",
        "a2": "WinAPI",
        "a3": "ARP",
        "a4": "MAC",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"API typu SOAP bazuje na technologii?",
        "url":"",
        "a1": "XML",
        "a2": "JSON",
        "a3": "JWT",
        "a4": "HTML",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"REST to skrót od?",
        "url":"",
        "a1": "Representational State Transfer",
        "a2": "Representational Schema Transfer",
        "a3": "Representational State Transmision",
        "a4": "Representational Schema Transmision",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Protokołem bezpołączeniowym warstwy 4 ISO OSI jest?",
        "url":"",
        "a1": "UDP",
        "a2": "TCP",
        "a3": "UPC",
        "a4": "TPC",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Protokołem połączeniowym warstwy 4 ISO OSI jest?",
        "url":"",
        "a1": "TCP",
        "a2": "UDP",
        "a3": "UPC",
        "a4": "TPC",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Programem do testowania REST API jest?",
        "url":"",
        "a1": "Postman",
        "a2": "TeamViewer",
        "a3": "Putty",
        "a4": "HxDView",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Programem do testowania REST API jest?",
        "url":"",
        "a1": "curl",
        "a2": "netstat",
        "a3": "nslookup",
        "a4": "tracert",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Protokół HTTPS to HTTP stosujący szyfrowanie?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    //technologie webowe
    {
        "question":"Technologią/Frameworkiem wykorzystywanym tylko w programowaniu webowym jest?",
        "url":"",
        "a1": "ASP.NET",
        "a2": "React",
        "a3": "Flutter",
        "a4": "MAUI",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Technologia ASP.NET bazuje na języku?",
        "url":"",
        "a1": "C#",
        "a2": "C++",
        "a3": "C",
        "a4": "Java",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Framework Spring bazuje na języku?",
        "url":"",
        "a1": "JAVA",
        "a2": "C#",
        "a3": "C++",
        "a4": "Python",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Framework Django bazuje na języku?",
        "url":"",
        "a1": "Python",
        "a2": "C#",
        "a3": "C++",
        "a4": "Java",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"React to framework bazujący na języku JavaScript/TypeScript?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Język PHP do pracy potrzebuje serwera?",
        "url":"",
        "a1": "Apache",
        "a2": "IIS",
        "a3": "Mysql",
        "a4": ".Net",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Języka JavaScript można używać jako języka back-endowego dzięki?",
        "url":"",
        "a1": "NodeJS",
        "a2": ".NET CORE",
        "a3": "JIT",
        "a4": "Web Assembly",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Bazą danych nierelacyjną jest?",
        "url":"",
        "a1": "MongoDB",
        "a2": "MS-SQL",
        "a3": "PostgreSQL",
        "a4": "MySQL",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Pojęcie \"crawling\" w programowaniu to?",
        "url":"",
        "a1": "przeszukiwanie portali w poszukiwaniu treści",
        "a2": "szukanie luk zabezpieczeń",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Wirus, który podszywa się pod legalny i bezpieczny program to?",
        "url":"",
        "a1": "Koń trojański",
        "a2": "Robak",
        "a3": "Ransomware",
        "a4": "Spyware",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Atakiem na strony internetowe polegającym na ociążeniu serwera dużą ilością zapytań jest",
        "url":"",
        "a1": "DDoS",
        "a2": "XSS",
        "a3": "Hijacking",
        "a4": "Phishing",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Podatność stron internetowych polegająca na wstrzykiwaniu własnego kodu do strony to?",
        "url":"",
        "a1": "XSS",
        "a2": "SQL Injection",
        "a3": "Hijacking",
        "a4": "Session poisoning",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Dodanie zapytania SQL do istniejącego już zapytania nazywane jest?",
        "url":"",
        "a1": "SQL Injection",
        "a2": "XSS",
        "a3": "Hijacking",
        "a4": "Session poisoning",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Atakiem polegającym na zmuszeniu przeglądarki ofiary do wykonania pewnej akcji jest?",
        "url":"",
        "a1": "CSRF",
        "a2": "XSS",
        "a3": "CQRS",
        "a4": "ASMAX",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Językiem typowo server-side jest?",
        "url":"",
        "a1": "PHP",
        "a2": "JavaScript",
        "a3": "C#",
        "a4": "CSS",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    //javascript
    {
        "question":"W JS wynikiem operacji \"console.log(\"This is a string.\" instanceof String);\" będzie?",
        "url":"",
        "a1": "false",
        "a2": "true",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W JS wynikiem operacji \"console.log(0.1 + 0.2 == 0.3);\" będzie?",
        "url":"",
        "a1": "false",
        "a2": "true",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W JS wynikiem operacji \"console.log(1 +  \"2\" + \"2\");\" będzie?",
        "url":"",
        "a1": "122",
        "a2": "32",
        "a3": "NaN",
        "a4": "NaN2",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W JS wynikiem operacji \"console.log(typeof typeof 1);\" będzie?",
        "url":"",
        "a1": "string",
        "a2": "number",
        "a3": "false",
        "a4": "true",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W JS wynikiem operacji \"console.log(018 - 015);\" będzie?",
        "url":"",
        "a1": "5",
        "a2": "3",
        "a3": "8",
        "a4": "NaN",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W JS wynikiem operacji \"console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());\" będzie?",
        "url":"",
        "a1": "banana",
        "a2": "baaa",
        "a3": "ananas",
        "a4": "bananaa",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W JS wynikiem operacji \"console.log(3 > 2 > 1);\" będzie?",
        "url":"",
        "a1": "false",
        "a2": "true",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W JS wynikiem operacji \"['1', '7', '11'].map(parseInt)\" będzie?",
        "url":"",
        "a1": "[1, NaN, 3]",
        "a2": "[1, 7, 11]",
        "a3": "[0, 6, 10]",
        "a4": "[NaN, NaN, NaN]",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"JavaScript wchodzi w standard ECMAScript",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"TypeScript jest nadzbiorem JavaScript",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"JavaScript pozwala przypisać funkcję do zmiennej?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Czy funkcja eval() jest bezpieczna?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W JS \"NaN\" jest typu?",
        "url":"",
        "a1": "number",
        "a2": "null",
        "a3": "NaN",
        "a4": "undefined",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W JS typami prymitywnymi są",
        "url":"",
        "a1": "wszystkie wymienione",
        "a2": "String",
        "a3": "Number",
        "a4": "Boolean",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W JS wartość null oznacza",
        "url":"",
        "a1": "brak wartości",
        "a2": "wartość nieznaną",
        "a3": "pusty string",
        "a4": "0",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W JS zmienna zadeklarowana jako \"var\" jest przypisana do przestrzeni funkcji",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W JS zmienna zadeklarowana jako \"let\" jest przypisana do przestrzeni funkcji",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Kod języka JavaScript zawsze wykonuje się po stronie klienta w przeglądarce",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"W JS operatory \"===\" oraz \"==\" działają tak samo?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Która linia kodu jest niepoprawna z punktu widzenia JavaScript?",
        "url":"",
        "a1": "var obj = {name = \"Sebastian\" };",
        "a2": "var obj = {name: \"Sebastian\" };",
        "a3": "var obj = new Object();",
        "a4": "var obj = {};",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    //REACT
    {
        "question":"Polecenie npm, które uruchamia serwer testowy oraz aplikację to",
        "url":"",
        "a1": "npm start",
        "a2": "npm dev",
        "a3": "npm serve",
        "a4": "npm build",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie npm, które tworzy projekt React jest",
        "url":"",
        "a1": "npx create-react-app myReactApp",
        "a2": "npm create-react-app myReactApp",
        "a3": "npx create-react-app",
        "a4": "pm create-react-app",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Domyślnym portem używanym przez React do otwarcia serwera jest?",
        "url":"",
        "a1": "3000",
        "a2": "80",
        "a3": "8080",
        "a4": "5000",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W React \"props\" służy do?",
        "url":"",
        "a1": "przekazwywania parametrów do komponentów potomnych",
        "a2": "ustawiania stanu komponentów potomnych",
        "a3": "ustawiania stanu rodzica przez komponent potomny",
        "a4": "wszystkie pozostałe",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Nazwy komponentów React, muszą nazywać się z dużych liter?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    //bazy danych
    {
        "question":"Krotka w bazach relacyjnych to",
        "url":"",
        "a1": "wiersz tabeli",
        "a2": "kolumna tabeli",
        "a3": "komórka tabeli",
        "a4": "cała tabela",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Atrybut w relacyjnych bazach danych to",
        "url":"",
        "a1": "kolumna tabeli",
        "a2": "wiersz tabeli",
        "a3": "komórka tabeli",
        "a4": "cała tabela",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Kolumna/Kolumny jednoznacznie identyfikujące rekord w tabeli relacyjnej bazy danych to",
        "url":"",
        "a1": "klucz podstawowy",
        "a2": "klucz obcy",
        "a3": "klucz naturalny",
        "a4": "klucz sztuczny",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Kolumna wykorzystywana do tworzenia relacji w relacyjnych bazach danych to",
        "url":"",
        "a1": "klucz obcy",
        "a2": "klucz podstawowy",
        "a3": "klucz naturalny",
        "a4": "klucz sztuczny",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Klucz naturalny w bazach relacyjnych to",
        "url":"",
        "a1": "kolumna, która jest naturalnym atrybutem przechowywanej encji",
        "a2": "kolumna, która została dodana by jednoznacznie identyfikować rekord",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Relacja wiele do wielu wymaga",
        "url":"",
        "a1": "trzeciej tabeli łączącej",
        "a2": "dwóch kluczy obcych",
        "a3": "dwóch kluczy podstawowych",
        "a4": "dwóch kluczy sztucznych",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"O tym, że każda komórka tabeli w bazie relacyjnej musi przchowywać jedną wartość mówi",
        "url":"",
        "a1": "Pierwsza postać normalna",
        "a2": "Druga postać normalna",
        "a3": "Trzecia postać normalna",
        "a4": "Czwarta postać normalna",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"O tym, że każda kolumna tabeli musi zależeć od klucza głównego mówi",
        "url":"",
        "a1": "Druga postać normalna",
        "a2": "Pierwsza postać normalna",
        "a3": "Trzecia postać normalna",
        "a4": "Czwarta postać normalna",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"O tym, że każda kolumna może być zależna tylko od klucza głównego mówi",
        "url":"",
        "a1": "Trzecia postać normalna",
        "a2": "Pierwsza postać normalna",
        "a3": "Druga postać normalna",
        "a4": "Czwarta postać normalna",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Krotka w bazach relacyjnych to",
        "url":"",
        "a1": "wiersz tabeli",
        "a2": "kolumna tabeli",
        "a3": "komórka tabeli",
        "a4": "cała tabela",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Każda relacja w relacyjnych bazach danych wymaga klucza obcego?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Filtorowanie w językach SQL odywa się za pomocą klauzuli",
        "url":"",
        "a1": "where",
        "a2": "like",
        "a3": "filter",
        "a4": "if",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Funkcją agregującą SQL nie jest?",
        "url":"",
        "a1": "distinct()",
        "a2": "sum()",
        "a3": "avg()",
        "a4": "max()",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Typy varchar oraz char w bazach danych są równoznaczne?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Typy text oraz varchar w bazach danych są równoznaczne?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Procedura i funkcja to to samo?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Jeżeli usuniemy z bazy rekord to jego klucz główny (ID) może zostać użyty ponownie?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Bazy danych pozwalają automatyzować generowanie klucza głównego za pomocą...",
        "url":"",
        "a1": "sekwencji",
        "a2": "procedur",
        "a3": "funkcji",
        "a4": "wyzwalaczy",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Tak zwane aplikacje CRUDowe to",
        "url":"",
        "a1": "aplikacje skupiające się na dodawaniu/czytaniu/aktualizowaniu/usuwaniu danych z bazy",
        "a2": "aplikacje oparte na REST API",
        "a3": "aplikacje typowo frontendowe",
        "a4": "aplikacje tworzące strukture bazy danych",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Mechanizem pozwalającym szybko modyfikować bazę danych i migrować dane między jej wersjami w czasie dewelopmentu to",
        "url":"",
        "a1": "migracje",
        "a2": "transakcje",
        "a3": "encje",
        "a4": "sekwencje",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Zestaw czynności na bazie danych, które stanowią pewną nierozerwalną całość to",
        "url":"",
        "a1": "transakcje",
        "a2": "migracje",
        "a3": "procedury",
        "a4": "funkcje",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Zapytanie typu SELECT zawsze musi mieć klauzule FROM?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"ENUM oraz SET jako typy kolumn są równoznaczne?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Klauzula SQL służąca do modyfikowania struktury tabeli to?",
        "url":"",
        "a1": "alter",
        "a2": "update",
        "a3": "modify",
        "a4": "change",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Klauzula SQL służąca do usuwania tabel to?",
        "url":"",
        "a1": "drop",
        "a2": "delete",
        "a3": "remove",
        "a4": "erase",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Klauzula SQL służąca do modyfikowania struktury tabeli to?",
        "url":"",
        "a1": "alter",
        "a2": "update",
        "a3": "modify",
        "a4": "change",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Klauzula \"limit\" w SQL przyjmuje do _ parametrów?",
        "url":"",
        "a1": "2",
        "a2": "3",
        "a3": "1",
        "a4": "4",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"W SQL sortowanie malejące oznaczamy?",
        "url":"",
        "a1": "ASC",
        "a2": "DESC",
        "a3": "UP",
        "a4": "DOWN",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Jeżeli przechowujemy w tablii cenę brutto, netto i tara jednocześnie to łamiemy?",
        "url":"",
        "a1": "Trzecią postać normalną",
        "a2": "Drugą postać normalną",
        "a3": "Pierwszą postać normalną",
        "a4": "Wszystko jest w porządku",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Najbardziej prawdopodobna relacja między tabelami Osoba oraz Adres to relacja?",
        "url":"",
        "a1": "wiele do wielu",
        "a2": "jeden do wielu",
        "a3": "wiele do jednego",
        "a4": "jeden do jeden",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Najbardziej prawdopodobna relacja między tabelami Student oraz ContactData to relacja?",
        "url":"",
        "a1": "jeden do jeden",
        "a2": "jeden do wielu",
        "a3": "wiele do jednego",
        "a4": "wiele do wielu",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Aby w SQL uzyskać wyniki gdzie wartość kolumny n na drugim miejscu ma literkę \"r\" trzeba użyć klauzuli?",
        "url":"",
        "a1": "like '_r%'",
        "a2": "like '?r%'",
        "a3": "like '*r%'",
        "a4": "like '+r%'",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operator \"OR\" w SQL zwraca prawdę jeżeli?",
        "url":"",
        "a1": "minimum jedna ze stron warunku jest prawdziwa",
        "a2": "obie strony warunku są prawdziwe",
        "a3": "żadan ze stron warunku nie jest prawdziwa",
        "a4": "żadne z wymienionych",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    //php
    {
        "question":"Rozszerzenie plików PHP to?",
        "url":"",
        "a1": "*.php",
        "a2": "*.p",
        "a3": "*.pp",
        "a4": "*.html",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"\"index.php\" ma większy priorytet niż \"index.html\"?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"\"\" oraz '' w PHP działają tak samo?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Bezpieczniejszą metodą przesyłania fomularzy jest metoda?",
        "url":"",
        "a1": "POST",
        "a2": "GET",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Instrukcja, która w PHP posłuży do napisania programu typu HelloWorld to?",
        "url":"",
        "a1": "echo",
        "a2": "print",
        "a3": "write",
        "a4": "put",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Która z poniższych stałych nie jest dostępna w PHP?",
        "url":"",
        "a1": "__DATE__",
        "a2": "__FILE__",
        "a3": "__LINE__",
        "a4": "__CLASS__",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operatorem konkatenacjii w PHP jest?",
        "url":"",
        "a1": ".",
        "a2": "+",
        "a3": "^",
        "a4": "|",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Operatorem potęgowania w PHP jest?",
        "url":"",
        "a1": "**",
        "a2": "*",
        "a3": "^",
        "a4": "!",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    //python
    {
        "question":"Rozszerzenie plików źródłowych języka Python to?",
        "url":"",
        "a1": "*.py",
        "a2": "*.p",
        "a3": "*.pp",
        "a4": "*.ph",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Python bazuje na języku?",
        "url":"",
        "a1": "C",
        "a2": "C++",
        "a3": "C#",
        "a4": "F#",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Odpowiednikiem słowa kluczowgo \"this\" w Pythonie jest?",
        "url":"",
        "a1": "self",
        "a2": "me",
        "a3": "base",
        "a4": "ptr",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Kolekcja o nazwie \"tuple\" w Pythonie jest mutowalna?",
        "url":"",
        "a1": "NIE",
        "a2": "TAK",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Kolekcja o nazwie \"list\" w Pythonie jest mutowalna?",
        "url":"",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Konstruktor klasy w języku Python ma nazwę?",
        "url":"",
        "a1": "__init__",
        "a2": "__create__",
        "a3": "__self__",
        "a4": "taką jak nazwa klasy",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    //windows/linux cmd
    {
        "question":"Polecenie wiersza poleceń Windows służące do wyświetlania zawartości katalogów to?",
        "url":"",
        "a1": "dir",
        "a2": "cd",
        "a3": "ls",
        "a4": "pwd",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie wiersza poleceń Linux służące do wyświetlania zawartości katalogów to?",
        "url":"",
        "a1": "ls",
        "a2": "cd",
        "a3": "dir",
        "a4": "pwd",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie wiersza poleceń Windows służące do przełączania katalogów to?",
        "url":"",
        "a1": "cd",
        "a2": "dir",
        "a3": "ls",
        "a4": "pwd",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie wiersza poleceń Linux służące do przełączania katalogów to?",
        "url":"",
        "a1": "cd",
        "a2": "ls",
        "a3": "dir",
        "a4": "pwd",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie wiersza poleceń Windows służące do tworzenia katalogów to?",
        "url":"",
        "a1": "mkdir",
        "a2": "create",
        "a3": "cd",
        "a4": "dir",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie wiersza poleceń Linux służące do tworzenia katalogów to?",
        "url":"",
        "a1": "mkdir",
        "a2": "create",
        "a3": "ls",
        "a4": "dir",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie wiersza poleceń Windows służące do cofania się w strukturze katalogów to?",
        "url":"",
        "a1": "cd ../cd..",
        "a2": "cd ./cd .",
        "a3": "ls",
        "a4": "pwd",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie wiersza poleceń Linux służące do cofania się w strukturze katalogów to?",
        "url":"",
        "a1": "cd ..",
        "a2": "cd..",
        "a3": "cd.",
        "a4": "bd",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie wiersza poleceń Windows służące wyświetlenia aktualnej ścieżki to?",
        "url":"",
        "a1": "cd",
        "a2": "chdsk",
        "a3": "ls",
        "a4": "pwd",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie wiersza poleceń Linux służące do cofania się w strukturze katalogów to?",
        "url":"",
        "a1": "pwd",
        "a2": "cd",
        "a3": "chmod",
        "a4": "ls",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie wiersza poleceń Windows służące do czyszczenia okna konsoli to?",
        "url":"",
        "a1": "cls",
        "a2": "clear",
        "a3": "c",
        "a4": "clearis",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie wiersza poleceń Linux służące do czyszczenia okna konsoli to?",
        "url":"",
        "a1": "clear",
        "a2": "cls",
        "a3": "c",
        "a4": "clearis",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie wiersza poleceń Windows służące do sprawdzenia adresacji IP to?",
        "url":"",
        "a1": "ipconfig",
        "a2": "ifconfig",
        "a3": "iconfig",
        "a4": "netstat",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie wiersza poleceń Linux służące do sprawdzenia adresacji IP to?",
        "url":"",
        "a1": "ifconfig",
        "a2": "ipconfig",
        "a3": "iconfig",
        "a4": "netstat",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie wiersza poleceń Linux chmod 777 nada każdemu maksymalne uprawnienia do zasobu?",
        "url":"data:image/png;base64,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",
        "a1": "TAK",
        "a2": "NIE",
        "a3": "",
        "a4": "",
        "tag": "NIEOFICJALNE",
        "type": "2A"
    },
    {
        "question":"Liczba 6 podana do polecenia chmod nadaje uprawnienie?",
        "url":"data:image/png;base64,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",
        "a1": "read-write",
        "a2": "read-execute",
        "a3": "write-execute",
        "a4": "wszystkie",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Liczba 3 podana do polecenia chmod nadaje uprawnienie?",
        "url":"data:image/png;base64,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",
        "a1": "write-execute",
        "a2": "read-execute",
        "a3": "read-write",
        "a4": "wszystkie",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Parametr r-xrwx--- podany do polecenia chmod systemu linux nadaje uprawnienie?",
        "url":"data:image/png;base64,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",
        "a1": "do zapisu tylko grupie",
        "a2": "do zapisu wszystkim",
        "a3": "do zapisu użytkownikowi",
        "a4": "do odczytu wszystkim",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
    {
        "question":"Polecenie systemu linux zmieniające właściciela zasobu to?",
        "url":"",
        "a1": "chown",
        "a2": "chmod",
        "a3": "mod",
        "a4": "own",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
]

export default questions;