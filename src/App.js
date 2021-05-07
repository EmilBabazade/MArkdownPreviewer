import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        margin: '0',
        padding: '0'
    },
    content: {
        position: 'absolute',
        height: '100%',
        width: '80%',
        left: '10%',
        right: '10%',
    },
    textArea: {
        display: 'block',
        width: '100%',
        height: '50%',
        margin: '0'
    },
    markdownArea: {
        extend: 'textArea',
    },
    previewArea: {
        extend: 'textArea',
    }
})

const App = () => {
    const styles = useStyles()

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <textarea className={styles.markdownArea}/>
                <textarea className={styles.previewArea}/>
            </div>
        </div>
    )
}

export default App