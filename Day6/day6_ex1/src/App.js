import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

const textState = atom({
  key: "textState",
  default: ""
});

const charCountState = selector({
  key:"charCountState",
  get:({get}) => {
    const text = get(textState);
    return text.length;
  },
});

function TextInput(){
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => {
    setText(event.target.value);
  };
  return(
    <div>
      <input type = "text" value={text} onChange={onChange}/>
      <br/>
      Echo: {text}
      <br/>
      add 10: {Number.parseInt(text)+10}
    </div>
  )
}

function CharacterCount(){
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>
}

function CharacterCounter(){
  return(
    <div>
      <TextInput/>
      <CharacterCount/>
    </div>
  )
}

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Hello GCU-Kakao</h1>
        <h2>Hello Recoil</h2>
        <CharacterCounter/>
      </div>
    </RecoilRoot>
  );
}
