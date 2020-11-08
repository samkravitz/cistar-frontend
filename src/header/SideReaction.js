import React from 'react'
import { Label, Input } from 'reactstrap'

const SideReaction = ({ num }) => {

    if (num === 0) return null;

    const arr = []

    for (let i = 1; i <= num; i++) {
        arr.push(
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1em' }}>
                
                <div className='Temperature Onset'>
                    <Label for="Temperature Onset">Reaction {i} temperature onset</Label>
                    <Input type="text" name="Temperature Onset" />
                </div>

                <div className='Pressure Onset'>
                    <Label for="Pressure Onset">Reaction {i} pressure onset</Label>
                    <Input type="text" name="Pressure Onset" />
                </div>

                <div className='Details'>
                    <Label for="Details">Reaction {i} details</Label>
                    <Input type="text" name="Details" />
                </div>
            </div>
        )
    }

    return (
        <div className="SideReaction" style={{ padding: '1em' }}>
            {
                arr
            }
        </div>
    )
}

export default SideReaction