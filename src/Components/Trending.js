import "./Trending.css"

function Trending(props){
    return(
        <p>
            <div className="trendingMain">
                <p className="headerSmall">{props.data.header}</p>
                <p className="text">{props.data.text}</p>
                <p className="headerSmall">{props.data.tweetcount}</p>
            </div>
        </p>
    )
}

export default Trending;