import React from 'react'
import CardCom from '../../components/CardCom'
import WatchData from '../../../utils/watch.json'

export default function HomeContent() {
    return (
        <>
            <div style={{ backgroundColor: '#f5f5dc' }} className='d-flex flex-wrap justify-content-around'>
                {
                    WatchData?.map?.((e) => {
                        return <CardCom data={e} />
                    })
                }
            </div>
        </>
    )
}
