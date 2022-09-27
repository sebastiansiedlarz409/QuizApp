function Welcome(props){
    return(
        <div>
            <h1>Witaj przyszły programisto!</h1>
            <p>
            Ta strona została utworzona z myślą o osobach zdających egzamin
            INF04. Liczba pytań w bazie to <b>{props.questions.length}</b>.
            Ułatwią ci one przygotowanie się do owego egzamiu. Życzymy owocnej
            nauki :)
            </p>
            <p>Ostatnia aktualizacja: 27.09.2022 19:45</p>
        </div>
    );
}

export default Welcome;