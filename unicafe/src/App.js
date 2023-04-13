import React, {useState} from 'react';

const Header = ({text}) => {
    return (
        <h1>{text}</h1>
    );
}
const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    );
}
const EmptyStatistics = () => {
    return (
        <div>
            <Header text="statistics"/>
            <p>No feedback given</p>
        </div>
    );
}
const StatisticsLine = ({text,value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    );
}
const Statistics = ({good, neutral, bad,all}) => {
    if(all === 0){
        return (
            <EmptyStatistics />
        )
    }
    return (
        <div>
            <Header text="statistics"/>
            <table>
                <tbody>
                    <StatisticsLine text="good" value={good}/>
                    <StatisticsLine text="neutral" value={neutral}/>
                    <StatisticsLine text="bad" value={bad}/>
                    <StatisticsLine text="all" value={all}/>
                    <StatisticsLine text="average" value={(good - bad) / all}/>
                    <StatisticsLine text="positive" value={(good/all)*100 + " %"}  />
                </tbody>
            </table>
        </div>
    );
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);


    const handleGoodClick = () => {
        setGood(good + 1);
        const all = good + neutral + bad + 1;
        setAll(all);
    }
    const handleBadClick = () => {
        setBad(bad + 1);
        const all = good + neutral + bad + 1;
        setAll(all);
    }
    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
        const all = good + neutral + bad + 1;
        setAll(all);
    }
    return (
        <div>
            <Header text="give feedback"/>
            <Button text="good" handleClick={handleGoodClick}/>
            <Button text="neutral" handleClick={handleNeutralClick}/>
            <Button text="bad" handleClick={handleBadClick}/>
            <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
        </div>
    );
};

export default App;
