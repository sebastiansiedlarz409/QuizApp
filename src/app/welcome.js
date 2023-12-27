import './welcome.css';

function Welcome(props){
    const hide_welcome = ()=>{
        let welcome = document.querySelector(".welcome");
        if(welcome) welcome.style.display="none";
    }

    return(
        <div className="welcome">
            <div className="welcome_hide" onClick={() => hide_welcome()}>X</div>
            <h1>Witaj programisto!</h1>
            <p>
                Strona powstała z myślą o osobach zdających egzamin INF04. Zawiera ona quiz oraz inne przydatne materiały. 
                Dla uczniów i studentów na wyższym poziome, materiały te także powinny być użyteczne. 
                Liczba pytań w bazie to <b>{props.questions}</b>.<br />
            </p>
            <p>Życzymy owocnej nauki i zachęcamy do korzystania/polecania!</p>
            <p className="warning">Zakładka <strong>Ustawienia</strong> pozwala wyłączyć niechciane kategorie ;)</p>
            <p>Ostatnia aktualizacja: 17.12.2023</p>
        </div>
    );
}

export default Welcome;