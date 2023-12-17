import "./document_view.css";
import Welcome from "./welcome";

function DocumentView(props) {
  let items=[];

  for(let i = 0;i<props.files.length;i++){
    items.push(<li className="list_item" key={i}><a className="file" href={props.files[i]["url"]} target="_blank" rel="noreferrer">{props.files[i]["title"]}</a></li>)
  }

  return (
    <div className="document_view">
      <center>
        <div className="welcome_text">
          <Welcome questions={props.total}></Welcome>
        </div>
      </center>
      <hr />
      <center>
        <ul className="list">
          {items}
        </ul>
      </center>
    </div>
  );
}

export default DocumentView