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
        "question":"Łańcuch tekstowy w C/C++ może zostać umieszcony między apostrofami?",
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
        "question":"Słowo kluczowe const oznacza stałą?",
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
        "a1": "0x11111111",
        "a2": "0x10000000",
        "a3": "0x01111111",
        "a4": "0x00000001",
        "tag": "NIEOFICJALNE",
        "type": "4A"
    },
]

export default questions;