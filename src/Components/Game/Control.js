const Control = ({word, setCorrectText}) => {

    const urlBase = "https://api.dictionaryapi.dev/api/v2/entries/en/";

    const clickHandle = async () => {
        const response = await fetch(urlBase + word);
        if (response.ok) {
            setCorrectText("Correct");
        } else {
            setCorrectText("Incorrect");
        };
    };

    return (
        <div className="control">
            <div className="button" onClick={clickHandle}>
                Submit
            </div>
        </div>
    );
};

export default Control;