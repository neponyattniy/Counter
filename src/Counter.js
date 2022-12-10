import './Counter.css'


export default function Counter () {

  function onClick(event) {

    if (event.target.className==="minus"
     && Number(document.querySelector(".num").textContent)>-10)
    {

      document.querySelector(".num").textContent = Number(document.querySelector(".num").textContent) -1

    } 
    else if (event.target.className==="plus" 
    && Number(document.querySelector(".num").textContent)<10)
    {

      document.querySelector(".num").textContent = Number(document.querySelector(".num").textContent) +1

    }
  }
  return (
    <div>
        <button className="minus" onClick={onClick}>
            -
        </button>
        <p className="number">0</p>
        <button className="plus" onClick={onClick}>
            +
        </button>
    </div>
  );
}
