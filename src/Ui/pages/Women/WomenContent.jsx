import React, { useEffect, useState } from 'react'
import CardCom from '../../components/CardCom'
import WatchData from '../../../utils/watch.json'


export default function HomeContent(props) {
    const [Data, setData] = useState(WatchData);
    useEffect(() => {

        let filteredData = WatchData.filter((e) => {
            return e?.gender === "Women" && e?.name
                ?.toLowerCase?.()
                ?.includes?.(props?.searchText?.toLowerCase?.());
        });
        setData(filteredData)
    }, [props?.searchText]);
    return (
        <>
            <div style={{ backgroundColor: '#f5f5dc' }} className='d-flex flex-wrap justify-content-around'>
                {
                    Data?.map?.((e) => {
                        return <CardCom data={e} />
                    })
                }
            </div>
        </>
    )
}
