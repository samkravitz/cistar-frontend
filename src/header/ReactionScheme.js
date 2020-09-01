import React from 'react'
import { Gluejar } from '@charliewilco/gluejar'

const ReactionScheme = props => {
    return (
        <div className='ReactionScheme' style={styles.main}>
            <span>Paste the complete, balanced chemical reaction scheme including ALL the by-products</span>
            <div style={{ backgroundColor: 'white', }}>

            
            <Gluejar onPaste={files => console.log(files)} onError={err => console.error(err)}>
                {({ images }) =>
                    images.length > 0 &&
                    images.map(image => <img src={image} key={image} alt={`Pasted: ${image}`} style={styles.imageStyle} />)
                }
            </Gluejar>
            </div>
        </div>
    )
}

const styles = {
    main: {
        margin: '1rem auto',
        textAlign: 'center',
        display: 'block'
    },

    imageStyle: {
        maxWidth: '100%',
        display: 'inline-block',
        verticalAlign: 'middle',
        fontStyle: 'italic',
        marginBottom: 8
    }
}


export default ReactionScheme