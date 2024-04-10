export default function Button({title='*no name', styles='', predefinedStyleTags='',key}){
    return(
        <button key ={key} style={{styles}} className={predefinedStyleTags}>{title}</button>
    )
}