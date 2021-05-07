/* TODO: 
  initial styling - DONE
  states - DONE
  markdown - DONE
  better styling
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
        height: '100%',
        width: '80%',
        left: '10%',
        right: '10%',
    },
    textArea: {
        display: 'block',
        width: '100%',
        height: '50%',
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