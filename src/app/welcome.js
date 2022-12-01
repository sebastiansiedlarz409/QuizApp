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
            </p>
            <p>Ostatnia aktualizacja: 01.12.2022 15:30</p>
        </div>
    );
}

export default Welcome;