export default function Card({children, predefinedStyleTags, styles}){
    return (
        <div className={predefinedStyleTags} style={{styles}}>
            {children}
        </div>
    )
}