export default function Resultado({resultado}) {
    return (
        <div className="m-4">
            <p className="text-white text-3xl">Resultado: {resultado.toFixed(2)}</p>
        </div>
    )
}