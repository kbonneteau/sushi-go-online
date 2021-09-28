import './Tutorial.scss';

const Tutorial = () => {
    return (
        <section className="tutorial">
            <h1 className="tutorial__title">How to Play</h1>
            <div className="tutorial__tutorial-container">
                <article className="tutorial__tip">
                    <header>How to Play</header>
                </article>
                <article className="tutorial__tip">
                    <header>How to Score</header>
                </article>
                <article className="tutorial__tip">
                    <header>How to Win</header>
                </article>
            </div>
            <p className="tutorial__information">
                This is a tutorial tip
            </p>
        </section>
    );
};

export default Tutorial;