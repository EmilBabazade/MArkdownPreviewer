/* TODO: 
  initial styling - DONE
  states - DONE
  markdown - DONE
  better styling
    window title bars for editor and preview - DONE
    button to make full screen - DONE
    pane header font
    animations for width change
    shadows
  extract into components
  stack panes vertically for mobile
  responsive
  arrow images for buttons - DONE
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
        padding: '7px',
        cursor: 'pointer'
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
    const [fullScreen, setFullScreen] = useState({
        editor: false, preview: false
    })

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

    //make fullscreen on buttonpress
    const styles = useStyles()
    const [editorButtonJssStyle, setEditorButtonStyle] = useState(styles.rightArrow)
    const [previewButtonJssStyle, setPreviewButtonStyle] = useState(styles.leftArrow)

    let editorStyle = {}
    // let editorButtonJssStyle = styles.rightArrow
    let previewStyle = {}

    if(fullScreen.editor && !fullScreen.preview) {
        editorStyle = {
            width: '100%'
        }
        previewStyle = {
            display: 'none'
        }
    }

    if(fullScreen.preview && !fullScreen.editor) {
        previewStyle = {
            width: '100%'
        }
        editorStyle = {
            display: 'none'
        }
    }
    
    const handleEditorFullScreen = () => {
        if(!fullScreen.editor) {
            setFullScreen({editor: true, preview: false})
            setEditorButtonStyle(styles.leftArrow)
        }
        else {
            setFullScreen({editor: false, preview: false})
            setEditorButtonStyle(styles.rightArrow)
        }
    }

    const handlePreviewerFullScreen = () => {
        if(!fullScreen.preview) {
            setFullScreen({editor: false, preview: true})
            setPreviewButtonStyle(styles.rightArrow)
        }
        else {
            setFullScreen({editor: false, preview:false})
            setPreviewButtonStyle(styles.leftArrow)
        }
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.pane} style={editorStyle}>
                    <div className={styles.paneHeader}>
                        <p>Editor</p>
                        <i className={editorButtonJssStyle} onClick={handleEditorFullScreen}></i>
                    </div>
                    <textarea value={editor} onChange={handleEditorText} className={styles.markdownArea}/>
                </div>
                {/* already sanitized */}
                <div className={styles.pane} style={previewStyle}>
                    <div className={styles.paneHeader}>
                        <i className={previewButtonJssStyle} onClick={handlePreviewerFullScreen}></i>
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