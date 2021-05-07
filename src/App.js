/* TODO: 
  initial styling - DONE
  states - DONE
  markdown
  better styling
  responsive
  test
*/

import React, {useState} from 'react'
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
    const [editor, setEditor] = useState('')
    const [preview, setPreview] = useState('')

    const handleEditorText = (evt) => {
        setEditor(evt.target.value)
        setPreview(evt.target.value.toUpperCase())
    }
    
    const styles = useStyles()
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <textarea value={editor} onChange={handleEditorText} className={styles.markdownArea}/>
                <textarea value={preview} readOnly className={styles.previewArea}/>
            </div>
        </div>
    )
}

export default App