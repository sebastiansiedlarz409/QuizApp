import './welcome.css';

function Welcome(props){
    return(
        <div className="welcome">
            <h1>Witaj programisto!</h1>
            <p>
                Ta strona została utworzona z myślą o osobach zdających egzamin INF04.
                Zawiera ona quiz pod ten egzamin, ale pytania spokojnie trafią także do uczniów/studentów na wyższym poziomie. 
                Liczba pytań w bazie to <b>{props.questions.length}</b>.<br />
            </p>
            <p>
                W zakładce <b>MATERIAŁY</b> znajdują się luźne notatki na różne tematy, które moga się przydać każdemu :)
                <br />
                Natomiast zakładka <b>INFO GRAFIKI</b> zwiera obrazki tłumaczące pewne rzeczy tak szybko i w tak skróconej formie jak to tylko możliwe.
            </p>
            <p>Życzymy owocnej nauki i zachęcamy do korzystania/polecania!</p>
            <p>Ostatnia aktualizacja: 03.12.2023</p>
        </div>
    );
}

export default Welcome;