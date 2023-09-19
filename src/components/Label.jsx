export default function Label({nome, value, setValue}) {
    return (
        <div className="py-4">
            <label className="text-white text-2xl" htmlFor="">{nome}
                <input className="bg-cyan-500 rounded-lg text-center text-white m-3" type="number" value={value} onChange={(e)=>{setValue(e.target.value)}} />
            </label>
        </div>
    )
}