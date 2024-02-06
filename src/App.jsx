import style from "./App.module.scss";
import firstIm from "./assets/images/icon-reaction.svg";
import secondIm from "./assets/images/icon-memory.svg";
import thirdIm from "./assets/images/icon-verbal.svg";
import fourthIm from "./assets/images/icon-visual.svg";

function App() {


  const arr = [
    { img: firstIm, title: "Reaction", marks: "80", total: "100", color: "hsl(0, 100%, 67%)"  , background: "hsla(0, 100%, 67%, 0.1)"  },

    { img: secondIm, title: "Memory", marks: "92", total: "100", color: "hsl(39, 100%, 56%)" , background: "hsla(39, 100%, 56%, 0.1)"  },

    { img: thirdIm, title: "Verbal", marks: "61", total: "100", color:"hsl(166, 100%, 37%)" , background:"hsla(166, 100%, 37%, 0.1)"  },

    { img: fourthIm, title: "Visual", marks: "72", total: "100", color: "hsl(234, 85%, 45%)" , background: "hsla(234, 85%, 45%, 0.1)"  },
  ];

  return (
    <>
      <div className={style.mainDiv}>
        <div className={`container-fluid ${style.secondDiv}`}>
          <div className="row">
            <div className={`col-lg-6 ${style.leftCol}`}>
              <p>Your Result</p>
              <div className={style.roundDiv}>
                <p className={style.scorePara}>76</p>
                <p>of 100</p>
              </div>

              <p>Great</p>
              <p>
                You have scored higher than 65% of people who have taken the
                test
              </p>
            </div>
            <div className={`col-lg-6 ${style.rightCol}`}>
              {/* this is right col */}
              <p>Summary</p>
              {arr.map((item, index) => (
                <div key={index} style={{background: item.background}} className={style.arrDiv}>
                  <div className={style.leftGroup}>
                    <img src={item.img} alt="the logos" />
                    <p style={{color: item.color}}>{item.title}</p>
                  </div>

                  <p>
                    {item.marks}/<span>{item.total}</span>
                  </p>
                </div>
              ))}

              <button>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
