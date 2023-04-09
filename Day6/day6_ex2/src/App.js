import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const styles={
  main:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  wrapper:{
      margin:8,
      padding:8,
      maxWidth:"30vw",
      minWidth:"30rem",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      border:"3px solid grey",
      borderRadius: 16
  },
  inputWrap:{
      margin:8,
      padding:8,
      maxWidth:"3vw",
      minWidth:"3rem",
      display:"inline",
      flexDirection:"row",
      border:"3px solid grey",
      borderRadius: 16
  },
  operator:{
    margin:10,
    padding:10,
    justifyContent:"center",
    alignItems:"center",
    border:"2px solid navy",
    borderRadius: 30,
    fontSize:20,
    fontWeight:"bold"
  },
  layout:{
    width:"20vw",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    margin:20,
    display:"flex",
    borderTop:"2px solid grey" 
  },
  opLayout:{
    flexDirection:"column",
    margin:20,
  },
  num:{
    margin:12,
    padding:10,
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 20,
    fontSize:20,
    flexDirection: "column"
  }
};

const firstInput = atom({
  key: "firstInput",
  default: "",
});
const secondInput = atom({
  key: "secondInput",
  default: "",
});

const resultState = selector({
  key: "resultState",
  get: ({ get }) => {
    const first = get(firstInput);
    const second = get(secondInput);
    return {
      sum: Number(first) + Number(second),
      difference: Number(first) - Number(second),
      product: Number(first) * Number(second),
      quotient: isNaN( Number(first) / Number(second)) ? 0 : Number(first) / Number(second),
    };
  },
});

function NumberInput() {
  const [input1, setInput1] = useRecoilState(firstInput);
  const [input2, setInput2] = useRecoilState(secondInput);

  return (
    <div>
      <h4>
        Number1 <input style={styles.inputWrap} onChange={(e) => setInput1(e.target.value)}/>
      </h4>
      <h4>
        Number2 <input style={styles.inputWrap} onChange={(e) => setInput2(e.target.value)}/>
      </h4>
    </div>
  );
}

function Calculator() {
  const { sum, difference, product, quotient } = useRecoilValue(resultState);
  return (
    <div style={styles.main}>
      <div style={styles.wrapper}> 
        <div>GCU Calculator</div>
        <NumberInput/>
        <div style={styles.layout}>
          <div style={styles.opLayout}>
            <h4>Operator</h4>
            <div style={styles.operator}>+</div>
            <div style={styles.operator}>-</div>
            <div style={styles.operator}>*</div>
            <div style={styles.operator}>/</div>
          </div>
          <div style={styles.opLayout}>
            <h4>Num</h4>
            <div style={styles.num}>{sum}</div>
            <div style={styles.num}>{difference}</div>
            <div style={styles.num}>{product}</div>
            <div style={styles.num}>{quotient}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <div>
        <Calculator />
      </div>
    </RecoilRoot>
  );
}
