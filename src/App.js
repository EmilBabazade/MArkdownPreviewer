/* TODO: 
  initial styling - DONE
  states - DONE
  markdown - DONE
  better styling
    window title bars for editor and preview - DONE
    button to make full screen - DONE
    pane header font - DONE
    animations for width change - DONE
    borders - DONE
    shadows - DONE
    arrow images for buttons - DONE
    stack panes vertically for mobile - DONE
  tab title - DONE
  logo - DONE
  test - DONE
*/

import React, {useState, useEffect} from 'react'
import {createUseStyles} from 'react-jss'
import marked from 'marked'
import DOMPurify from 'dompurify'
import initialText from './placeholderText'
import 'jss-plugin-global'

const containerBackground = '#87b5b5'
const paneHeaderBackground = '#4aa3a3' 
const textContainerBackground = '#c0d8d8'
const textContainerHeight = 95
const ANIMATION_DURATION_SECONDS = 1
const BORDER_COLOR = '#000000'

const useStyles = createUseStyles({
    '@global': {
        body: {
            overflowX: 'hidden'
        }
    },
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
        flexFlow: 'row',

        // stack panes vertically on mobile and make it fullscreen
        '@media screen and (max-width: 650px)': {
            flexFlow: 'column',
            height: '100%',
            top: 0
        }
    },
    pane: {
        width: '50%',
        height: '100%',
        margin: '0',
        backgroundColor: '#ffffff',
        transition: `width ${ANIMATION_DURATION_SECONDS}s`,
        border: `solid 1px ${BORDER_COLOR}`,
        boxShadow: '2px 2px 5px black',

        // stack panes vertically on mobile and make it fullscreen
        '@media screen and (max-width: 650px)': {
            width: '100%',
            height: '50%',
            transition: 'none' // don't need width animations on mobile, since it will be full screen
        }
    },
    textContainer: {
        height: `${textContainerHeight}%`,
        width: '100%',
        padding: '10px',
        backgroundColor: textContainerBackground
    },
    markdownArea: {
        extend: 'textContainer',
        resize: 'none',
        outline: 'none',
        border: 'none'
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
        borderBottom: `solid 1px ${BORDER_COLOR}`,
        boxShadow: '-2px -2px 5px black',
        '& *': {
            margin: 0,
            padding: 0,
            fontFamily: 'Electrolize, sans-serif'
        }
    },
    arrow: {
        height: '100%',
        border: 'solid black',
        borderWidth: '0 3px 3px 0',
        display: 'inline-block',
        padding: '7px',
        cursor: 'pointer',

        // get rid of fullscreen functionality on mobile
        '@media screen and (max-width: 650px)': {
            display: 'none'
        }
    },
    rightArrow: {
        extend: 'arrow',
        transform: 'rotate(-45deg)'
    },
    leftArrow: {
        extend: 'arrow',
        transform: 'rotate(135deg)'
    },
    hiddenArrow: {
        display: 'none'
    },
    hiddenPane: {
        width: '0%'
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
    
    const [editorButtonStyle, setEditorButtonStyle] = useState(styles.rightArrow)
    const [previewButtonStyle, setPreviewButtonStyle] = useState(styles.leftArrow)

    let editorStyle = {}
    let previewStyle = {}

    // editor fullscreen preview hide
    if(fullScreen.editor && !fullScreen.preview) {
        editorStyle = {
            width: '100%'
        }
        previewStyle = {
            width: '0%'
        }
    }

    // preview fullscreen editor hide
    if(fullScreen.preview && !fullScreen.editor) {
        previewStyle = {
            width: '100%'
        }
        editorStyle = {
            width: '0%'
        }
    }
    
    // change fullscreen state for above to work
    // change arrows
    const handleEditorFullScreen = () => {
        if(!fullScreen.editor) {
            setFullScreen({editor: true, preview: false})
            setEditorButtonStyle(styles.leftArrow)
            setPreviewButtonStyle(styles.hiddenArrow)
        }
        else {
            setFullScreen({editor: false, preview: false})
            setEditorButtonStyle(styles.rightArrow)
            setPreviewButtonStyle(styles.leftArrow)
        }
    }

    const handlePreviewerFullScreen = () => {
        if(!fullScreen.preview) {
            setFullScreen({editor: false, preview: true})
            setPreviewButtonStyle(styles.rightArrow)
            setEditorButtonStyle(styles.hiddenArrow)
        }
        else {
            setFullScreen({editor: false, preview:false})
            setPreviewButtonStyle(styles.leftArrow)
            setEditorButtonStyle(styles.rightArrow)
        }
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.pane} style={editorStyle}>
                    <div className={styles.paneHeader}>
                        <p>Editor</p>
                        <i className={editorButtonStyle} onClick={handleEditorFullScreen}></i>
                    </div>
                    <textarea value={editor} onChange={handleEditorText} className={styles.markdownArea}/>
                </div>
                {/* already sanitized */}
                <div className={styles.pane} style={previewStyle}>
                    <div className={styles.paneHeader}>
                        <i className={previewButtonStyle} onClick={handlePreviewerFullScreen}></i>
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