export default function Buttons({ setLevel, level }) {

    console.log(setLevel, "setLevelKya hai")
    const previous = () => {
        if (level == 1) {
            setLevel(3)
        } else {
            setLevel(level - 1)
        }
    }
    const next = () => {
        if (level == 3) {
            setLevel(1)
        } else {
            setLevel((previous) => previous + 1)
            setLevel((previous) => previous + 1)
        }
    }



    return (
        <div style={{ display: 'flex', justifyContent: "space-around" ,marginTop:"100px"}}>
            <button class="btn btn-primary" onClick={previous}>Previous</button>
            <button class="btn btn-primary" onClick={next}>Next</button>
        </div>
    )
}