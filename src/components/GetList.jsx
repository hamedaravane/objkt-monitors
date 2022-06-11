import React from 'react';
import PropTypes from 'prop-types';

GetList.propTypes = {
    studentList: PropTypes.array,
};

GetList.defaultProps = {
    studentList: [],
}

function GetList(props) {
    const {studentList} = props;
    return (
        <ul>
            {studentList.map(post => {
                <li key={post.id}>{post.name}</li>
            })}
        </ul>
    );
}

export default GetList;