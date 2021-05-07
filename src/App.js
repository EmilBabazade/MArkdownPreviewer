/* TODO: 
  initial styling - DONE
  states - DONE
  markdown - DONE
  better styling
    window title bars for editor and preview - DONE
    button to make full screen
    pane header font
    shadows
  responsive
  extract into components
  arrow images for buttons
  test
*/

import React, {useState, useEffect} from 'react'
import {createUseStyles} from 'react-jss'
import marked from 'marked'
import DOMPurify from 'dompurify'
import initialText from './placeholderText'

const containerBackground = '#87b5b5'
const paneHeaderBackground = '#4aa3a3' 
const textContainerBackground = '#c0d8d8'
const textContainerHeight = 95
// const paneHeaderHeight = 100 - textContainerHeight

const useStyles = createUseStyles({
    container: {
        width: '100%',
        height: '100%',
        margin: '0',
        padding: '0',
        backgroundColor: containerBackground
    },
    content: {
        position: 'absolute',
        height: '80%',
        width: '100%',
        top: '10%',
        display: 'flex',
        flexFlow: 'row'
    },
    pane: {
        width: '50%',
        height: '100%',
        margin: '0',
        backgroundColor: '#ffffff'
    },
    textContainer: {
        height: `${textContainerHeight}%`,
        width: '100%',
        padding: '10px',
        backgroundColor: textContainerBackground
    },
    markdownArea: {
        extend: 'textContainer',
    },
    previewArea: {
        extend: 'textContainer',
        overflow: 'scroll'
    },
    paneHeader: {
        width: '100%',
        padding: '5px',
        backgroundColor: paneHeaderBackground,
        margin: 0,
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        '& *': {
            margin: 0,
            padding: 0
        }
    },
    arrow: {
        height: '100%',
        border: 'solid black',
        borderWidth: '0 3px 3px 0',
        display: 'inline-block',
        padding: '7px'
    },
    rightArrow: {
        extend: 'arrow',
        transform: 'rotate(-45deg)'
    },
    leftArrow: {
        extend: 'arrow',
        transform: 'rotate(135deg)'
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
                <div className={styles.pane}>
                    <div className={styles.paneHeader}>
                        <p>Editor</p>
                        <i className={styles.rightArrow}></i>
                    </div>
                    <textarea value={editor} onChange={handleEditorText} className={styles.markdownArea}/>
                </div>
                {/* already sanitized */}
                <div className={styles.pane}>
                    <div className={styles.paneHeader}>
                        <i className={styles.leftArrow}></i>
                        <p>Previewer</p>
                    </div>
                    <div className={styles.previewArea} dangerouslySetInnerHTML={{
                        __html: preview
                    }} />
                </div>
            </div>
        </div>
    )
}

export default App