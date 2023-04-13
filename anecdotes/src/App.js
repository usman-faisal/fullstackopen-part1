import React, {useState} from 'react';

const Button = ({text,handleClick}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)
const Anecdote = ({anecdote,votes}) => (
    <div>
        <h2>{anecdote}</h2>
        <h2>has {votes} votes</h2>
    </div>
)
const MostVoted = ({anecdotes,votes}) => {
    const maxVotes = Math.max(...votes)
    const maxVotesIndex = votes.indexOf(maxVotes)
    if (maxVotes === 0) {
        return (
            <div>
                <h2>No votes yet</h2>
            </div>
        )
    }
    return (
        <div>
            <h2>{anecdotes[maxVotesIndex]}</h2>
            <h2>has {maxVotes} votes</h2>
        </div>
    )
}
const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]
    const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

    const [selected, setSelected] = useState(0)
    const setRandomAnecdote = () => {
        const randomIndex = Math.floor(Math.random() * anecdotes.length)
        setSelected(randomIndex)
    }
    const handleVoteClick = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
    }
    return (
        <div>
            <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]}/>
            <Button text="next anecdote" handleClick={setRandomAnecdote} />
            <Button text="vote" handleClick={handleVoteClick} />
            <MostVoted anecdotes={anecdotes} votes={votes} />
        </div>
    )
};

export default App;
