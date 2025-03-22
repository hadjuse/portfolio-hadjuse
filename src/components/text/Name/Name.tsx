import '../../../assets/css/Name.css'

function Name({ name } : { name: string }){
    return (
        <>
            <div className={'text-wrapper'}>
                <div className={'name'}>
                    <h1>{name}</h1>
                </div>
            </div>

        </>
    )
}
export default Name;