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
            <>
            <h1>{quote}</h1>
            <p>{author}</p>
            <img src={img} alt="bgimg" />
            </>
        )
}

export default FetchQuote