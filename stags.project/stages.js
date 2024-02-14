export default function Stages({ level }) {

    const stagesNumber = [1, 2, 3]


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around'}}>

                {
                    stagesNumber.map(singleNum => (
                        <p style={
                            {
                                marginTop:"120px" ,
                                backgroundColor: level == singleNum ? "blue" : "black",
                                borderRadius: "50%",
                                height: "50px",
                                width: "50px",
                                display: 'flex',
                                alignItems: "center",
                                justifyContent: "center",
                                color: level == singleNum ? "yellow" : "white",
                                border: `2px solid ${level == singleNum ? 'yellow' : 'white'}`
                            }
                        }>{singleNum}</p>
                    ))
                }
            </div>
        </>
    )
}