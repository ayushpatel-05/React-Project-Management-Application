export default function Button({textColor, bgColor, text, handelClick, parameter}) {
    let classname = "rounded-md px-4 py-2 "; 
    if(textColor)classname += textColor;
    if(bgColor)classname += bgColor;
    classname += " hover:brightness-150 "
    return (
        <>
            <button onClick={()=> handelClick(parameter)} className={classname}>{text}</button>
        </>
    )
}