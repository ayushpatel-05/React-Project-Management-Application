

export default function Input({field, type, handelProjectData, data}) {
    return (
        <div className="w-full flex flex-col self-start">
            <label>{field}</label>
            {type == 'textarea' 
            ? <textarea value={data || ''} onChange={handelProjectData} className="bg-[#e1dfdd] border-b-4 border-b-[#ceccca] p-1 resize-none overflow-hidden focus:outline-none focus:border-b-4 focus:border-b-[#100e0c]"></textarea> 
            : <input value={data || ''} onChange={handelProjectData} type={type} className="bg-[#e1dfdd] border-b-4 border-b-[#ceccca] p-1 focus:outline-none focus:border-b-[#100e0c]"></input>}
        </div>
    )
}