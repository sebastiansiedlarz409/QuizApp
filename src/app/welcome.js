import './welcome.css';

function Welcome(props){
    return(
        <div className="welcome">
            <h1>Witaj programisto!</h1>
            <p>
                Strona powstała z myślą o osobach zdających egzamin INF04. Zawiera ona quiz oraz inne przydatne materiały. 
                Dla uczniów i studentów na wyższym poziome, materiały te także powinny być użyteczne. 
                Liczba pytań w bazie to <b>{props.questions}</b>.<br />
            </p>
            <p>Życzymy owocnej nauki i zachęcamy do korzystania/polecania!</p>
            <p className="warning">Strona przeniesiona na adres <a href="https://inf04.com">inf04.com</a>. Adres <a href="https://quiz.server122133.nazwa.pl">server122133</a> wygaśnie w połowie stycznia.</p>
            <p>Ostatnia aktualizacja: 17.12.2023</p>
        </div>
    );
}

export default Welcome;