import React,{useState,useEffect} from "react";

function FetchQuote() {
    const [quote,setQuote] = useState('');
    const [img,setImg] = useState('');
    const [loading,setLoading] = useState(true);
    const [author,setAuthor] = useState('');
    useEffect(() => {
        fetch('https://quotes.rest/qod.json?category=inspire')
        .then (res => res.json())
        .then (data => {
            console.log(data);
            setQuote(data.contents.quotes[0].quote);
            setAuthor(data.contents.quotes[0].author);
            setImg(data.contents.quotes[0].background);
        })
    },[])
        return(
            <div className="main">
            <h1 className="quote">{quote}</h1>
            <p className="author">{author}</p>
            <img className="img" src={img} alt="bgimg" />
            </div>
        )
}

export default FetchQuote