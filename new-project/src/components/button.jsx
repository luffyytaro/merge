export default function Button(props) {
    return(
        <article className="w-5/6">
            <button {...props} className="h-10 w-full" >{props.children}</button>
        </article>
    );
}
