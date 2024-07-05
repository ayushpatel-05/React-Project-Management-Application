export default function Input({field, type}) {
    return (
        <div className="w-full flex flex-col self-start">
            <label>{field}</label>
            {type == 'textarea' 
            ? <textarea className="bg-[#e1dfdd] border-b-4 border-b-[#ceccca] p-1 resize-none overflow-hidden focus:outline-none focus:border-b-4 focus:border-b-[#100e0c]"></textarea> 
            : <input type={type} className="bg-[#e1dfdd] border-b-4 border-b-[#ceccca] p-1 focus:outline-none focus:border-b-[#100e0c]"></input>}
            

            {/* {type == 'textarea' 
            ? <textarea className="bg-[#e1dfdd] border-b-4 border-b-[#ceccca] p-1 resize-none overflow-hidden focus:border-b-4 focus:border-b-[#100e0c]"></textarea> 
            : <input
            type={type}
            className="bg-[#e1dfdd] border-b-4 border-[#ceccca] p-1 focus:outline-none focus:border-[#ceccca] focus:border-b-[#100e0c]"
            placeholder="Enter text here"
          />} */}
        </div>
    )
}