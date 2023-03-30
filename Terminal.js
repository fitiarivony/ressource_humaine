class Terminal {
    static requestJSON(url, act, staff) {
        fetch(url, staff)
            .then(res => res.json())
            .then(data => {  act(data) });
    }
}


export default Terminal;