import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklineReferenceLine} from 'react-sparklines';


function average(data) {
    return _.round(_.sum(data) / data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={30} width={45} data={props.data}>
                <SparklinesLine color={props.color}/>
                {/*<SparklineReferenceLine type={avg}/>*/}
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
}