export default function Data({ level }) {

    const differentTexts = [
        "First You  Learn JavaScript",
        "Learn ReactJS",
        "And Ready To Earn "
    ]




    return (
        <div style={{ textAlign: 'center', color : 'white', fontSize: '40px',marginTop:"100px"}}>
            {differentTexts[level - 1]}
        </div>
    )
}