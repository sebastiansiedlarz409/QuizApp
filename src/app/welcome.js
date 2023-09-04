import './welcome.css';

function Welcome(props){
    return(
        <div className="welcome">
            <h1>Witaj przyszły programisto!</h1>
            <p>
                Ta strona została utworzona z myślą o osobach zdających egzamin
                INF04. Liczba pytań w bazie to <b>{props.questions.length}</b>.
                Ułatwią ci one przygotowanie się do owego egzaminu. Życzymy owocnej
                nauki :)
            </p>
            <p>
                W zakładce <b>MATERIAŁY</b> znajdują się luźne notatki na różne tematy, które moga się przydać :)
                <br />
                Natomiast zakładka <b>INFO GRAFIKI</b> zwiera obrazki tłumaczące pewne rzeczy tak szybko i w tak skróconej formie jak to tylko możliwe.
            </p>
            <p>Ostatnia aktualizacja: 03.09.2023 19:00</p>
        </div>
    );
}

export default Welcome;