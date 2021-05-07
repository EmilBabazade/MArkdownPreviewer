/* TODO: 
  initial styling - DONE
  states - DONE
  markdown - DONE
  better styling
    window title bars for editor and preview
    button to make full screen
  responsive
  test
*/

import React, {useState, useEffect} from 'react'
import {createUseStyles} from 'react-jss'
import marked from 'marked'
import DOMPurify from 'dompurify'
import initialText from './placeholderText'

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
        height: '80%',
        width: '100%',
        top: '10%',
        display: 'flex',
        flexFlow: 'row'
    },
    textArea: {
        width: '50%',
        height: '100%',
        margin: '0',
        backgroundColor: '#ffffff'
    },
    markdownArea: {
        extend: 'textArea',
    },
    previewArea: {
        extend: 'textArea',
        overflow: 'scroll'
    }
})

const App = () => {
    const [editor, setEditor] = useState(initialText)
    const [preview, setPreview] = useState('')

    // initialize preview
    useEffect(() => {
        // sanitize
        const clean = DOMPurify.sanitize(editor)
        // render
        setPreview(marked(clean))
    },[])

    const handleEditorText = (evt) => {
        const input = evt.target.value
        setEditor(input)
        // sanitize
        const cleanInput = DOMPurify.sanitize(input)
        // render
        setPreview(marked(cleanInput))
    }
    
    const styles = useStyles()
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <textarea value={editor} onChange={handleEditorText} className={styles.markdownArea}/>
                {/* already sanitized */}
                <div className={styles.previewArea} dangerouslySetInnerHTML={{
                    __html: preview
                }} />
            </div>
        </div>
    )
}

export default App