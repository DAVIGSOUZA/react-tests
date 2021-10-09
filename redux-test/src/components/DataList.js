import React from 'react';
import { connect } from 'react-redux';
import { selectData } from '../redux/actions';

const DataList = ({data, selectData}) => {
    return (
        <div>
            <h1>Data List</h1>
            {data.map(data => (
                <div key={data.id}>
                    <h3>
                        {`${data.name} => `}
                        <button onClick={() => selectData(data)}>
                            Details
                        </button>
                    </h3>
                    <hr />
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({ data: state.data })

// para uma action creator ser tratada como tal e não como uma função javascript 
// comum é necessário ser chamada como argumento da função dispatch, a função 
// connect da lib 'react-redux' abstrai essa parte fazendo com que a action 
// creator passe a ser tratada como uma prop.
export default connect(mapStateToProps, { selectData })(DataList);
