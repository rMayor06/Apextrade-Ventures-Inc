const Select=(props)=>{
    const {text}=props
    return(
    <div>
    <select onChange={e=>setRating1(e.target.value)}
    className="font-bold"
    >
        {text.map((item, index)=>(
            <option key={index}>
                {item}
            </option>
        ))}
     </select>
     </div>
    )
}
export default Select