import Markdown from 'react-markdown'

export default function Recipe ({ recipe }) {
    return (
        <div className='suggested-recipe-container' aria-live='polite'>
            <h2>Chef Recommends:</h2>
            <Markdown>
                {recipe}
            </Markdown>
        </div>
    )
}