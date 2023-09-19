export default function CalculoImc({peso, altura, resultado}) {
    const calculoImc = () =>{
        if(peso == 0 && altura == 0){
            resultado(0)
        } else {
            resultado(peso/(altura*altura))
        }
    }
    return (
        <div className="m-4">
            <button className="px-6 py-2 bg-sky-900 text-white text-2xl rounded-full hover:bg-sky-800 transition-colors" onClick={calculoImc}>Calcular</button>
        </div>
    )
}