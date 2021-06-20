function youtube(){
    var begriff = document.getElementById("yt_input").value;
    begriff = "https://www.youtube.com/results?search_query=" + begriff;
    document.getElementById("yt_link").setAttribute("href", begriff);
}